import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Core/App';
import { theme } from './Core/theme';
import { GlobalStyles } from './Core/GlobalStyles';
import { ThemeProvider } from 'styled-components';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <App />
  </ThemeProvider>
);

