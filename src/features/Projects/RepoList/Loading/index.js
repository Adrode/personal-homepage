import { Container, Description, Spinner } from "./styled.js";
import { useSelector } from "react-redux";
import { selectTheme } from "../../../Heading/themeSlice.js";

export const Loading = ({ dark }) => {
  const themeDark = useSelector(selectTheme);
  
  return (
    <Container>
      <Description>
        Please wait, projects are being loaded...
      </Description>
      <Spinner
        $dark={themeDark}
      />
    </Container>
  )
};