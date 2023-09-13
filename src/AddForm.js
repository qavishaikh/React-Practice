// AddItemForm.js
import React, { useState } from 'react';

function AddItemForm({ addNewItem }) {
  const [item, setItem] = useState({ name: '', quantity: 0, price: 0 });

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewItem(item);
    setItem({ name: '', quantity: 0, price: 0 });
  };

  return (
    <div>
      <h2>Add New Item</h2>
      <form onSubmit={handleSubmit}>
        <label> Item Name</label>
        <input
          type="text"
          placeholder="Item Name"
          value={item.name}
          onChange={(e) => setItem({ ...item, name: e.target.value })}
        />
        <label>Quantity</label>
        <input
          type="number"
          placeholder="Quantity"
          value={item.quantity}
          onChange={(e) => setItem({ ...item, quantity: parseInt(e.target.value) })}
        />
        <label> Price</label>
        <input
          type="number"
          placeholder="Price"
          value={item.price}
          onChange={(e) => setItem({ ...item, price: parseFloat(e.target.value) })}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddItemForm;
