import styled from "styled-components";

export const Wrapper = styled.main`
    max-width: 1216px;
    margin: 119px 16px 0 16px;

    display: flex;
    flex-direction: column;

    @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
        margin-top: 21px;
    }
`;