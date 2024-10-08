import styled, { css } from "styled-components";
import profileImage from "../../images/profileImage.jpg";
import { ReactComponent as SunIcon } from "../../images/sun.svg";

export const Header = styled.header`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    "picture switch"
    "picture description"
  ;
  grid-column-gap: 72px;
  margin: 0 0 72px 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    grid-template-areas:
      "picture switch"
      "description description"
    ;
    grid-column-gap: 0px;
    grid-row-gap: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    margin-bottom: 48px;
  }
`;

export const Image = styled.img`
  grid-area: picture;
  background-image: url(${profileImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 384px;
  height: 384px;
  border-radius: 50%;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    width: 285px;
    height: 285px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    width: 128px;
    height: 128px;
  }
`;

export const SwitchContainer = styled.div`
  grid-area: switch;
  display: grid;
  grid-template-columns: auto auto;
  justify-content: right;
  align-items: center;
  grid-gap: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    align-self: baseline;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    grid-template-columns: none;
  }
`;

export const SwitchDescription = styled.span`
  color: ${({ theme }) => theme.color.textSecondary};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  white-space: nowrap;
  font-size: 12px;
  text-transform: uppercase;
  transition: all 0.15s linear;
  
  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    display: none;
  }

  ${({ $dark }) => $dark && css`
    color: ${({ theme }) => theme.color.white};
  `}
`;

export const SwitchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0;
  width: 48px;
  height: 26px;
  background-color: ${({ theme }) => theme.color.lightGrey};

  border: 1px solid ${({ theme }) => theme.color.textSecondary};
  border-radius: 13px / 50%;

  ${({ $dark }) => $dark && css`
    background-color: ${({ theme }) => theme.color.semiDark};
    border-color: ${({ theme }) => theme.color.white};
  `}
`;

export const SwitchButtonSunIconConhtainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  left: -10px;

  width: 20px;
  height: 20px;
  background-color: ${({ theme }) => theme.color.textSecondary};
  color: ${({ theme }) => theme.color.white};
  border-radius: 50%; 

  transition: all 0.15s linear;
  
  ${({ $dark }) => $dark && css`
    transform: translateX(20px) rotate(180deg);
    background-color: ${({ theme }) => theme.color.white};
    color: ${({ theme }) => theme.color.blackText};
  `}
`;

export const Description = styled.section`
  grid-area: description;
`;

export const Subheader = styled.p`
  color: ${({ theme }) => theme.color.textSecondary};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-transform: uppercase;
  font-size: 12px;
  margin: 0 0 12px 0;
  transition: all 0.15s linear;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    margin-bottom: 8px; 
  }

  ${({ $dark }) => $dark && css`
    color: ${({ theme }) => theme.color.white};
  `}
`;

export const Name = styled.h1`
  font-weight: ${({ theme }) => theme.fontWeight.heavy};
  font-size: 38px;
  margin: 0 0 35px 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    font-size: 22px;
    margin-bottom: 16px;
  }
`;

export const PersonalDescription = styled.p`
  color: ${({ theme }) => theme.color.textSecondary};
  font-size: 20px;
  line-height: 28px;
  margin: 0 0 32px 0;
  transition: all 0.15s linear;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    font-size: 17px;
    margin-bottom: 24px;
    line-height: 23.8px;
  }

  ${({ $dark }) => $dark && css`
    color: ${({ theme }) => theme.color.white};
  `}
`;

export const LinkButton = styled.a`
  max-width: fit-content;
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  grid-gap: 16px;

  font-size: 20px;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.mainBlueLM};
  text-transform: capitalize;
  text-decoration: none;
  transition: all 0.15s linear;

  padding: 12px 16px;
  border: 1px solid ${({ theme }) => theme.color.borderTransparent};
  border-radius: 4px;

  &:hover {
    box-shadow: -2px -2px 0px 0px #8CC2FF,
      2px 2px 0px 0px #8CC2FF,
      -2px 2px 0px 0px #8CC2FF,
      2px -2px 0px 0px #8CC2FF;
  }

  &:active {
    box-shadow: 0px 2px 0px 0px #14462033 inset;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    grid-gap: 12px;
    font-size: 18px;
  }

  ${({ $dark }) => $dark && css`
    background-color: ${({ theme }) => theme.color.mainBlueDM};

    &:hover {
      box-shadow: -2px -2px 0px 0px #6D93BE, 
      2px 2px 0px 0px #6D93BE, 
      -2px 2px 0px 0px #6D93BE, 
      2px -2px 0px 0px #6D93BE;
    };

    &:active {
      box-shadow: 0px 2px 0px 0px #14462033 inset;
    }
  `}
`;