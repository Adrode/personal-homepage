import styled, { css } from "styled-components";
import { ReactComponent as DangerIcon } from "../../../images/dangerIcon.svg";

export const Container = styled.section`
  margin-top: 88px;
  margin-bottom: 140px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WarningIcon = styled(DangerIcon)`
  color: inherit;
  margin-bottom: 16px;
`;

export const Header = styled.h3`
  margin: 0 0 32px 0;

  font-size: 24px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    margin-bottom: 16px;
    font-size: 18px;
  }
`;

export const Description = styled.p`
  margin: 0 0 32px 0;

  font-size: 20px;
  line-height: 28px;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    font-size: 17px;
  }
`;

export const LinkButton = styled.a`
  max-width: fit-content;

  font-size: 20px;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.mainBlueLM};
  text-transform: capitalize;
  text-decoration: none;

  padding: 12px 16px;
  border: 1px solid ${({ theme }) => theme.color.borderTransparent};
  border-radius: 4px;

  &:hover {
    box-shadow: -2px -2px 0px 0px #8CC2FF,
      2px 2px 0px 0px #8CC2FF,
      -2px 2px 0px 0px #8CC2FF,
      2px -2px 0px 0px #8CC2FF;
  }

  &:active {
    box-shadow: 0px 2px 0px 0px #14462033 inset;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    grid-gap: 12px;
    font-size: 18px;
  }

  ${({ $dark }) => $dark && css`
    background-color: ${({ theme }) => theme.color.mainBlueDM};

    &:hover {
      box-shadow: -2px -2px 0px 0px #6D93BE, 
      2px 2px 0px 0px #6D93BE, 
      -2px 2px 0px 0px #6D93BE, 
      2px -2px 0px 0px #6D93BE;
    };

    &:active {
      box-shadow: 0px 2px 0px 0px #14462033 inset;
    }
  `}
`;