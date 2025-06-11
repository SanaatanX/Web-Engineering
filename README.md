# Web-Engineering

XDU-2022级Web工程第2组

1. 许永烨：SanaatanX
2. 程鹏宇：shenyaoguan
3. 蔡欣雨：Rainbow0426
4. 钱帅成：3d2g
5. 张若庭：woumuh
6. 司卿贺：QingheSi

## 项目建议书

[项目建议书](大学生社团管理系统.md)

## 使用方法

### **1、版本**：

本项目使用前端框架为Vue，版本为3.2.47，语言为Typescript 16；后端语言为Java，版本为17.0.5；数据库使用版本为SQL，版本为8.0.42 。

### 2、对于前端项目依赖：

通过对应项目中的package.json文件进行依赖项目安装，在项目文件夹下打开命令行，运行如下指令进行安装

```
npm install
```

### 3、对于后端项目依赖：

Maven 会在构建时（如 `mvn package`）自动下载依赖。

### 4、Maven配置：

1. 首先在Maven官网下载Maven源代码文件并解压到本地

2. 随后在`settings.xml`里的`mirrors`范围内如下配置

```
    <mirror>
      <id>nexus-aliyun</id>
      <mirrorOf>central</mirrorOf>
      <name>Nexus aliyun</name>
      <url>http://maven.aliyun.com/nexus/content/groups/public</url>
    </mirror>
```

3. 在`maven`目录下新建文件夹`repo`,并在` <localRepository>`配置为

```
 <localRepository>repo路径</localRepository>
```

### 5、后端环境依赖

1. 在IDE中打开后端文件夹，并在设置中配置`maven`文件夹路径为第4步中的`maven`文件夹，并且配置仓库和设置文件为第4步中的对应文件

2. 同时刷新`maven`配置

3. 在配置中配置`SDKs`为`1.8`版本，同时配置项目和模块`SDK`和前述一致

### 6、数据库配置

1. 在`application-test.yml`文件中配置数据库用户名，密码和端口号与本地数据库一致

2. 在数据库中导入数据库脚本

### 7、运行

1. 对于前端项目，使用命令为`npm run dev`运行

2. 对于后端项目，首先使用`itmk-base-common`下`lifecycle`中的`clean`清空数据，之后使用`install`指令进行依赖下载
   
   1. 最后使用调试功能运行后端项目即可








