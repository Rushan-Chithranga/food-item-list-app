import { useEffect, useState } from "react";
import { useStore } from "../store";

function ItemForm({ monthId }) {
  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState("");
  const addItem = useStore((state) => state.addItem);
  const saveToStorage = useStore((state) => state.saveToStorage);
  const items = useStore((state) => state.items[monthId] || []);

  useEffect(() => {
    if (items.length > 0) {
      saveToStorage();
    }
  }, [items, saveToStorage]);

  const handleAddItem = () => {
    if (itemName && quantity) {
      addItem(monthId, itemName, quantity);
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
