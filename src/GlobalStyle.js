import { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, ::after, ::before {
    box-sizing: inherit;
  }

  body {
    font-family: "Inter", sans-serif;
    color: ${({ theme }) => theme.color.blackText};
    background-color: ${({ theme }) => theme.color.bgLightMode};
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.15s linear;

    ${({ $dark }) => $dark && css`
      color: ${({ theme }) => theme.color.white};
      background-color: ${({ theme }) => theme.color.blackText};
    `}
  }
`;