import ChildA from "./components/ChildA";
import NameContext from './context/NameContext'

function App() {

  let name = "Noman"

  return (
    <NameContext.Provider value={name}>
      {/* <ChildA name={name} /> */}
      <ChildA />
    </NameContext.Provider>
  );
}

export default App;
