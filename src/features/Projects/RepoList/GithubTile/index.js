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
import { selectTheme } from "../../../themeSlice";

export const GithubTile = ({
  projectName,
  projectDescription,
  projectDemoURL,
  projectCodeURL,
  isDemoLinkAvailable,
  isCodeLinkAvailable
}) => {
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
          {
            isDemoLinkAvailable ?
              <span>Demo:</span>
              :
              ""
          }
          {
            isCodeLinkAvailable ?
              <span>Code:</span>
              :
              ""
          }
        </LinkDescription>
        <LinkURLContainer>
          {
            isDemoLinkAvailable ?
              <LinkURL
                $dark={themeDark}
                href={projectDemoURL}
                target={"_blank"}
                rel={"noreferrer noopener"}
                title={projectDemoURL}
              >
                {projectDemoURL}
              </LinkURL>
              :
              ""
          }
          {
            isCodeLinkAvailable ?
              <LinkURL
                $dark={themeDark}
                href={projectCodeURL}
                target={"_blank"}
                rel={"noreferrer noopener"}
                title={projectCodeURL}
              >
                {projectCodeURL}
              </LinkURL>
              :
              ""
          }
        </LinkURLContainer>
      </LinkContainer>
    </Container>
  )
};