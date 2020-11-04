import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    background: #E6E6F0;
    -webkit-animation-smoothing: antialiased;
  }
  body, input, button {
    font-family: 'Poppins', serif;
    font-size: 16px;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 400;
  }
  button {
    cursor: pointer;
  }
`;
