import { useState } from "react";
function Greet() {
  const [name, setName] = useState("");
  return (
    <div>
      <label htmlFor="Name">Name: </label>
      <input
        type="text"
        value={name}
        placeholder="Type name..."
        onChange={(e) => setName(e.target.value)}
      />

      <h3> Hello {name}</h3>
      
    </div>
  );
}
export default Greet;
