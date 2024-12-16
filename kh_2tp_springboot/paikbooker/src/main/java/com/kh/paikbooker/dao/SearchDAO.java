package com.kh.paikbooker.dao;

import com.kh.paikbooker.vo.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Slf4j
@Repository
@RequiredArgsConstructor
public class SearchDAO {
    private final JdbcTemplate jdbcTemplate;

    // NavBar에 있는 Logo 눌렀을때 필요한 data 불러오는 메서드
    public List<StoreVO> brandStoresByBrandNo(int brandNo) {
        String sql = "SELECT s.STORE_NAME, s.STORE_NO, s.STORE_PHONE, s.STORE_ADDR, s.STORE_MAP, " +
                "b.BRAND_NO, b.BRAND_NAME, b.BRAND_FOOD, b.BRAND_LOGO2, b.BRAND_IMG1, b.BRAND_IMG2, " +
                "AVG(rv.AVERAGE_RATING) AS AVERAGE_RATING, MAX(res.R_TIME) AS R_TIME " +
                "FROM STORE_TB s " +
                "JOIN BRAND_TB b ON s.BRAND_NAME = b.BRAND_NAME " +
                "LEFT JOIN V_STORE_AVG rv ON S.STORE_NAME = rv.STORE_NAME " +
                "LEFT JOIN RESERVATION_TB res ON s.STORE_NO = res.STORE_NO " +
                "WHERE b.BRAND_NO = ? " +
                "GROUP BY s.STORE_NAME, s.STORE_NO, s.STORE_PHONE, s.STORE_ADDR, s.STORE_MAP, " +
                "b.BRAND_NO, b.BRAND_NAME, b.BRAND_FOOD, b.BRAND_LOGO2, b.BRAND_IMG1, b.BRAND_IMG2";

        return jdbcTemplate.query(sql, new Object[]{brandNo}, new StoreRowMapper());
    }

    // Main 화면 렌더링시 필요한 data 불러오는 메서드
    public List<StoreVO> searchData(String region, String brandName, String reservationTime) {
        StringBuilder sql = new StringBuilder(
                "SELECT s.STORE_NAME, s.STORE_NO, s.STORE_PHONE, s.STORE_ADDR, s.STORE_MAP, " +
                        "b.BRAND_NAME, b.BRAND_NO, b.BRAND_FOOD, b.BRAND_LOGO2, b.BRAND_IMG1, b.BRAND_IMG2," +
                        "rv.AVERAGE_RATING, res.R_TIME " +
                        "FROM STORE_TB s " +
                        "JOIN BRAND_TB b ON s.BRAND_NAME = b.BRAND_NAME " +
                        "LEFT JOIN V_STORE_AVG rv ON S.STORE_NAME = rv.STORE_NAME " +
                        "LEFT JOIN RESERVATION_TB res ON s.STORE_NO = res.STORE_NO " +
                        "WHERE 1=1"
        );

        List<Object> params = new ArrayList<>();

        // 조건 1: 지역(store_addr)
        if (region != null && !region.isEmpty()) {
            sql.append(" AND s.STORE_ADDR LIKE ?");
            params.add("%" + region + "%");
        }

        // 조건 2: 브랜드명
        if (brandName != null && !brandName.isEmpty()) {
            sql.append(" AND b.BRAND_NAME = ?");
            params.add(brandName);
        }

        // 조건 3: 예약 시간
        if (reservationTime != null && !reservationTime.isEmpty()) {
            try {
                int parsedTime = parseReservationTime(reservationTime); // 문자열 시간을 정수로 변환
                sql.append(" AND res.R_TIME = ?");
                params.add(parsedTime);
            } catch (NumberFormatException e) {
                log.error("Invalid reservation time format: {}", reservationTime, e);
            }
        }

        log.info("SQL Query: {}", sql.toString());
        log.info("Query parameters: {}", params);

        // 쿼리 실행하여 결과를 리스트로 받음
        List<StoreVO> storeList = jdbcTemplate.query(sql.toString(), params.toArray(), new StoreRowMapper());

        // 중복 STORE_NO 제거
        return removeDuplicateStores(storeList);
    }

