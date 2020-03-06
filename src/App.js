import React from "react";
import { ThemeProvider } from "styled-components";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core";
import logo from "./logo.svg";
import "./App.css";
import { redTheme } from "./themes";
import ButtonInBox from "./ButtonInBox";

function App() {
  return (
    <ThemeProvider theme={redTheme}>
      <MuiThemeProvider theme={redTheme}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <ButtonInBox />
          </header>
        </div>
      </MuiThemeProvider>
    </ThemeProvider>
  );
}

export default App;
