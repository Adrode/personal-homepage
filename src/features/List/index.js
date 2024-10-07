import { useSelector } from "react-redux";
import {
  Container,
  Header,
  StyledList,
  StyledItem,
  StyledDisc
} from "./styled";
import { selectTheme } from "../Heading/themeSlice";

export const List = ({ headerText, headerEmoji, listContent }) => {
  const themeDark = useSelector(selectTheme);

  return (
    <Container
      $dark={themeDark}
    >
      <Header>
        <span>{headerText}</span><span>{headerEmoji}</span>
      </Header>
      <StyledList
        $dark={themeDark}
      >
        {
          listContent.map((item, index) => (
            <StyledItem key={index}>
              <StyledDisc
                $dark={themeDark}
              />
              <span>{item}</span>
            </StyledItem>
          ))
        }
      </StyledList>
    </Container>
  )
};