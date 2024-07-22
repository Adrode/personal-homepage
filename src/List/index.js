import {
  Container,
  Header,
  StyledList,
  StyledItem,
  StyledDisc
} from "./styled";
import listDisc from "../images/listDisc.svg";

export const List = ({ headerText, headerEmoji, listContent }) => (
  <Container $dark>
    <Header>
      <span>{headerText}</span><span>{headerEmoji}</span>
    </Header>
    <StyledList $dark>
      {
        listContent.map((item, index) => (
          <StyledItem key={index}>
            <StyledDisc
              src={listDisc}
              alt={""}
            />
            {/*
              do powyższego na pewno będzie potrzebny store, w zależności od stanu
              dark lub jego braku będzie listDiscLM lub listDiscDM
            */}
            <span>{item}</span>
          </StyledItem>
        ))
      }
    </StyledList>
  </Container>
);