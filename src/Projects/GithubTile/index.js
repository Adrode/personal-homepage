import {
  Container,
  Header,
  Description,
  LinkContainer,
  LinkDescription,
  LinkURLContainer,
  LinkURL
} from "./styled";

export const GithubTile = () => (
  <Container $dark>
    <Header $dark>
      Header
    </Header>
    <Description $dark>
      Project description
      Project description
      Project description
      Project description
      Project description
      Project description
      Project description
      Project description
    </Description>
    <LinkContainer>
      <LinkDescription $dark>
        <span>Demo:</span>
        <span>Code:</span>
      </LinkDescription>
      <LinkURLContainer>
        <LinkURL
          $dark
          href={"https://www.google.com"}
        >
          https://link.demo.com
        </LinkURL>
        <LinkURL
          $dark
          href={"https://www.google.com"}
        >
          https://link.code.com
        </LinkURL>
      </LinkURLContainer>
    </LinkContainer>
  </Container>
);