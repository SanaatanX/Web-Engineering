package com.itmk.web.common.vo;

import lombok.Data;

@Data
public class ResultVo {
    private Integer code;  // 状态码
    private String msg;    // 提示信息
    private Object data;   // 返回数据

    public static ResultVo success(String msg, Object data) {
        ResultVo result = new ResultVo();
        result.setCode(200);
        result.setMsg(msg);
        result.setData(data);
        return result;
    }

    public static ResultVo error(String msg) {
        ResultVo result = new ResultVo();
        result.setCode(500);
        result.setMsg(msg);
        return result;
    }
} 