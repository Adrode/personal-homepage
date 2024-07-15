import { Wrapper } from "./Wrapper/styled";
import { Heading } from "./Heading";
import { List } from "./List";
import { GithubTile } from "./GithubTile";
import { skillset, nextToLearn } from "./utils/listsContent";

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
      <GithubTile />
    </Wrapper>
  );
}

export default App;
