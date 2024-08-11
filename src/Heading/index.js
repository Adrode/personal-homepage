import themeToggle from "../images/theme-toggle.svg";
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
import { selectTheme, switchTheme } from "./themeSlice";
import { ReactComponent as MailIcon } from "../images/mailIcon.svg";

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