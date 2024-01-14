package com.ssafy.api.request;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;
import lombok.Setter;

/**
 * 유저 회원가입 API ([POST] /api/v1/users) 요청에 필요한 리퀘스트 바디 정의.
 */
@Getter
@Setter
@Schema(name = "UserRegisterPostRequest")
public class UserRegisterPostReq {
	@Schema(name="유저 Department", example="SSAFY")
	String department;
	@Schema(name="유저 Position", example="교육생")
	String position;
	@Schema(name="유저 Name", example="홍길동")
	String name;
	@Schema(name="유저 User_id", example="test-1")
	String userId;
	@Schema(name="유저 Password", example="1234")
	String password;

}
