package com.kh.paikbooker.vo;

import lombok.*;

import java.util.Date;

@Getter
@Setter
@AllArgsConstructor // 매개변수가 전부 다 있는 생성자
@NoArgsConstructor // 매개변수가 없는 생성자 (기본 생성자)
@ToString

public class UserVO {

    private int userNo;
    private String userId;
    private String userPw;
    private String userName;
    private String userMail;
    private String userPhone;
    private String userImg;
}
