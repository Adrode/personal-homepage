import { skillset, nextToLearn } from "./utils/listsContent";
import { Wrapper } from "./common/Wrapper/styled";
import { Heading } from "./common/Heading";
import { List } from "./features/List";
import { RepoList } from "./features/Projects/RepoList";
import { Footer } from "./common/Footer";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchRepoData } from "./features/Projects/repoSlice";

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
