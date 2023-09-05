import React, { useState } from 'react';
import './ColorPicker.css';

function ColorPicker() {
  const [selectedColor, setSelectedColor] = useState('blue');
  const [selectedBackgroundColor, setSelectedBackgroundColor] = useState('white');

  const colors = ['red', 'blue', 'green', 'yellow', 'purple'];

  const handleColorChange = (color) => {
    setSelectedColor(color);

    // Map color names to corresponding background colors
    const colorToBackgroundColor = {
      red: 'pink',
      blue: 'lightblue',
      green: 'lightgreen',
      yellow: 'lightyellow',
      purple: 'lavender',
    };

    // Set the selected background color based on the chosen color
    setSelectedBackgroundColor(colorToBackgroundColor[color] || 'white');
  };

  // Apply the selected background color to the body element
  document.body.style.backgroundColor = selectedBackgroundColor;

  return (
    <div>
      <h1>Color Picker</h1>
      <p>Selected Color: {selectedColor}</p>
      <div className="color-options">
        {colors.map((color) => (
          <div
            key={color}
            className={`color-option ${color === selectedColor ? 'selected' : ''}`}
            style={{ backgroundColor: color }}
            onClick={() => handleColorChange(color)}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default ColorPicker;
