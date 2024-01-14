import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { SubmitHandler, useForm } from "react-hook-form";

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
  width: 100%;
`;

const InputBox = styled.div`
  display: flex;
  gap: 15px;
  padding: 15px 20px;
  border-radius: 5px;
  border: 1px solid lightgray;
  width: 100%;
  height: 50px;
  &.emailBox {
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
  }
  &.emailBoxFocus {
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
    border: 1px solid #0c3351;
    z-index: 5;
  }
  &.passwordBox {
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    margin-top: -1px;
  }
  &.passwordBoxFocus {
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    margin-top: -1px;
    border: 1px solid #0c3351;
    z-index: 5;
  }
`;

const Input = styled.input`
  border: none;
  border-radius: 5px;
  width: 100%;
  font-size: 16px;
  &::placeholder {
    color: lightgray;
  }
  &[type="submit"] {
    cursor: pointer;
    padding: 15px 20px;

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
  }
`;

const SignupBox = styled.div`
  width: 100%;
  padding: 20px 0px;
  text-align: left;
`;

const Home = styled.div`
  width: 100%;
`;

const Error = styled.span`
  font-weight: 600;
  color: tomato;
`;

interface IFormInput {
  email: string;
  password: string;
}

export default function Login() {
  const [loading, setLoading] = useState(false);

  // react-hook-form 사용해서 바꿔볼 것!
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");


  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  // const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 백으로 데이터 전달 후 로그인 정보 또는 홈으로 이동
    console.log(email, password);
  };

  const onFocusEmail = (e: React.InputHTMLAttributes<HTMLInputElement>) => {
    setEmailFocus(!emailFocus);
  };

  const onFocusPassword = (e: React.InputHTMLAttributes<HTMLInputElement>) => {
    setPasswordFocus(!passwordFocus);
  };

  return (
    <Wrapper>
      <Title>Log In</Title>
      <Form onSubmit={onSubmit}>
        <InputBox className={emailFocus ? "emailBoxFocus" : "emailBox"}>
          <FontAwesomeIcon
            icon={faUser}
            color={emailFocus ? "black" : "#D3D3D3"}
          />
          <Input
            onFocus={onFocusEmail}
            onBlur={onFocusEmail}
            className={emailFocus ? "emailFocus" : "email"}
            onChange={onChange}
            value={email}
            name="email"
            placeholder="Email"
            type="email"
            required
          />
        </InputBox>
        <InputBox
          className={passwordFocus ? "passwordBoxFocus" : "passwordBox"}
        >
          <FontAwesomeIcon
            icon={faLock}
            color={passwordFocus ? "black" : "#D3D3D3"}
          />
          <Input
            onFocus={onFocusPassword}
            onBlur={onFocusPassword}
            className="password"
            onChange={onChange}
            value={password}
            name="password"
            placeholder="Password"
            type="password"
            required
          />
        </InputBox>
        <Input type="submit" value="Log In" />
      </Form>
      {error !== "" ? <Error>{error}</Error> : null}
      <SignupBox>
        <>Don't Have an Account? </>
        <Link to={`${process.env.PUBLIC_URL}/signup`}>Sign Up</Link>
      </SignupBox>
      <Home>
        <Link to={`${process.env.PUBLIC_URL}/`}>Home</Link>
      </Home>
    </Wrapper>
  );
}
