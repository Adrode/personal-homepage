import {
  Container,
  Logo,
  Header,
  Subheader,
} from "./styled";
import githubLogo from "../../images/githubLogo.svg";

export const Banner = () => (
  <Container>
    <Logo
      src={githubLogo}
      alt={"GitHub Logo"}
    />
    <Header>
      Portfolio
    </Header>
    <Subheader>
      My recent projects
    </Subheader>
  </Container>
);