import themeToggle from "../images/theme-toggle.svg";
import message from "../images/message.svg";
import {
  Header,
  Image,
  SwitchContainer,
  SwitchDescription,
  SwitchToggle,
  Description,
  Subheader,
  Name,
  PersonalDescription,
  Button,
  ButtonIcon,
} from "./styled";

export const Heading = () => (
  <Header>
    <Image />
    <SwitchContainer>
      <SwitchDescription>Dark mode off</SwitchDescription>
      <SwitchToggle
        src={themeToggle}
        alt="Switch toggle"
      >
      </SwitchToggle>
    </SwitchContainer>
    <Description>
      <Subheader>This is</Subheader>
      <Name>Adrian Woźniak</Name>
      <PersonalDescription>
        💻 I thrive on coding with React, turning concepts into dynamic user experiences!
        My joy comes from solving puzzles with state management and crafting responsive UIs. 🚀🔍
      </PersonalDescription>
      <Button>
        <ButtonIcon
          src={message}
          alt={"."}
        />
        <span>
          Hire me
        </span>
      </Button>
    </Description>
  </Header>
);