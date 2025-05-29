package com.itmk.utils;

import com.itmk.status.StatusCode;

/**
 * 数据返回工具类
 */
public class ResultUtils {

    /**
     * 无参数成功返回
     * @return ResultVo
     */
    public static ResultVo success() {
        return Vo(null, StatusCode.SUCCESS_CODE, null);
    }
    public static ResultVo success(String msg) {
        return Vo(msg, StatusCode.SUCCESS_CODE, null);
    }

    /**
     * 带消息和数据的成功返回
     * @param msg 消息
     * @param data 数据
     * @return ResultVo
     */
    public static ResultVo success(String msg, Object data) {
        return Vo(msg, StatusCode.SUCCESS_CODE, data);
    }
    public static ResultVo success(String msg, int code, Object data) {
        return Vo(msg, code, data);
    }
    private static ResultVo Vo(String msg, int code, Object data) {
        return new ResultVo(msg, code, data);
    }

    /**
     * 无参数错误返回
     * @return ResultVo
     */
    public static ResultVo error() {
        return Vo(null, StatusCode.ERROR_CODE, null);
    }
    public static ResultVo error(String msg) {
        return Vo(msg, StatusCode.ERROR_CODE, null);
    }
    public static ResultVo error(String msg, int code, Object data) {
        return Vo(msg, code, data);
    }
    public static ResultVo error(String msg, int code) {
        return Vo(msg, code, null);
    }
    public static ResultVo error(String msg, Object data) {
        return Vo(msg, StatusCode.ERROR_CODE, data);
    }
}