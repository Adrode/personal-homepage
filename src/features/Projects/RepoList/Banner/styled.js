import styled, { css } from "styled-components";
import { ReactComponent as GithubLogo } from "../../../../images/githubLogo.svg";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Logo = styled(GithubLogo)`
  margin: 0 0 12px 0;
  width: 40px;
  height: 40px;
  color: ${({ theme }) => theme.color.mainBlueLM};
  transition: all 0.15s linear;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    width: 32px;
    height: 32px;
  }

  ${({ $dark }) => $dark && css`
    color: ${({ theme }) => theme.color.mainBlueDM};
  `}
`;

export const Header = styled.h2`
  margin: 0 0 8px 0;
  font-size: 30px;
  font-weight: ${({ theme }) => theme.fontWeight.heavy};

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    margin-bottom: 16px;
    font-size: 18px;
  }
`;

export const Subheader = styled.p`
  margin: 0;
  font-size: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    font-size: 17px;
  }
`;