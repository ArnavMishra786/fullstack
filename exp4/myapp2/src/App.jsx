import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./features/counter/counterSlice";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Redux Counter App</h1>
      <h2>Count: {count}</h2>

      <button
        onClick={() => dispatch(increment())}
        style={{ margin: "10px", padding: "10px" }}
      >
        Increment
      </button>

      <button
        onClick={() => dispatch(decrement())}
        style={{ margin: "10px", padding: "10px" }}
      >
        Decrement
      </button>
    </div>
  );
}

export default App;
