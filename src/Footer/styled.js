import styled from "styled-components";
import { ReactComponent as GithubLogo } from "../images/githubLogo.svg";
import { ReactComponent as LinkedinLogo } from "../images/linkedinLogo.svg";
import { ReactComponent as InstagramLogo } from "../images/instagramLogo.svg";

export const Container = styled.footer``;

export const Subheader = styled.p`
  margin: 0 0 24px 0;
  
  font-size: 12px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.color.textSecondary};
  text-transform: uppercase;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    margin-bottom: 12px;
  }
`;

export const EmailContact = styled.a`
  margin: 0 0 24px 0;
  display: inline-block;
  
  font-size: 32px;
  font-weight: ${({ theme }) => theme.fontWeight.heavy};
  color: inherit;
  text-decoration: none;

  word-break: break-all;

  &:hover {
    color: ${({ theme }) => theme.color.mainBlueLM};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    margin-bottom: 12px;
    font-size: 18px;
  }
`;

export const Description = styled.p`
  margin: 0 0 56px 0;

  font-size: 18px;
  line-height: 25.2px;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    margin-bottom: 40px;
    font-size: 14px;
    line-height: 16.9px;
  }
`;

export const SocialmediaContainer = styled.div`
  display: flex;
  gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    gap: 16px;
  }
`;

export const SocialmediaLink = styled.a`
  text-decoration: none;
`;

export const GithubImage = styled(GithubLogo)`
  width: 48px;
  height: 48px;
  color: ${({ theme }) => theme.color.blackText};

  &:hover {
    color: ${({ theme }) => theme.color.mainBlueLM};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    width: 32px;
    height: 32px;
  }
`;

export const LinkedinImage = styled(LinkedinLogo)`
  width: 48px;
  height: 48px;
  color: ${({ theme }) => theme.color.blackText};

  &:hover {
    color: ${({ theme }) => theme.color.mainBlueLM};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    width: 32px;
    height: 32px;
  }
`;

export const InstagramImage = styled(InstagramLogo)`
  width: 48px;
  height: 48px;
  color: ${({ theme }) => theme.color.blackText};

  &:hover {
    color: ${({ theme }) => theme.color.mainBlueLM};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    width: 32px;
    height: 32px;
  }
`;