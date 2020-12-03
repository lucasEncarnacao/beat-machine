import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#261296",
    },
    secondary: {
      main: "#FF2E5F",
      contrastText: "#FFF",
    },
  },
  typography: {
    fontFamily: "Concert One, sans-serif",
    h2: {
      fontFamily: "Bungee, sans-serif",
    },
  },
});

export default theme;
