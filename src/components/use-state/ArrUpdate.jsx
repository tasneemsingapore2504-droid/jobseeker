import { useState } from "react";
function ArrUpdate() {
  const [items, setItems] = useState([]);

  const addItem = () => {
    setItems([...items, "Apple", "mango"]);
  };
  return (
    <div>
      <button onClick={addItem}>Add</button>
      {items.map((items, index) => (
        <p key={index}>{items}</p>
      ))}
    </div>
  );
}
export default ArrUpdate;
