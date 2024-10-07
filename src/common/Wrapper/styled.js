import styled from "styled-components";

export const Wrapper = styled.main`
  max-width: 1216px;
  margin: 119px 16px 109px 16px;

  display: flex;
  flex-direction: column;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    margin: 21px 16px 31px 16px;
  }
`;