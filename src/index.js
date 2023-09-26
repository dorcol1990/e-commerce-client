import "./index.css";

import CssBaseline from "@mui/material/CssBaseline";
import Main from "./Main";
import { Provider } from 'react-redux';
import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";
import cartReducer from './state';
import { configureStore } from "@reduxjs/toolkit";
import { theme } from "./theme";

const store = configureStore({
    reducer: {cart: cartReducer}
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Main />
        </ThemeProvider>
    </Provider>    
  </React.StrictMode>
);

