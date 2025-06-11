# Task-12-安全分析报告

## 一、分析Web应用安全性隐患
社团管理系统常见安全隐患包括：

1. 注入攻击

2. SQL注入：用户输入未过滤直接拼接SQL语句

3. 命令注入：通过参数执行系统命令（如文件上传功能）

4. 跨站脚本攻击（XSS）

5. 用户提交的社团公告/评论中包含恶意脚本

6. 跨站请求伪造（CSRF）

7. 认证授权漏洞

8. 错误信息暴露数据库结构（如MySQL报错）

9. 配置文件（如application.yml）可被下载

## 二、添加安全性防护策略（以Spring Security为例）
1. 基础依赖配置
xml
```
<!-- pom.xml -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-security</artifactId>
</dependency>
```
2. 密码安全存储
```
java
@Bean
public PasswordEncoder passwordEncoder() {
    // 使用BCrypt强哈希加密（自动加盐）
    return new BCryptPasswordEncoder();
}

// 用户注册时加密密码
User user = new User();
user.setPassword(passwordEncoder.encode(rawPassword));
```
3. 认证授权配置
```
java
@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
            .authorizeRequests()
                .antMatchers("/admin/**").hasRole("ADMIN") // 管理员路径
                .antMatchers("/club/create").hasAnyRole("ADMIN", "TEACHER") // 创建社团需教师以上
                .antMatchers("/public/**").permitAll() // 公开资源
                .anyRequest().authenticated()
            .and()
            .formLogin()
                .loginPage("/login").permitAll() // 自定义登录页
            .and()
            .logout().permitAll()
            .and()
            .csrf().disable(); // 生产环境应开启CSRF
    }
}
```
4. 防护关键配置
```
java
// 启用全局方法级安全校验
@Configuration
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class MethodSecurityConfig extends GlobalMethodSecurityConfiguration {
}

// 在Service层添加权限控制
@PreAuthorize("hasRole('ADMIN') or #club.ownerId == authentication.principal.id")
public void updateClub(Club club) {
    // 仅管理员或社团创建者可修改
}
```
## 三、补充安全性测试用例
1. SQL注入测试
```
http
POST /club/search HTTP/1.1
Content-Type: application/x-www-form-urlencoded

keyword=test'; DROP TABLE clubs;--
```
预期结果：返回400错误，数据库无异常

2. XSS攻击测试
```
http
POST /announcement/create HTTP/1.1
Content-Type: application/json

{
  "content": "<script>alert('hack')</script>"
}
```
预期结果：前端显示时自动转义为&lt;script&gt;...&lt;/script&gt;

3. 越权访问测试
```
http
GET /admin/delete-user?userId=123 HTTP/1.1
Cookie: JSESSIONID=普通用户会话ID
```
预期结果：返回403 Forbidden

## 四、使用AWVS进行安全扫描
操作流程：

配置扫描目标

输入测试环境URL：http://your-club-system-test.com

设置登录凭证（测试账号）

选择扫描模板

plaintext
Vulnerability Scan -> Full Scan (包含所有漏洞类型)
关键检测项

注入漏洞检测

敏感文件扫描（如.git泄露）

目录遍历测试

弱密码字典测试

报告分析重点

| 漏洞等级 | 示例问题 | 修复方案 |
|---------|----------|--------|
|Critical|	SQL注入|	使用预编译语句：PreparedStatement|
High|	密码明文传输|	强制HTTPS并添加HSTS头|
Medium	|Cookie未设HttpOnly	|配置httpOnly=true|
Low	|暴露服务器版本|	隐藏Server响应头|
## 五、防护加固措施
输入过滤
```
java
// 防御XSS
public String sanitizeHtml(String input) {
    return Jsoup.clean(input, Whitelist.basic());
}
```
SQL防护
```
java
// 使用Spring Data JPA防止注入
@Query("SELECT c FROM Club c WHERE c.name = :name") 
Club findByName(@Param("name") String name);
```
强制安全传输
```
yaml
# application.yml
server:
  ssl:
    enabled: true
  port: 443
security:
  require-ssl: true
```
响应头加固
```
java
http.headers()
    .xssProtection().block(true)  // 启用XSS过滤器
    .contentSecurityPolicy("default-src 'self'") // CSP策略
    .httpStrictTransportSecurity(); // 强制HTTPS
```
工具替代方案：若无法使用AWVS，可用开源工具OWASP ZAP完成扫描，基本流程类似但需手动配置更多参数。
