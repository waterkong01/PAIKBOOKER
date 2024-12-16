package com.kh.paikbooker.service;

import com.kh.paikbooker.dao.UserDAO;
import com.kh.paikbooker.vo.UserVO;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class EmailService {


    private final JavaMailSender mailSender;
    private final UserDAO userDAO;
    //     이메일 전송 메서드
    public boolean sendEmail(UserVO userVo) {
        try {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setTo(userVo.getUserMail());
            message.setSubject("임시 비밀번호 안내 메일");
            String messageText = "안녕하세요, PAIKBOOKER입니다. \n 본 메일은 임시 비밀번호 안내 메일입니다. \n 로그인 후 회원정보 수정 페이지에서 비밀번호를 변경해 주세요. \n 임시 비밀번호: ";
            message.setText(messageText + userVo.getUserPw());
            boolean Result = userDAO.updatePassword(userVo);
            if(Result){
                mailSender.send(message);
                return true;
            }else{
                return false;
            }
        } catch (Exception e) {
            // 예외 처리
            e.printStackTrace();
            return false;
        }
    }
}