import "./index.css";

import CssBaseline from "@mui/material/CssBaseline";
import Main from "./Main";
import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <Main />
    </ThemeProvider>    
  </React.StrictMode>
);

