import { useContext } from "react";
import { GlobalContext } from "./context/GlobalContext";

function App() {
  const { count, increment, decrement } = useContext(GlobalContext);

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>React Context API Counter</h1>
      <h2>Count: {count}</h2>

      <button onClick={increment} style={{ margin: "10px", padding: "10px" }}>
        Increment
      </button>

      <button onClick={decrement} style={{ margin: "10px", padding: "10px" }}>
        Decrement
      </button>
    </div>
  );
}

export default App;
