import {
  Container,
} from "./styled";
import { GithubTile } from "./GithubTile";
import { Banner } from "./Banner";
import { useSelector } from "react-redux";
import { selectErrorStatus, selectLoadingStatus, selectRepoData } from "../repoSlice";
import { Loading } from "./Loading";
import { Error } from "./Error";

export const RepoList = () => {
  const repoData = useSelector(selectRepoData);
  const loadingStatus = useSelector(selectLoadingStatus);
  const errorStatus = useSelector(selectErrorStatus);
  return (
    <>
      <Banner />
      {
        loadingStatus ?
          <Loading />
          : (
            errorStatus ?
              <Error />
              :
              <Container>
                {
                  repoData.map((item) => (
                    <GithubTile
                      key={item.id}
                      projectName={item.name}
                      projectDescription={item.description}
                      projectDemoURL={item.homepage}
                      projectCodeURL={item.html_url}
                      isDemoLinkAvailable={item.homepage !== ""}
                      isCodeLinkAvailable={item.html_url !== ""}
                    />
                  ))
                }
              </Container >
          )
      }
    </>
  )
};