package com.ssafy.api.request;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;
import lombok.Setter;

/**
 * 유저 로그인 API ([POST] /api/v1/auth/login) 요청에 필요한 리퀘스트 바디 정의.
 */
@Getter
@Setter
@Schema(name = "UserLoginPostRequest")
public class UserLoginPostReq {
	@Schema(name="유저 ID", example="ssafy_web")
	String userId;
	@Schema(name="유저 Password", example="your_password")
	String password;
}
