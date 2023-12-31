package com.ssafy.tou.common.utils;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
public class ResultTemplate<T> {
    private int status;
    private T data;
}
