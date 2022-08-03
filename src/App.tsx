import React from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";

import GlobalStyle from "./styles/globals";
import theme from "./styles/theme";
import SiteRoutes from "./routes";

export interface IApplicationProps {}

const App: React.FC<IApplicationProps> = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <SiteRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
};
export default App;
