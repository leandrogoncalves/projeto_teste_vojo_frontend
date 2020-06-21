import React from "react";
import { ThemeProvider } from "@mindlab-vojo/component-library";
import GlobalStyle from './styles/global.styles';
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <ThemeProvider>
      <AppRouter />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
