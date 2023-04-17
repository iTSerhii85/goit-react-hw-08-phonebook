import { createGlobalStyle } from 'styled-components';
import 'modern-normalize'
import img from '../img/book.jpg';

export const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: darkgray;
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: cover;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  h1, h2, h3 {
    margin: 0;
    text-shadow: 5px 4px 4px rgba(255,255,255,0.7);
  }
`;
