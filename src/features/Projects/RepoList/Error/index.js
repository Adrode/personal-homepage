import { useSelector } from "react-redux";
import {
  Container,
  WarningIcon,
  Header,
  Description,
  LinkButton,
} from "./styled";
import { selectTheme } from "../../../themeSlice";

export const Error = () => {
  const themeDark = useSelector(selectTheme);

  return (
    <Container>
      <WarningIcon />
      <Header>
        Ooops! Something went wrong...
      </Header>
      <Description>
        Sorry, failed to load Github projects.
        You can check them directly on Github.
      </Description>
      <LinkButton
        $dark={themeDark}
        href={"https://github.com/Adrode"}
        target={"_blank"}
        rel={"noreferrer noopener"}
        title={"Check out my projects"}
      >
        Go to Github
      </LinkButton>
    </Container>
  )
};