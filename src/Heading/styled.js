import styled from "styled-components";
import profileImage from "../images/profile-image.jpg";

export const Header = styled.header`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 72px;
`;

export const InformationContainer = styled.div``;

export const Image = styled.img`
  background-image: url(${profileImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 384px;
  height: 384px;
  border-radius: 50%;
`;

export const SwitchContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: right;
  align-items: center;
  grid-gap: 12px;
`;

export const SwitchDescription = styled.span`
  color: ${({ theme }) => theme.color.textSecondary};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  white-space: nowrap;
  font-size: 12px;
  text-transform: uppercase;
`;

export const SwitchToggle = styled.img`
  height: 26px;
`;

export const Description = styled.section``;

export const Subheader = styled.p`
  color: ${({ theme }) => theme.color.textSecondary};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-transform: uppercase;
  font-size: 12px;
  margin-bottom: 12px;
`;

export const Name = styled.h1`
  color: ${({ theme }) => theme.color.blackText};
  font-weight: ${({ theme }) => theme.fontWeight.heavy};
  font-size: 38px;
  margin-bottom: 35px;
`;

export const PersonalDescription = styled.p`
  color: ${({ theme }) => theme.color.textSecondary};
  font-size: 20px;
  line-height: 28px;
  margin-bottom: 32px;
`;

export const Button = styled.button`
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.mainBlueLM};
  padding: 12px 16px;
  border: 1px solid ${({ theme }) => theme.color.borderTransparent};
  border-radius: 4px;

  &:focus, &:hover {
    box-shadow: -2px -2px 0px 0px #8CC2FF,
      2px 2px 0px 0px #8CC2FF,
      -2px 2px 0px 0px #8CC2FF,
      2px -2px 0px 0px #8CC2FF;
  }

  &:active {
    box-shadow: 0px 2px 0px 0px #14462033 inset;
  }
`;