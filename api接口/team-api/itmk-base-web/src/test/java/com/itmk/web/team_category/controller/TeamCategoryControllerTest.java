package com.itmk.web.team_category.controller;

import com.itmk.utils.ResultUtils;
import com.itmk.utils.ResultVo;
import com.itmk.web.team_category.entity.TeamCategory;
import com.itmk.web.team_category.service.TeamCategoryService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class TeamCategoryControllerTest {

    @Mock
    private TeamCategoryService teamCategoryService;

    @InjectMocks
    private TeamCategoryController controller;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testAddSuccess() {
        TeamCategory teamCategory = new TeamCategory();
        when(teamCategoryService.save(teamCategory)).thenReturn(true);

        ResultVo result = controller.add(teamCategory);

        assertEquals(ResultUtils.success("新增成功!").getCode(), result.getCode());
    }

    @Test
    void testAddFail() {
        TeamCategory teamCategory = new TeamCategory();
        when(teamCategoryService.save(teamCategory)).thenReturn(false);

        ResultVo result = controller.add(teamCategory);

        assertEquals(ResultUtils.error("新增失败!").getCode(), result.getCode());
    }
}