import "./App.css";
import SimpleUseState from "./components/UseStateDemos/SimpleUseState";
import BasedOnOldState from "./components/UseStateDemos/BasedOnOldState";
import StateNoMerge from "./components/UseStateDemos/StateNoMerge";
import UseEffectExample from "./components/UseEffectDemos/UseEffectExample";
import Unmount from "./components/UseEffectDemos/Unmount";
import FetchOnMount from "./components/UseEffectDemos/FetchOnMount";
import DeeplyNestedTree from "./components/ContextDemo/DeeplyNestedTree";

function App() {
  return (
    <div className="App">
      <SimpleUseState></SimpleUseState>
      <StateNoMerge></StateNoMerge>
      {/* <BasedOnOldState></BasedOnOldState> */}
      {/* <UseEffectExample></UseEffectExample> */}
      {/* <Unmount></Unmount> */}
      {/* <FetchOnMount></FetchOnMount> */}
      <DeeplyNestedTree></DeeplyNestedTree>
    </div>
  );
}

export default App;