    // 시간 문자열을 정수로 변환하는 헬퍼 메서드
    private int parseReservationTime(String time) {
        // "4:00" 형태를 정수 "4"로 변환
        if (time.contains(":")) {
            String[] parts = time.split(":");
            return Integer.parseInt(parts[0]); // 시간 부분만 정수로 변환
        }
        throw new NumberFormatException("Invalid time format: " + time);
    }

    // STORE_NO를 기준으로 중복을 제거하는 메서드
    private List<StoreVO> removeDuplicateStores(List<StoreVO> storeList) {
        Map<Integer, StoreVO> uniqueStores = new HashMap<>();
        for (StoreVO store : storeList) {
            uniqueStores.put(store.getStoreNo(), store);
        }
        return new ArrayList<>(uniqueStores.values());
    }

    public List<String> getRegions() {
        String sql = "SELECT DISTINCT STORE_ADDR FROM STORE_TB";
        return jdbcTemplate.queryForList(sql, String.class);
    }

    public List<String> getBrandNames() {
        String sql = "SELECT DISTINCT BRAND_NAME FROM BRAND_TB";
        return jdbcTemplate.queryForList(sql, String.class);
    }

    public List<StoreVO> mobileSearchByKeyword(String keyword) {
        StringBuilder sql = new StringBuilder(
                "SELECT s.STORE_NAME, s.STORE_NO, s.STORE_PHONE, s.STORE_ADDR, s.STORE_MAP, " +
                        "b.BRAND_NAME, b.BRAND_NO, b.BRAND_FOOD, b.BRAND_LOGO2, b.BRAND_IMG1, b.BRAND_IMG2, " +
                        "rv.AVERAGE_RATING, res.R_TIME " +
                        "FROM STORE_TB s " +
                        "JOIN BRAND_TB b ON s.BRAND_NAME = b.BRAND_NAME " +
                        "LEFT JOIN V_STORE_AVG rv ON s.STORE_NAME = rv.STORE_NAME " +
                        "LEFT JOIN RESERVATION_TB res ON s.STORE_NO = res.STORE_NO " +
                        "WHERE 1=1 "
        );

        String[] keywords = keyword.trim().toLowerCase().split("\\s+");
        for (String word : keywords) {
            String likeKeyword = "%" + word + "%";
            sql.append(" AND (")
                    .append("LOWER(b.BRAND_NAME) LIKE ? OR ")
                    .append("LOWER(res.R_TIME) LIKE ? OR ")
                    .append("LOWER(s.STORE_NAME) LIKE ? OR ")
                    .append("LOWER(s.STORE_ADDR) LIKE ?")
                    .append(")");
        }

        Object[] params = new Object[keywords.length * 4];
        int index = 0;
        for (String word : keywords) {
            String likeKeyword = "%" + word + "%";
            params[index++] = likeKeyword;
            params[index++] = likeKeyword;
            params[index++] = likeKeyword;
            params[index++] = likeKeyword;
        }

        return jdbcTemplate.query(sql.toString(), params, new StoreRowMapper());
    }

    public static class StoreRowMapper implements RowMapper<StoreVO> {
        @Override
        public StoreVO mapRow(ResultSet rs, int rowNum) throws SQLException {
            StoreVO store = new StoreVO();

            store.setStoreNo(rs.getInt("STORE_NO"));
            store.setStoreName(rs.getString("STORE_NAME"));
            store.setStorePhone(rs.getString("STORE_PHONE"));
            store.setStoreAddr(rs.getString("STORE_ADDR"));
            store.setStoreMap(rs.getString("STORE_MAP"));

            BrandVO brand = new BrandVO();
            brand.setBrandNo(rs.getInt("BRAND_NO"));
            brand.setBrandName(rs.getString("BRAND_NAME"));
            brand.setBrandFood(rs.getString("BRAND_FOOD"));
            brand.setBrandLogo2(rs.getString("BRAND_LOGO2"));
            brand.setBrandImg1(rs.getString("BRAND_IMG1"));
            brand.setBrandImg1(rs.getString("BRAND_IMG2"));
            store.setBrandVO(brand);

            AvgRatingVO avgRatingVO = new AvgRatingVO();
            avgRatingVO.setAverageRating(rs.getDouble("AVERAGE_RATING"));
            store.setAvgRatingVO(avgRatingVO);

            ReservationVO reservation = new ReservationVO();
            reservation.setrTime(rs.getString("R_TIME"));
            store.setReservationTimeVO(reservation);

            return store;
        }
    }
}
