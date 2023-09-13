import React from 'react';
import './App.css'

function InventoryList({ inventory, deleteItem, updateItem }) {
  return (
    <div>
      <h2>Inventory List</h2>
      <ul>
        {inventory.map((item, index) => (
          <li key={index}>
            {item.name} - Quantity: {item.quantity}, Price: {item.price.toFixed(2)}
            <button onClick={() => deleteItem(index)}>Delete</button>
            <button onClick={() => {
              const newItem = { ...item, /* specify updated properties */ };
              updateItem(index, newItem);
            }}>Update</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default InventoryList;
