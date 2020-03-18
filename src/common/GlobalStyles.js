import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0 auto;
    background: var(--background-color);
    font-family: sans-serif;
    font-size: 18px;
    line-height: 1.4;
    height: 100vh;
    color: var(--grey-color-dark);
  }

  input, button, textarea {
    font-size: 1em;
  }

  button {
    outline: none;
  }


  :root {
    --background-color: #fff;

    --primary-color: #f08f8f;
    --primary-color-hover: #DB7F7F;
    --primary-color-active: #b26565;
    --primary-color-light: #FFCBCB;

    --secondary-color: #f19e20;
    --secondary-color-hover: #d1891a;
    --secondary-color-active: #C17E19;

    --tertiary-color: #1e6781;
    
    --grey-color-light: #f6f6f6;
    --grey-color-mid1: #ababab;
    --grey-color-mid2: #928F8F;
    --grey-color-dark: #424242;
    --grey-color-shadow: rgba(200, 200, 200, 50);
    --grey-color-shadow-light: rgba(240, 240, 240, 50);
    --text-color-white: #fff;
    --image-gradient-color-dark: rgba(0, 0, 0, 0.3);
    --image-gradient-color-light: rgba(0, 0, 0, 0);
  }
`
