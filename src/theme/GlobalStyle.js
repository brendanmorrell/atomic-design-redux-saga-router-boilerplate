import { createGlobalStyle } from 'styled-components'
import theme from '.'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${theme.colors.primary};
    color: #656159;
    font-family: 'Raleway', 'HelveticaNeue', 'Helvetica Neue', Helvetica, Arial, sans-serif;

    input {
      outline: none;
    }
  }
`

export default GlobalStyle
