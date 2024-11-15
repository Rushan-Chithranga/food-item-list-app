import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ItemForm() {
  const { monthId } = useParams();
  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("items")) || {};
    setItems(storedItems[monthId] || []);
  }, [monthId]);

  useEffect(() => {
    if (monthId) {
      const storedItems = JSON.parse(localStorage.getItem("items")) || {};
      storedItems[monthId] = items;
      localStorage.setItem("items", JSON.stringify(storedItems));
    }
  }, [items, monthId]);

  const handleAddItem = () => {
    if (itemName && quantity) {
      const newItem = { id: Date.now(), name: itemName, quantity };
      const updatedItems = [...items, newItem];
      setItems(updatedItems);
      setItemName("");
      setQuantity("");
    }
  };

  return (
    <div>
      <div className="my-4">
        <input
          type="text"
          placeholder="Item Name"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          className="input input-bordered"
        />
        <input
          type="text"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="input input-bordered"
        />
        <button onClick={handleAddItem} className="btn btn-primary ml-2">
          Add Item
        </button>
      </div>

      <div>
        {items.map((item) => (
          <div key={item.id} className="border p-2 my-1">
            {item.name}: {item.quantity}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemForm;
