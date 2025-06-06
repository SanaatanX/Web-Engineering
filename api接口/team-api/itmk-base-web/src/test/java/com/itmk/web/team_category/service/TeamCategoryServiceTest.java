package com.itmk.web.team_category.service;

import com.itmk.web.team_category.entity.TeamCategory;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class TeamCategoryServiceTest {
    @Mock
    private TeamCategoryService teamCategoryService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testSaveCategory() {
        TeamCategory category = new TeamCategory();
        when(teamCategoryService.save(category)).thenReturn(true);
        assertTrue(teamCategoryService.save(category));
        verify(teamCategoryService, times(1)).save(category);
    }

    @Test
    void testRemoveCategory() {
        when(teamCategoryService.removeById(1L)).thenReturn(true);
        assertTrue(teamCategoryService.removeById(1L));
        verify(teamCategoryService, times(1)).removeById(1L);
    }
}

