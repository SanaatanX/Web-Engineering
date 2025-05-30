package com.itmk.web.team_category.utils;

import com.itmk.web.team_category.vo.ResultVo;

public class ResultUtils {
    public static ResultVo success(String msg, Object data) {
        return ResultVo.success(msg, data);
    }

    public static ResultVo error(String msg) {
        return ResultVo.error(msg);
    }
} 