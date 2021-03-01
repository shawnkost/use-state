import React, { useState } from "react";

function App() {

  // const [state, setState] = useState({count: 4, theme: "blue"});
  // const count = state.count;
  // const theme = state.theme;

  const [count, setCount] = useState(4);
  const [theme, setTheme] = useState("blue");

  function decrementCount() {
    setCount(prevCount => prevCount - 1);
    // setState(prevState => {
    //   return { ...prevState, count: prevState.count - 1 }
    // })
  }

  function incrementCount() {
    setCount(prevCount => prevCount + 1);
  }

  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={incrementCount}>+</button>
    </>
  )
}

export default App;
