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
  <Container>
    <Header>Header</Header>
    <Description>
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
      <LinkDescription>
        <span>Demo:</span>
        <span>Code:</span>
      </LinkDescription>
      <LinkURLContainer>
        <LinkURL href={"https://www.google.com"}>
          https://link.demo.com
        </LinkURL>
        <LinkURL href={"https://www.google.com"}>
          https://link.code.com
        </LinkURL>
      </LinkURLContainer>
    </LinkContainer>
  </Container>
);