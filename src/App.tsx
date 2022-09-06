import React from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";

import GlobalStyle from "./styles/globals";
import theme from "./styles/theme";
import SiteRoutes from "./routes";

const App: React.FC = () => {
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
