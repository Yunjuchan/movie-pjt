import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 90%;
  margin: 15% auto;
  text-align: center;
`;

const Title = styled.span`
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: 20px;
`;

export default function Home() {
  return (
    <Wrapper>
      <Title>
        광주 2반 C208
        <br />
        Week 1 Assignment
        <br />
        Log In
      </Title>
    </Wrapper>
  );
}
