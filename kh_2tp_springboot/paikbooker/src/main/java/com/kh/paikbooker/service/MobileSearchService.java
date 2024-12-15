package com.kh.paikbooker.service;

import com.kh.paikbooker.dao.SearchDAO;
import com.kh.paikbooker.vo.StoreVO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MobileSearchService {

    private final SearchDAO searchDAO;

    // 키워드로 매장 검색
    public List<StoreVO> mobileSearch(String keyword) {
        // 키워드 처리 (대소문자 정규화, 공백 처리 등)
        String processedKeyword = keyword.trim().toLowerCase();

        // "구"가 포함되지 않은 경우에만 "구"를 추가하도록 조건 추가
        String searchKeyword1 = processedKeyword;
        if (!processedKeyword.contains("구")) {
            searchKeyword1 = processedKeyword + "구";  // 예: "강남" -> "강남구"
        }

        String searchKeyword2 = processedKeyword;  // 예: "강남" -> "강남"

        // 로그를 추가하여 실제 검색하는 키워드를 확인
        System.out.println("Searching with: " + searchKeyword1);  // 로그 추가
        System.out.println("Searching with: " + searchKeyword2);  // 로그 추가

        // DAO 호출하여 두 가지 형태로 검색 결과 반환
        List<StoreVO> stores = searchDAO.mobileSearchByKeyword(searchKeyword1);

        // 첫 번째 검색에서 결과가 없다면 두 번째 검색
        if (stores.isEmpty()) {
            stores = searchDAO.mobileSearchByKeyword(searchKeyword2);
        }

        // 결과 처리: 각 매장의 주소를 "서초구, 강남구, ~~구" 형태로 가공
        stores.forEach(store -> {
            String address = store.getStoreAddr();
            if (address != null) {
                String formattedAddress = formatAddress(address); // 주소 포맷
                store.setStoreAddr(formattedAddress); // 변환된 주소 설정
            }
        });

        return stores;
    }


    // 주소 데이터를 "구" 단위로 가공하는 메서드
    private String formatAddress(String address) {
        String formattedAddress = "";

        // 주소를 공백 기준으로 분리하지 않고, 주소에서 "구"를 포함하는 부분만 찾습니다.
        int index = address.indexOf("구");
        if (index != -1) {
            formattedAddress = address.substring(0, index + 1); // "구"까지 포함하여 반환
        }

        return formattedAddress;
    }

}
