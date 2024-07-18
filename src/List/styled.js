import styled from "styled-components";

export const Container = styled.section`
  margin: 0 0 72px 0;
  padding: 32px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0px 16px 58px 0px #090A3308, 0px -2px 50px 0px #090A3305;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    margin-bottom: 48px;
    padding: 16px;
  }
`;

export const Header = styled.h2`
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  justify-content: start;
  grid-gap: 16px;

  font-size: 30px;
  font-weight: ${({ theme }) => theme.fontWeight.heavy};
  border-bottom: 1px solid ${({ theme }) => theme.color.borderTransparent};

  margin: 0;
  padding: 0 0 13px 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    grid-gap: 12px;
    padding-bottom: 12px;

    font-size: 18px;
  }
`;

export const StyledList = styled.ul`
  margin: 0;
  padding: 32px 0 0 0;
  list-style: none;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 8px;
  justify-content: space-between;
  
  color: ${({ theme }) => theme.color.textSecondary};
  font-size: 18px;

  @media (max-width: ${({ theme }) => theme.breakpoint.big}) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 32px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    padding-top: 12px;
    grid-template-columns: auto;

    font-size: 14px;
  }
`;

export const StyledItem = styled.li`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 16px;
  align-items: center;
  justify-content: start;
`;

export const StyledDisc = styled.img`
  width: 9px;
  height: 9px;
`;