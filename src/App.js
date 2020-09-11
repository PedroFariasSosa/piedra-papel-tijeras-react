import React from "react";
import "./App.css";
import styled from "styled-components";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Table from "./components/Table";

const AppStyled = styled.main`
  background-image: radial-gradient(circle at top, #1f3757 0%, #131537 100%);
  color: #ffffff;
  font-family: "Barlow Semi Condensed", sans-serif;
  .content {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 2em;
  }
`;

function App() {
  return (
    <AppStyled>
      <Wrapper>
        <div className="content">
          <Header />
          <Table />
          <span>Rules</span>
        </div>
      </Wrapper>
    </AppStyled>
  );
}

export default App;
