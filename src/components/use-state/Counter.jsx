import { useState } from "react";
function Counter() {
  const [Count, setCount] = useState(0);
  return (
    <div>
      <h3> {Count}</h3>
      <button onClick={() => setCount(Count + 1)}> Increase</button>
      <button onClick={() => setCount(Count - 1)}>Decrease</button>
    </div>
  );
}
export default Counter;
