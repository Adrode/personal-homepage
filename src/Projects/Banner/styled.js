import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Logo = styled.img`
  margin: 0 0 12px 0;
  width: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    width: 32px;
  }
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