import { useState } from 'react';

// Standard coloring book palette - vibrant and pastel colors
const COLORS = [
  // Row 1: Primary and secondary colors
  { r: 231, g: 76, b: 60, name: 'Red' },
  { r: 230, g: 126, b: 34, name: 'Orange' },
  { r: 241, g: 196, b: 15, name: 'Yellow' },
  { r: 46, g: 204, b: 113, name: 'Green' },
  { r: 26, g: 188, b: 156, name: 'Teal' },
  { r: 52, g: 152, b: 219, name: 'Blue' },
  { r: 155, g: 89, b: 182, name: 'Purple' },
  { r: 233, g: 30, b: 99, name: 'Pink' },
  
  // Row 2: Darker variants
  { r: 192, g: 57, b: 43, name: 'Dark Red' },
  { r: 211, g: 84, b: 0, name: 'Dark Orange' },
  { r: 243, g: 156, b: 18, name: 'Gold' },
  { r: 39, g: 174, b: 96, name: 'Dark Green' },
  { r: 22, g: 160, b: 133, name: 'Dark Teal' },
  { r: 41, g: 128, b: 185, name: 'Dark Blue' },
  { r: 142, g: 68, b: 173, name: 'Dark Purple' },
  { r: 194, g: 24, b: 91, name: 'Dark Pink' },
  
  // Row 3: Pastels and skin tones
  { r: 250, g: 190, b: 190, name: 'Light Pink' },
  { r: 255, g: 218, b: 185, name: 'Peach' },
  { r: 255, g: 245, b: 157, name: 'Light Yellow' },
  { r: 200, g: 230, b: 201, name: 'Light Green' },
  { r: 178, g: 235, b: 242, name: 'Light Cyan' },
  { r: 187, g: 222, b: 251, name: 'Light Blue' },
  { r: 225, g: 190, b: 231, name: 'Lavender' },
  { r: 248, g: 187, b: 208, name: 'Rose' },
  
  // Row 4: Earth tones and neutrals
  { r: 121, g: 85, b: 72, name: 'Brown' },
  { r: 161, g: 136, b: 127, name: 'Taupe' },
  { r: 188, g: 170, b: 164, name: 'Warm Gray' },
  { r: 96, g: 125, b: 139, name: 'Slate' },
  { r: 69, g: 90, b: 100, name: 'Dark Slate' },
  { r: 33, g: 33, b: 33, name: 'Near Black' },
  { r: 117, g: 117, b: 117, name: 'Gray' },
  { r: 189, g: 189, b: 189, name: 'Light Gray' },
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

