import { createGlobalStyle } from 'styled-components/macro'
import '../common/colors.css'

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background: var(--background-color);
    font-family: sans-serif;
    font-size: 18px;
    line-height: 1.4;
    height: 100vh;
  }

  input, button, textarea {
    font-size: 1em;
  }
`
