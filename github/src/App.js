import React from "react";
import Counter from "./Counter";
import CounterHooks from "./CounterHooks";
import { useState } from "react";

export const ThemeContext = React.createContext();
function App() {
  console.log("render app");
  const [theme, setTheme] = useState("red");
  return (
    <ThemeContext.Provider value={{ backgroundColor: theme }}>
      Counter
      <Counter initialCount={4} />
      CounterHooks
      <CounterHooks initialCount={4} />
      <button
        onClick={() =>
          setTheme((prevTheme) => {
            return prevTheme === "red" ? "blue" : "red";
          })
        }
      >
        Toogle Theme
      </button>
    </ThemeContext.Provider>
  );
}

export default App;
