import { createMuiTheme } from "@material-ui/core";
import red from "@material-ui/core/colors/red";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";

export const redTheme = createMuiTheme({
  palette: {
    primary: red,
    secondary: green
  }
});

export const purpleTheme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green
  }
});
