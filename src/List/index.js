import {
  Container,
  Header,
  StyledList,
  StyledItem,
  StyledDisc
} from "./styled";
import listDisc from "../images/listDisc.svg";

export const List = ({ headerText, headerEmoji, listContent }) => (
  <Container>
    <Header>
      <span>{headerText}</span><span>{headerEmoji}</span>
    </Header>
    <StyledList>
      {
        listContent.map((item, index) => (
          <StyledItem key={index}>
            <StyledDisc
              src={listDisc}
              alt={""}
            />
            <span>{item}</span>
          </StyledItem>
        ))
      }
    </StyledList>
  </Container>
);