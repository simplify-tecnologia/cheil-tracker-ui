import { createGlobalStyle } from 'styled-components';
import { normalize } from './normalize';

import { main as theme } from '../themes';

const GlobalStyle = createGlobalStyle`
 ${normalize}

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body, html {
    background: ${theme.colors.black};
    color: ${theme.colors.white};
    font-family: ${theme.fonts.primary};
    text-rendering: optimizeLegibility !important;
    width: 100%;
    -webkit-font-smoothing: antialiased !important;
  }

  button {
    border: 0;
    cursor: pointer;
  }
`;

export default GlobalStyle;
