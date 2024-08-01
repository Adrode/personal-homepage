import themeToggle from "../images/theme-toggle.svg";
import message from "../images/message.svg";
import { useSelector, useDispatch } from "react-redux";
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
import { selectTheme, switchTheme } from "../themeSlice";

export const Heading = () => {
  const themeDark = useSelector(selectTheme);
  const dispatch = useDispatch();

  return (
    <Header>
      <Image />
      <SwitchContainer>
        <SwitchDescription
          $dark={themeDark}
        >
          Dark mode off
        </SwitchDescription>
        <SwitchToggle
          onClick={() => dispatch(switchTheme())}
          src={themeToggle}
          alt="Switch toggle"
        >
        </SwitchToggle>
      </SwitchContainer>
      <Description>
        <Subheader
          $dark={themeDark}
        >
          This is
        </Subheader>
        <Name>Adrian Woźniak</Name>
        <PersonalDescription
          $dark={themeDark}
        >
          💻 I thrive on coding with React, turning concepts into dynamic user experiences!
          My joy comes from solving puzzles with state management and crafting responsive UIs. 🚀🔍
        </PersonalDescription>
        <Button
          $dark={themeDark}
        >
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
  )
};