import { useSelector } from "react-redux";
import {
  Container,
  Header,
  Description,
  LinkContainer,
  LinkDescription,
  LinkURLContainer,
  LinkURL
} from "./styled";
import { selectTheme } from "../../../Heading/themeSlice";

export const GithubTile = () => {
  const themeDark = useSelector(selectTheme);

  return (
    <Container
      $dark={themeDark}
    >
      <Header
        $dark={themeDark}
      >
        Header
      </Header>
      <Description
        $dark={themeDark}
      >
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
        <LinkDescription
          $dark={themeDark}
        >
          <span>Demo:</span>
          <span>Code:</span>
        </LinkDescription>
        <LinkURLContainer>
          <LinkURL
            $dark={themeDark}
            href={"https://www.google.com"}
          >
            https://link.demo.com
          </LinkURL>
          <LinkURL
            $dark={themeDark}
            href={"https://www.google.com"}
          >
            https://link.code.com
          </LinkURL>
        </LinkURLContainer>
      </LinkContainer>
    </Container>
  )
};