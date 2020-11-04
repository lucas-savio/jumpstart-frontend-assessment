import React from "react";

import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/global";
import standard from "./styles/themes/standard";
import { AppPage, Wrapper } from "./components/general";
import Card from "./components/Card/card";


function App() {

  return (
    <ThemeProvider theme={standard}>
      <GlobalStyle />
      <AppPage>
        <Wrapper>
          <Card/>
        </Wrapper>
      </AppPage>
    </ThemeProvider>
  );
}

export default App;
