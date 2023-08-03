import { defaultTheme } from './styles/themes/default';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global';

import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';

import { ShoppingContextProvider } from './contexts/ShoppingContext';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <BrowserRouter>
        <ShoppingContextProvider>
          <Router></Router>
        </ShoppingContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
