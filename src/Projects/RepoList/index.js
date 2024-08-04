import {
  Container,
} from "./styled";
import { GithubTile } from "./GithubTile";
import { Banner } from "./Banner";
import { useSelector } from "react-redux";
import { selectRepoData } from "../repoSlice";

export const RepoList = () => {
  const repoData = useSelector(selectRepoData);
  console.log(repoData);
  return (
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
  )
};