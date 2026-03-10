import { useState } from "react";
function Togg() {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>Toggle</button>
      {isVisible && <h3>Visible Content</h3>}
    </div>
  );
}
export default Togg;
