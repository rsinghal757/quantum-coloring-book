import { useState } from 'react';

// Standard coloring book palette - vibrant and bright colors
const COLORS = [
  // Vibrant
  { r: 231, g: 76, b: 60, name: 'Red' },
  { r: 230, g: 126, b: 34, name: 'Orange' },
  { r: 241, g: 196, b: 15, name: 'Yellow' },
  { r: 46, g: 204, b: 113, name: 'Green' },
  { r: 26, g: 188, b: 156, name: 'Teal' },
  { r: 52, g: 152, b: 219, name: 'Blue' },
  { r: 155, g: 89, b: 182, name: 'Purple' },
  { r: 233, g: 30, b: 99, name: 'Pink' },
  
  // Bright & Pastel
  { r: 243, g: 156, b: 18, name: 'Gold' },
  { r: 255, g: 218, b: 185, name: 'Peach' },
  { r: 255, g: 245, b: 157, name: 'Light Yellow' },
  { r: 178, g: 235, b: 242, name: 'Light Cyan' },
  { r: 187, g: 222, b: 251, name: 'Light Blue' },
  { r: 225, g: 190, b: 231, name: 'Lavender' },
  { r: 248, g: 187, b: 208, name: 'Rose' },
  { r: 236, g: 240, b: 241, name: 'White' },
];

function ColorPalette({ selectedColor, onColorSelect }) {
  const isSelected = (color) => {
    return selectedColor && 
      selectedColor.r === color.r && 
      selectedColor.g === color.g && 
      selectedColor.b === color.b;
  };

  return (
    <div className="color-palette">
      <div className="palette-grid">
        {COLORS.map((color, index) => (
          <button
            key={index}
            className={`color-swatch ${isSelected(color) ? 'selected' : ''}`}
            style={{
              backgroundColor: `rgb(${color.r}, ${color.g}, ${color.b})`
            }}
            onClick={() => onColorSelect(color)}
            title={color.name}
            aria-label={`Select ${color.name}`}
          />
        ))}
      </div>
    </div>
  );
}

export default ColorPalette;

