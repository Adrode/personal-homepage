import styled from "styled-components";

export const Container = styled.section`
  margin: 24px 0 120px 0;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 32px;

  word-break: break-word;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    grid-template-columns: 1fr;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    grid-gap: 16px;
  }
`;