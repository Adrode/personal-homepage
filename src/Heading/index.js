import themeToggle from "../images/theme-toggle.svg";
import {
  Header,
  InformationContainer,
  Image,
  SwitchContainer,
  SwitchDescription,
  SwitchToggle,
  Description,
  Subheader,
  Name,
  PersonalDescription,
  Button
} from "./styled";

export const Heading = () => {
  return (
    <Header>
      <Image />
      <InformationContainer>
        <SwitchContainer>
          <SwitchDescription>Dark mode off</SwitchDescription>
          <SwitchToggle
            src={themeToggle}
            alt="Animated swtich toggle to change theme from dark to light"
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
          <Button>Hire me</Button>
        </Description>
      </InformationContainer>
    </Header>
  )
};