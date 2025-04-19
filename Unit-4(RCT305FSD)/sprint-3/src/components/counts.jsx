import { useState } from "react";

export const MultipleCounters = () => {
  // Initializing the state for three counters
  let [countA, setCountA] = useState(0);
  let [countB, setCountB] = useState(1);
  let [countC, setCountC] = useState(2);

  return (
    <div>
      <button onClick={() => setCountA(countA + 1)}>{countA}</button>
      <button onClick={() => setCountB(countB + 1)}>{countB}</button>
      <button onClick={() => setCountC(countC + 1)}>{countC}</button>
    </div>
  );
};
