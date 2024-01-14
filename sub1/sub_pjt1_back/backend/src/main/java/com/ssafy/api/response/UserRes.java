package com.ssafy.api.response;

import com.ssafy.common.model.response.BaseResponseBody;
import com.ssafy.db.entity.User;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;
import lombok.Setter;

/**
 * 회원 본인 정보 조회 API ([GET] /api/v1/users/me) 요청에 대한 응답값 정의.
 */
@Getter
@Setter
@Schema(name = "UserResponse")
public class UserRes {
    @Schema(name = "User ID")
    String userId;

    public static UserRes of(User user) {
        UserRes res = new UserRes();
        res.setUserId(user.getUserId());
        return res;
    }
}
