import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    box-sizing: border-box; 
  }
  a{
    text-decoration : none;
    color: inherit;
  }
  body{
    font-family: 'Noto Sans KR', sans-serif;
  }
`;
