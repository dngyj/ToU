package com.welcome.tou.stock.dto.response;

import com.welcome.tou.stock.domain.Stock;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class StockResponseDto {

    private Long stockSeq;
    private String stockDate;
    private Double stockQuantity;
    private String stockUnit;
    private String stockName;
    private Long stockPrice;
    private String stockStatus;

    public static StockResponseDto from(Stock stock, String status){

        StockResponseDto response = new StockResponseDto();

        response.stockSeq = stock.getStockSeq();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss");
        response.stockDate = stock.getStockDate().format(formatter);
        response.stockQuantity = stock.getStockQuantity();
        response.stockUnit = stock.getStockUnit();
        response.stockName = stock.getStockName();
        response.stockPrice = stock.getStockPrice();
        response.stockStatus = status;

        return response;
    }
}
