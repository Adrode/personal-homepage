import { useSelector } from "react-redux";
import {
  Container,
  Subheader,
  Description,
  EmailContact,
  SocialmediaContainer,
  SocialmediaLink,
  GithubImage,
  LinkedinImage,
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
        >
          <GithubImage
            $dark={themeDark}
          />
        </SocialmediaLink>
        <SocialmediaLink
          href={"https://github.com/Adrode"}
          target={"_blank"}
          rel={"noreferrer noopener"}
        >
          <LinkedinImage
            $dark={themeDark}
          />
        </SocialmediaLink>
        <SocialmediaLink
          href={"https://github.com/Adrode"}
          target={"_blank"}
          rel={"noreferrer noopener"}
        >
          <InstagramImage
            $dark={themeDark}
          />
        </SocialmediaLink>
      </SocialmediaContainer>
    </Container>
  )
};