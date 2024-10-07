import { ReactComponent as ThemeToggleLM } from "../../images/themeToggleLM.svg";
import { ReactComponent as ThemeToggleDM } from "../../images/themeToggleDM.svg";
import { ReactComponent as MailIcon } from "../../images/mailIcon.svg";
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
  LinkButton,
} from "./styled";
import { selectTheme, switchTheme } from "../../features/themeSlice";

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
          Dark mode {themeDark ? "on" : "off"}
        </SwitchDescription>
        {themeDark ?
          <ThemeToggleDM
            onClick={() => dispatch(switchTheme())}
          />
          :
          <ThemeToggleLM
            onClick={() => dispatch(switchTheme())}
          />}
          {/*
            Switch triggeruje nowe pobranie z API
            Może kwestia dodać sagę?
          */}
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
        <LinkButton
          $dark={themeDark}
          href={"mailto:adrianwo.work@gmail.com"}
          target={"_blank"}
          rel={"noreferrer noopener"}
          title={"Submit your proposals by email"}
        >
          <MailIcon />
          <span>
            Hire me
          </span>
        </LinkButton>
      </Description>
    </Header >
  )
};