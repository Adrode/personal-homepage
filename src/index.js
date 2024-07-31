import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import { GlobalStyle } from './GlobalStyle';
import { theme } from "./theme";
import App from './App';
import { ThemeProvider } from 'styled-components';
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle $dark />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);