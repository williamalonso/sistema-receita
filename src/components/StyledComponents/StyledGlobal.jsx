import { createGlobalStyle } from "styled-components";

const StyledGlobal = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    /* background-color: red; */
  }
  h4 {
    font-size: 1rem;
    color: rgb(56,56,56);
  }
  h2 {
    font-size: 1.5rem;
    color: rgb(56,56,56);
    line-height: 2.5rem;
    margin: 2rem 0rem;
  }
  a {
    color: rgb(56,56,56);
    text-decoration: none;
  }
`;

export default StyledGlobal;