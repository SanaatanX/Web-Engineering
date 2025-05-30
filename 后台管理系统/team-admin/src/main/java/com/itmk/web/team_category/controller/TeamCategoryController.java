package com.itmk.web.team_category.controller;

import com.itmk.web.team_category.vo.SelectType;
import com.itmk.web.team_category.vo.ResultVo;
import com.itmk.web.team_category.utils.ResultUtils;
import com.itmk.web.team_category.entity.TeamCategory;
import com.itmk.web.team_category.service.TeamCategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/teamCategory")
public class TeamCategoryController {

    @Autowired
    private TeamCategoryService teamCategoryService;

    @GetMapping("/getSelectList")
    public ResultVo getSelectList(){
        //查询所有的分类数据
        List<TeamCategory> list = teamCategoryService.list();
        //存储返回值的
        List<SelectType> selectList = new ArrayList<>();
        //组装下拉数据
        Optional.ofNullable(list).orElse(new ArrayList<>())
                .stream()
                .forEach(item ->{
                    SelectType type = new SelectType();
                    type.setLabel(item.getName());
                    type.setValue(item.getId().toString());
                    selectList.add(type);
                });
        return ResultUtils.success("查询成功",selectList);
    }
} 