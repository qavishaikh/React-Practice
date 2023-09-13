// InventoryApp.js
import React, { useState } from 'react';
import InventoryList from './InvertryList';
import AddItemForm from './AddForm';
import './App.css'

function InventoryApp() {
  const [inventory, setInventory] = useState([]);

  const addNewItem = (item) => {
    setInventory([...inventory, item]);
  };

  const deleteItem = (index) => {
    const updatedInventory = [...inventory];
    updatedInventory.splice(index, 1);
    setInventory(updatedInventory);
  };

  const updateItem = (index, newItem) => {
    const updatedInventory = [...inventory];
    updatedInventory[index] = newItem;
    setInventory(updatedInventory);
  };

  return (
    <div className='App'>
      <h1>Inventory Management System</h1>
      <AddItemForm addNewItem={addNewItem} />
      <InventoryList
        inventory={inventory}
        deleteItem={deleteItem}
        updateItem={updateItem}
      />
    </div>
  );
}

export default InventoryApp;
