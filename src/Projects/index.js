import {
  Container,
} from "./styled";
import { GithubTile } from "./GithubTile";
import { Banner } from "./Banner";

export const Projects = () => (
  <>
    <Banner />
    <Container>
      <GithubTile />
      <GithubTile />
      <GithubTile />
      <GithubTile />
      <GithubTile />
    </Container>
  </>
);