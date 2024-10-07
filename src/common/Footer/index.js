import { useSelector } from "react-redux";
import {
  Container,
  Subheader,
  Description,
  EmailContact,
  SocialmediaContainer,
  SocialmediaLink,
  GithubImage,
  FacebookImage,
  InstagramImage,
} from "./styled";
import { selectTheme } from "../Heading/themeSlice";

export const Footer = () => {
  const themeDark = useSelector(selectTheme);

  return (
    <Container>
      <Subheader
        $dark={themeDark}
      >
        Let's talk!
      </Subheader>
      <EmailContact
        $dark={themeDark}
        href={"mailto:adrianwo.work@gmail.com"}
        target={"_blank"}
        rel={"noreferrer noopener"}
        title={"Submit your proposals by email"}
      >
        adrianwo.work@gmail.com
      </EmailContact>
      <Description>
        I’m always open to new projects whenever I have the time.
        If you have a website, dashboard or mobile app in mind and
        need some help to make your ideas come to life, feel free to contact me.
      </Description>
      <SocialmediaContainer>
        <SocialmediaLink
          href={"https://github.com/Adrode"}
          target={"_blank"}
          rel={"noreferrer noopener"}
          title={"Feel free and check out my projects"}
        >
          <GithubImage
            $dark={themeDark}
          />
        </SocialmediaLink>
        <SocialmediaLink
          href={"https://www.facebook.com/adrianwozniak20"}
          target={"_blank"}
          rel={"noreferrer noopener"}
          title={"Feel free and check out my social media"}
        >
          <FacebookImage
            $dark={themeDark}
          />
        </SocialmediaLink>
        <SocialmediaLink
          href={"https://www.instagram.com/adrianwozniak20/"}
          target={"_blank"}
          rel={"noreferrer noopener"}
          title={"Feel free and check out my social media"}
        >
          <InstagramImage
            $dark={themeDark}
          />
        </SocialmediaLink>
      </SocialmediaContainer>
    </Container>
  )
};