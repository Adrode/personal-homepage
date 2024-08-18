import styled, { css } from "styled-components";
import { ReactComponent as IconSpinner } from "../../../images/iconSpinner.svg";

export const Container = styled.section`
  margin-top: 88px;
  margin-bottom: 120px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 48px;
`;

export const Description = styled.p`
  font-size: 20px;
`;

export const Spinner = styled(IconSpinner)`
  @keyframes spin {
    0% {
      transform: rotate(-90deg);
    } 100% {
      transform: rotate(270deg);
    }
  }

  animation: spin 1s ease-in-out infinite;
  transition: all 0.15s linear;
  
  .circle {
    color: ${({ theme }) => theme.color.borderTransparent};
  }
  .spinner {
    color: ${({ theme }) => theme.color.mainBlueLM};
  }

  ${({ $dark }) => $dark && css`
    .circle {
      color: ${({ theme }) => theme.color.semiDark};
    }
    .spinner {
      color: ${({ theme }) => theme.color.mainBlueDM};
    }
  `}

`;

