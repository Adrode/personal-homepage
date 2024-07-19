import styled from "styled-components";
import githubLogo from "../images/githubLogo.svg";

export const Container = styled.footer``;

export const Subheader = styled.p`
  margin: 0 0 24px 0;
  
  font-size: 12px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.color.textSecondary};
  text-transform: uppercase;
`;

export const EmailContact = styled.a`
  margin: 0 0 24px 0;
  display: block;
  
  font-size: 32px;
  font-weight: ${({ theme }) => theme.fontWeight.heavy};
  color: inherit;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.color.mainBlueLM};
  }
`;

export const Description = styled.p`
  margin: 0 0 56px 0;

  font-size: 18px;
  line-height: 25.2px;
`;

export const SocialmediaContainer = styled.div`
  display: flex;
  gap: 24px;
`;

export const SocialmediaLink = styled.a`
  text-decoration: none;
`;

export const GithubImage = styled.div`
  width: 48px;
  height: 48px;
  background-color: grey;

  background-image: ${githubLogo};
  background-size: cover;
  background-position: center;
`;