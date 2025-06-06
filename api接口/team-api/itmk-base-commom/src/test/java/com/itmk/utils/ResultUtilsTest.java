package com.itmk.utils;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class ResultUtilsTest {
    @Test
    void testSuccessWithMessage() {
        ResultVo vo = ResultUtils.success("ok");
        assertEquals(200, vo.getCode());
        assertEquals("ok", vo.getMsg());
    }

    @Test
    void testErrorWithMessage() {
        ResultVo vo = ResultUtils.error("fail");
        assertEquals(500, vo.getCode());
        assertEquals("fail", vo.getMsg());
    }
}

