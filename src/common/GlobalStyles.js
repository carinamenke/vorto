import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0 auto;
    background: var(--color-background);
    font-family: sans-serif;
    font-size: 18px;
    line-height: 1.4;
    height: 100vh;
    overscroll-behavior: none;
    color: var(--color-grey-dark);
  }

  input, button, textarea {
    font-size: 1em;
  }

  button {
    outline: none;
  }


  :root {
    --color-background: #fff;

    --color-primary: #f08f8f;
    --color-primary-hover: #DB7F7F;
    --color-primary-active: #b26565;
    --color-primary-light: #FFCBCB;
    --color-primary-mid: #FFB7B7;
    --color-primary-shadow: #FDE3E3;


    --color-secondary: #f19e20;
    --color-secondary-hover: #d1891a;
    --color-secondary-active: #C17E19;

    --color-tertiary: #1e6781;
    
    --color-grey-light: #f6f6f6;
    --color-grey-mid1: #ababab;
    --color-grey-mid2: #928F8F;
    --color-grey-dark: #424242;
    --color-grey-shadow: rgba(200, 200, 200, 50);
    --color-grey-shadow-light: rgba(240, 240, 240, 50);
    --color-text-white: #fff;
    --color-image-gradient-dark: rgba(0, 0, 0, 0.3);
    --color-image-gradient-light: rgba(0, 0, 0, 0);
  }
`
