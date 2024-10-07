import { useSelector } from "react-redux";
import {
  Container,
  Logo,
  Header,
  Subheader,
} from "./styled";
import { selectTheme } from "../../../themeSlice";

export const Banner = () => {
  const themeDark = useSelector(selectTheme);

  return (
    <Container>
      <Logo
        $dark={themeDark}
      />
      <Header>
        Portfolio
      </Header>
      <Subheader>
        My recent projects
      </Subheader>
    </Container>
  )
};