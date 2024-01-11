import React from "react";
import { useState } from "react";

// function shortWrongPassword (str) {
//   return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{,8}$/.test(str);
// }

// function longWrongPassword (str) {
//   return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{17,}$/.test(str);
// }

// function doesNotContainRestrictedWord(str) {
//   // "admin"이라는 단어를 포함하지 않도록 정규표현식 작성
//   const restrictedWordRegex = /admin/i; // 대소문자 구분하지 않도록 "i" 플래그 사용

//   return !restrictedWordRegex.test(str);
// }

function Signup() {
  const [form, setForm] = useState({
    username: "",
    password: "",
    passwordConfirm: "",
  });


  return (
    <div className="main">
      <div className="signup-box">
        <p>회원가입</p>
        <form action="">
          <p>
            <input className="signup-input" type="text" placeholder="아이디" value={form.username}
            onChange={e => setForm({ ...form, username: e.target.value})}/>
          </p>
          <p>
            <input className="signup-input" type="password" placeholder="비밀번호" value={form.password}
            onChange={e => setForm({ ...form, password: e.target.value})}/>
          </p>
          <p>
            <input className="signup-input" type="password" placeholder="비밀번호 확인" value={form.passwordConfirm}
            onChange={e => setForm({ ...form, password
            : e.target.value})}/>
          </p>
          <button className="signup-button">회원가입</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;