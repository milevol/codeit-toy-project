import React from "react";
import styled from "styled-components";
import logo from "./assets/logo.svg";

// 스타일드 컴포넌트로 header 정의
const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
`;

const LogoImage = styled.img`
  width: 130px;
  height: auto;
`;

function App() {
  return (
    <>
      <Header>
        <LogoImage src={logo} alt="Logo" />
      </Header>
    </>
  );
}

export default App;
