package com.itmk.web.team_category.entity;

import lombok.Data;

@Data
public class SelectType {
    private Integer currentPage;
    private Integer pageSize;
    private String name;
    private String label;
    private Long value;

    // 添加必要的getter/setter
    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }

    public Long getValue() {
        return value;
    }

    public void setValue(Long value) {
        this.value = value;
    }
}

