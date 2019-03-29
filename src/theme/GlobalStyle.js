import { createGlobalStyle } from 'styled-components'
import 'normalize.css'

const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: border-box; 
    background-color: #FFFFFF;
    color: #656159;
    font-family: 'Raleway', 'HelveticaNeue', 'Helvetica Neue', Helvetica, Arial, sans-serif;

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
`

export default GlobalStyle
