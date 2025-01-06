package com.kh.paikbooker.controller;

import com.kh.paikbooker.dao.UserDAO;
import com.kh.paikbooker.vo.UserVO;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.kh.paikbooker.service.EmailService;

import java.util.HashMap;
import java.util.Map;

@RestController
@Slf4j
@CrossOrigin(origins = "http://192.168.10.8:3000")
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {

    private final UserDAO userDao;
    private final EmailService emailService;

    // 로그인
    @PostMapping("/login")
    public ResponseEntity<Boolean> login(@RequestBody UserVO vo) {
        log.error("아이디 : {} ", vo.getUserId());
        log.error("패스워드 : {}", vo.getUserPw());
        boolean inSuccess = userDao.login(vo.getUserId(), vo.getUserPw());
        return ResponseEntity.ok(inSuccess);
    }

    // 아이디 중복 체크
    @GetMapping("/idCheck/{userId}")
    public ResponseEntity<Boolean> idCheck(@PathVariable String userId) {
        log.info("아이디 중복 확인 요청: {}", userId);
        boolean idCheck = userDao.idCheck(userId);
        return ResponseEntity.ok(!idCheck); // 중복일 경우 false 반환
    }

    // 회원 가입
    @PostMapping("/signup")
    public ResponseEntity<Boolean> signup(@RequestBody UserVO vo) {
        log.error("member : {}", vo);
        boolean isSuccess = userDao.signup(vo);
        return ResponseEntity.ok(isSuccess);
    }

    // 가입 여부 확인
    @GetMapping("/exists/{email}")
    public ResponseEntity<Boolean> exists(@PathVariable String email) {
        log.error("email : {}", email);
        boolean isExist = userDao.isEmailExist(email);
        return ResponseEntity.ok(!isExist);
    }

    // 이메일로 아이디 찾기
    @PostMapping("/findIdByEmail")
    public ResponseEntity<Map<String, Object>> findIdByEmail(@RequestBody Map<String, String> request) {
        String email = request.get("email");
        log.info("이메일로 아이디 찾기 요청: {}", email);
        String userId = userDao.findIdByEmail(email);
        Map<String, Object> response = new HashMap<>();

        if (userId != null) {
            response.put("success", true);
            response.put("userId", userId);
            return ResponseEntity.ok(response);
        } else {
            response.put("success", false);
            response.put("message", "아이디를 찾을 수 없습니다.");
            return ResponseEntity.badRequest().body(response);
        }
    }

    // 비번찾기
    @PostMapping("/sendPw")
    public ResponseEntity<Boolean> sendPw (@RequestBody UserVO vo){
        log.info("메일:{}",vo.getUserMail());
        log.info("비밀번호:{}",vo.getUserPw());
        boolean result = emailService.sendEmail(vo);
        return ResponseEntity.ok(result);
    }
    // 아이디와 메일 확인
    @PostMapping("/checkIdMail")
    public ResponseEntity<Boolean> checkIdMail(@RequestBody UserVO vo){
        log.info("아이디:{}",vo.getUserId());
        log.info("메일:{}",vo.getUserMail());
        boolean inSuccess = userDao.checkIdMail(vo.getUserId(), vo.getUserMail());
        return ResponseEntity.ok(inSuccess);
    }

}