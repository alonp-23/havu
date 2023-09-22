"use client";

import { ThemeProvider as MuiThemeProvider, CssBaseline } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { ParentProps } from "../types/parent-component";

const theme = createTheme({
  palette: {
    mode: 'dark', 
    background: {
      default: "#252525"
    },
    text: {
      primary: "#ffffff"
    }  
  },
});

export const ThemeProvider = ({children}: ParentProps) => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </MuiThemeProvider>
);

