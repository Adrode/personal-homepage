import {
  Container,
  Header,
  StyledList,
  StyledItem,
  StyledDisc
} from "./styled";
import listDisc from "../images/listDisc.svg";
import { skillset } from "./skillset";

export const List = () => (
  <Container>
    <Header>
      <span>My skillset includes</span><span>🛠️</span>
    </Header>
    <StyledList>
      {
        skillset.map((item, index) => (
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