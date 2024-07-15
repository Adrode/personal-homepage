import styled from "styled-components";

export const Container = styled.section`
  padding: 56px;

  border: 6px solid ${({ theme }) => theme.color.borderTransparent};
  box-shadow: 0px 16px 58px 0px #090A3308, 0px -2px 50px 0px #090A3305;

  &:hover {
    border: 6px solid ${({ theme }) => theme.color.blueTransparent};
  }
`;

export const Header = styled.h3`
  margin: 0 0 24px 0;

  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: 24px;
  color: ${({ theme }) => theme.color.mainBlueLM};
`;

export const Description = styled.p`
  margin: 0 0 24px 0;

  font-size: 18px;
  line-height: 25.2px;
  color: ${({ theme }) => theme.color.textSecondary};
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
`;

export const LinkURLContainer = styled.div`
  margin: 0;
  
  display: grid;
  grid-template-rows: repeat(2, auto);
  grid-gap: 8px;
`;

export const LinkURL = styled.a`
  text-decoration: none;
  border-bottom: 1px solid ${({ theme }) => theme.color.blueTransparent};

  font-size: 18px;
  color: ${({ theme }) => theme.color.mainBlueLM};

  &:hover {
    border-bottom: 1px solid ${({ theme }) => theme.color.mainBlueLM};
  }
`;