import React from "react";
import logo from "./logo.svg";
import "./App.css";
import styled from "@emotion/styled";

const Container = styled.div`
  text-align: center;
`;
const Header = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

function App() {
  return (
    // <div className="App">
    // <header className="App-header">

    <Container>
      <Header>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </Header>
    </Container>

    // </header>
    // </div>
  );
}

export default App;
