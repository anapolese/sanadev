import Alatsi from '../assets/fonts/Alatsi-Regular.ttf';
import Belleza from '../assets/fonts/Belleza-Regular.ttf';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

// global
const GlobalStyle = createGlobalStyle `
  @font-face{
    font-family: 'Alatsi';
    src: url(${Alatsi}) format('ttf');
    font-style: normal;
    font-weight: 400;
  }

  @font-face{
    font-family: 'Belleza';
    src: url(${Belleza}) format('ttf');
    font-style: normal;
    font-weight: 400;
  }

  * {
    margin: 0;
    box-sizing: border-box;
    padding: 0;
  }
`;

// theme
const theme = {
  colors: {
    light: {
      beige0: '#FFF0E3',
      beige1: '#F2E1D3',
      beige2: '#FFE3CC',
      beige3: '#FFD3AC',
      beige4: '#F5CBA5',
      beige5: '#FFC799',
    },
    dark: {
      brown0: '#823A00',
      brown1: '#7A390A',
      brown2: '#773505',
      brown3: '#692F00',
      brown4: '#642C00',
      brown5: '#4F2C10',
    },
  },
  fonts: {
    main: "'Alatsi', sans-serif",
    secondary: "'Belleza', sans-serif",
  }
};

export function SANAThemeProvider({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}
