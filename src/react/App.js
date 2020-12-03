import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import LandingPage from "./LandingPage";
import BeatMachinePage from "./BeatMachinePage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LandingPage />
      <BeatMachinePage />
    </ThemeProvider>
  );
}

export default App;
