import { createGlobalStyle } from 'styled-components';
import 'normalize.css';

const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: border-box;
    background-color: #fff;
    color: #222;
    font-family: 'Avenir Next', sans-serif;
    overflow: hidden;

    input {
      outline: none;
    }

    button {
      cursor: pointer;
    }

    a {
      cursor: pointer;
    }
  }
`;

export default GlobalStyle;
