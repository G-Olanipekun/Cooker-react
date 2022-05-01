import { useState, useContext } from "react";
import { ThemeContext } from "./App";

export default function CounterHooks({ initialCount }) {
  const [count, setCount] = useState(initialCount);
  console.log("render counter hooks");
  const style = useContext(ThemeContext);
  return (
    <div>
      {/* <button onClick={() => setState({ count: state.count - 1 })}>-</button> */}
      <button
        style={style}
        onClick={() =>
          setCount((prevCount) => {
            return prevCount - 1;
          })
        }
      >
        -
      </button>
      <span>{count}</span>
      <button
        style={style}
        onClick={() =>
          setCount((prevCount) => {
            return prevCount + 1;
          })
        }
      >
        +
      </button>
    </div>
  );
}
