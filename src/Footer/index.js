import {
  Container,
  Subheader,
  Description,
  EmailContact,
  SocialmediaContainer,
  GithubImage,
} from "./styled";

export const Footer = () => (
  <Container>
    <Subheader>
      Let's talk!
    </Subheader>
    <EmailContact
      href={"mailto:adrianwo.work@gmail.com"}
      target={"_blank"}
      rel={"noreferrer noopener"}
    >
      adrianwo.work@gmail.com
    </EmailContact>
    <Description>
      I’m always open to new projects whenever I have the time.
      If you have a website, dashboard or mobile app in mind and
      need some help to make your ideas come to life, feel free to contact me.
    </Description>
    <SocialmediaContainer>
      <GithubImage />
    </SocialmediaContainer>
  </Container>
);