import { skillset, nextToLearn } from "./utils/listsContent";
import { Wrapper } from "./Wrapper/styled";
import { Heading } from "./Heading";
import { List } from "./List";
import { RepoList } from "./Projects/RepoList";
import { Footer } from "./Footer";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchRepoData } from "./Projects/repoSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRepoData());
  }, [dispatch]);

  return (
    <Wrapper>
      <Heading />
      <List
        headerText={"My skillset includes"}
        headerEmoji={"🛠️"}
        listContent={skillset}
      />
      <List
        headerText={"What I want to learn next"}
        headerEmoji={"🚀"}
        listContent={nextToLearn}
      />
      <RepoList />
      <Footer />
    </Wrapper>
  );
}

export default App;
