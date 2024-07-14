import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, ::after, ::before {
    box-sizing: inherit;
  }

  body {
    font-family: "Inter", sans-serif;
    color: ${({ theme }) => theme.color.black};
    background-color: ${({ theme }) => theme.color.bgLightMode};
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;