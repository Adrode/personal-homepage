import { skillset, nextToLearn } from "./utils/listsContent";
import { Wrapper } from "./Wrapper/styled";
import { Heading } from "./Heading";
import { List } from "./List";
import { Projects } from "./Projects";
import { Footer } from "./Footer";
import { useRepo } from "./api/useRepo";

function App() {
  const repoData = useRepo();
  console.log(repoData);
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
      <Projects />
      <Footer />
    </Wrapper>
  );
}

export default App;
