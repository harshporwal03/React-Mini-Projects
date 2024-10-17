import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const upCount = () => {
    setCount(count + 1);
  };

  const downCount = () => {
    setCount(count - 1);
  };

  return (
    <>
      <h1>Hey! Harsh...</h1>
      <button onClick={upCount}>{count}</button>
      <br />
      <button onClick={downCount}>{count}</button>
    </>
  );
}

export default App;
