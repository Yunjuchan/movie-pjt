import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useForm } from "react-hook-form";

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 420px;
  padding: 50px 0px;
`;

const Title = styled.h1`
  font-size: 42px;
  font-weight: bold;
  color: #1a5586;
  opacity: 0.6;
`;

const Form = styled.form`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

const Input = styled.input`
  padding: 15px 20px;
  border-radius: 5px;
  border: 1px solid lightgray;
  width: 100%;
  font-size: 16px;
  &::placeholder {
    color: lightgray;
  }
  &[type="submit"] {
    cursor: pointer;
    transition: all 0.2s;
    background-color: #1a5586;
    margin-top: 20px;
    color: white;
    opacity: 0.6;
    border: 1px solid #0c3351;
    &:hover {
      transition: all 0.2s;
      background-color: #0c3351;
    }
    &:focus {
      transition: all 0.2s;
      background-color: #0c3351;
      border: 1px solid lightgray;
    }
  }
  &:focus {
    outline: none;
    border: 1px solid #1a5586;
    opacity: 1;
    z-index: 5;
  }
`;

const Error = styled.span`
  font-weight: 600;
  color: tomato;
`;

const LoginBox = styled.div`
  width: 100%;
  padding: 20px 0px;
  text-align: left;
`;

const Home = styled.div`
  width: 100%;
`;

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<IFormInput>();

  interface IFormInput {
    name: string;
    email: string;
    password1: string;
    password2: string;
  }

  const [error, setError] = useState("");

  /* 
  이메일 정규식
  [공백(띄어쓰기)와 @제외 아무 글자 1글자 이상] + @ + [공백(띄어쓰기)와 @제외 아무 글자 1글자 이상] + . + [공백(띄어쓰기)와 @제외 아무 글자 1글자 이상]
  
  이름 정규식 
  1글자이상 30글자 이하

  비밀번호 정규식
  소문자 1글자이상, 숫자1글자이상, !@#중 1글자 이상, 숫자,대소문자,앞의특수문자를 포함한 8~16글자
  */
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const nameRegex = /^[A-Za-zㄱ-ㅎ가-힣]{1,30}$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[!@#])[\da-zA-Z!@#]{8,16}$/;

  // 예시: 폼 제출 시 유효성 검사
  const onSubmit = (data: IFormInput) => {
    console.log("폼이 유효하므로 제출합니다:", data);
  };

  return (
    <Wrapper>
      <Title>Sign Up</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("name", {
            required: "이름은 필수 입력 항목입니다.",
            pattern: {
              value: nameRegex,
              message: "최대 30자까지 입력 가능합니다.",
            },
          })}
          name="name"
          placeholder="Name"
          type="text"
        />
        {errors.name && <p role="alert">{errors.name.message}</p>}
        <Input
          {...register("email", {
            required: "이메일은 필수 입력 항목입니다.",
            pattern: {
              value: emailRegex,
              message: "이메일 형식이 아닙니다.",
            },
          })}
          name="email"
          placeholder="Email"
          type="text"
        />
        {errors.email && <p role="alert">{errors.email.message}</p>}
        <Input
          {...register("password1", {
            required: "비밀번호는 필수 입력 항목입니다.",
            pattern: {
              value: passwordRegex,
              message:
                "비밀번호를 8~16자로 영문 대소문자, 숫자, 특수기호를 조합해서 사용하세요. ",
            },
          })}
          name="password1"
          placeholder="Password"
          type="password"
        />
        {errors.password1 && <p role="alert">{errors.password1.message}</p>}
        <Input
          {...register("password2", {
            required: "비밀번호 확인은 필수 입력 항목입니다.",
            validate: (value) =>
              value === getValues("password1") ||
              "비밀번호가 일치하지 않습니다.",
          })}
          name="password2"
          placeholder="Verify Password"
          type="password"
        />
        {errors.password2 && <p role="alert">{errors.password2.message}</p>}
        <Input type="submit" value="Sign Up" />
      </Form>
      <LoginBox>
        <>Already have an account? </>
        <Link to={`${process.env.PUBLIC_URL}/login`}>Log In</Link>
      </LoginBox>
      <Home>
        <Link to={`${process.env.PUBLIC_URL}/`}>Home</Link>
      </Home>
    </Wrapper>
  );
}
