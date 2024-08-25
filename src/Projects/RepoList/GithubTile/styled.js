import styled, { css } from "styled-components";

export const Container = styled.section`
  padding: 56px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border: 6px solid ${({ theme }) => theme.color.borderTransparent};
  box-shadow: 0px 16px 58px 0px #090A3308, 0px -2px 50px 0px #090A3305;
  transition: all 0.15s linear;

  &:hover {
    border: 6px solid ${({ theme }) => theme.color.blueTransparent};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    padding: 24px;
  }

  ${({ $dark }) => $dark && css`
    border: 6px solid ${({ theme }) => theme.color.semiGrey};

    &:hover {
      border: 6px solid ${({ theme }) => theme.color.blueTransparentDM};
    }
  `}
`;

export const Header = styled.h3`
  margin: 0 0 24px 0;

  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: 24px;
  color: ${({ theme }) => theme.color.mainBlueLM};
  transition: all 0.15s linear;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    margin-bottom: 16px;
    font-size: 16px;
  }

  ${({ $dark }) => $dark && css`
    color: ${({ theme }) => theme.color.white};
  `}
`;

export const Description = styled.p`
  margin: 0 0 24px 0;

  font-size: 18px;
  line-height: 25.2px;
  color: ${({ theme }) => theme.color.textSecondary};
  transition: all 0.15s linear;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    margin-bottom: 16px;
    font-size: 14px;
    line-height: 16.9px;
  }

  ${({ $dark }) => $dark && css`
    color: ${({ theme }) => theme.color.white};
  `}
`;

export const LinkContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  justify-content: start;
  grid-gap: 8px;
`;

export const LinkDescription = styled.p`
  margin: 0;

  display: grid;
  grid-template-rows: repeat(2, auto);
  grid-gap: 8px;

  font-size: 18px;
  color: ${({ theme }) => theme.color.textSecondary};
  transition: all 0.15s linear;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    font-size: 14px;
  }

  ${({ $dark }) => $dark && css`
    color: ${({ theme }) => theme.color.white};
  `}
`;

export const LinkURLContainer = styled.div`
  margin: 0;
  
  display: grid;
  grid-template-rows: repeat(2, auto);
  grid-gap: 8px;
`;

export const LinkURL = styled.a`
  word-break: break-all;
  text-decoration: none;
  border-bottom: 1px solid ${({ theme }) => theme.color.blueTransparent};
  padding-bottom: 2px;

  font-size: 18px;
  color: ${({ theme }) => theme.color.mainBlueLM};
  transition: all 0.15s linear;

  &:hover {
    border-bottom: 1px solid ${({ theme }) => theme.color.mainBlueLM};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    font-size: 14px;
  }

  ${({ $dark }) => $dark && css`
    color: ${({ theme }) => theme.color.mainBlueDM};

    &:hover {
      border-bottom: 1px solid ${({ theme }) => theme.color.mainBlueDM};
    }
  `}
`;