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

export const GithubTile = ({ projectName, projectDescription, projectDemoURL, projectCodeURL }) => {
  const themeDark = useSelector(selectTheme);

  return (
    <Container
      $dark={themeDark}
    >
      <Header
        $dark={themeDark}
      >
        {projectName}
      </Header>
      <Description
        $dark={themeDark}
      >
        {projectDescription}
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
            href={projectDemoURL}
          >
            {projectDemoURL}
          </LinkURL>
          <LinkURL
            $dark={themeDark}
            href={projectCodeURL}
          >
            {projectCodeURL}
          </LinkURL>
        </LinkURLContainer>
      </LinkContainer>
    </Container>
  )
};