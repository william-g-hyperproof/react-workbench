import "./App.css";
import MyComponentData from "./components-as-props/mycomponent/Data";
import MyComponentView from "./components-as-props/mycomponent/View";

function useTable() {
  // Replace this with a hook that pulls from Redux etc.
  return [
    ["a0", "b0", "c0"],
    ["a1", "b1", "c1"],
    ["a2", "b2", "c2"],
  ];
}

/*
 * This component orchestrates our Data and View components.
 * We supply the view component as a prop to the data component, along with any hook(s) we're using.
 * There's also a MyComponentAltView that shows data as an ordered list, rather than a table.
 */
function App() {
  return (
    <MyComponentData viewComponent={MyComponentView} useTable={useTable} />
  );
}

export default App;
