import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  @media screen and (orientation: landscape) { 
  html { 
    transform: rotate(-90deg); 
    transform-origin: left top;
    width: 100vh; 
    overflow-x: hidden; 
    position: absolute; 
    top: 100%; 
    left: 0; 
  }
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


  :root {
    --background-color: #fff;
  }
  
  :root {
    --primary-color: #f08f8f;
  }

  :root {
    --primary-color-hover: #DB7F7F;
  }

  :root {
    --primary-color-active: #b26565;
  }

  :root {
    --primary-color-light: #FFCBCB;
  }

  :root {
    --secondary-color: #f19e20;
  }

  :root {
    --secondary-color-hover: #d1891a;
  }

  :root {
    --secondary-color-active: #C17E19;
  } 

  :root {
    --tertiary-color: #1e6781;
  }

  :root {
    --grey-color-light: #f6f6f6;
  }

  :root {
    --grey-color-mid1: #ababab;
  }

  :root {
    --grey-color-mid2: #928F8F;
  }

  :root {
    --grey-color-dark: #424242;
  }

  :root {
    --grey-color-shadow: rgba(163, 163, 163, 50);
  }

  :root {
    --text-color-white: #fff;
  }

  :root {
    --image-gradient-color-dark: rgba(0, 0, 0, 0.3);
  }

  :root {
    --image-gradient-color-light: rgba(0, 0, 0, 0);
  }
`
