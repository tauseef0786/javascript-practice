import { useState } from "react";

function Counter() {
  const [state, setState] = useState(0); // Corrected useState syntax

  function handleAdd() {
    setState((prev) => prev + 1); // Corrected arrow function syntax
  }

  return (
    <div>
      <h1>Count: {state}</h1> {/* Corrected curly braces */}
      <button onClick={handleAdd}>Add</button> {/* Corrected attribute */}
    </div>
  );
}

export default Counter;
