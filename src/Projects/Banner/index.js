import {
  Container,
  Logo,
  Header,
  Subheader,
} from "./styled";

export const Banner = () => (
  <Container>
    <Logo />
    <Header>
      Portfolio
    </Header>
    <Subheader>
      My recent projects
    </Subheader>
  </Container>
);