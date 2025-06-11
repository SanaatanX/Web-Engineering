package com.itmk.web.sys_menu.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.itmk.web.sys_menu.entity.CodeVo;
import com.itmk.web.sys_menu.entity.MakeMenuTree;
import com.itmk.web.sys_menu.entity.MenuVo;
import com.itmk.web.sys_menu.entity.SysMenu;
import com.itmk.web.sys_menu.mapper.SysMenuMapper;
import com.itmk.web.sys_menu.service.SysMenuService;
import org.springframework.stereotype.Service;

import java.util.List;

 
@Service
public class SysMenuServiceImpl extends ServiceImpl<SysMenuMapper, SysMenu> implements SysMenuService {
    @Override
    public List<SysMenu> getParent() {
        //查询菜单
        QueryWrapper<SysMenu> query = new QueryWrapper<>();
        query.lambda().eq(SysMenu::getType,"1");
        List<SysMenu> menuList = this.baseMapper.selectList(query);
        //构造顶级
        SysMenu menu = new SysMenu();
        menu.setMenuId(0L);
        menu.setParentId(-1L);
        menu.setTitle("顶级菜单");
        menu.setLabel("顶级菜单");
        menu.setValue(0L);
        menuList.add(menu);
        //组装树数据
        return MakeMenuTree.makeTree(menuList,-1L);
    }

    @Override
    public List<SysMenu> getMenuByUserId(Long userId) {
        return this.baseMapper.getMenuByUserId(userId);
    }

    @Override
    public List<MenuVo> getMenuVoById(Long userId) {
        return this.baseMapper.getMenuVoById(userId);
    }

    @Override
    public List<CodeVo> getCodeVoById(Long userId) {
        return this.baseMapper.getCodeVoById(userId);
    }

    @Override
    public List<MenuVo> getMenuNoVoById() {
        return this.baseMapper.getMenuNoVoById();
    }

    @Override
    public List<CodeVo> getCodeNoVoById() {
        return this.baseMapper.getCodeNoVoById();
    }
}
