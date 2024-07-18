import { skillset, nextToLearn } from "./utils/listsContent";
import { Wrapper } from "./Wrapper/styled";
import { Heading } from "./Heading";
import { List } from "./List";
import { Projects } from "./Projects";

function App() {
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
    </Wrapper>
  );
}

export default App;
