import { useState } from 'react';

// Cat Icon from the screenshot
const CatIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.5 5.5L14.5 3L12 4.5L9.5 3L8.5 5.5C6.5 6.5 5.5 9 6 11.5C6.5 14 9.5 14.5 9.5 14.5V17.5C9.5 17.5 6 17 5 15.5C4 14 4 12 4 12C4 12 2 12.5 2 14.5C2 16.5 3.5 19.5 6 20.5C8.5 21.5 16 21.5 18 19.5C20 17.5 20 14 20 14C20 14 18 14.5 18 11.5C18.5 9 17.5 6.5 15.5 5.5Z" fill="white"/>
    <circle cx="9.5" cy="9.5" r="1.5" fill="black"/>
    <circle cx="14.5" cy="9.5" r="1.5" fill="black"/>
  </svg>
);

const PALETTES = [
  {
    id: 'vibrant',
    name: 'Vibrant',
    colors: [
      { r: 152, g: 251, b: 152, name: 'Pale Green' }, // Top Left
      { r: 165, g: 42, b: 42, name: 'Brown' }, // Top Right
      { r: 175, g: 238, b: 238, name: 'Pale Turquoise' },
      { r: 205, g: 220, b: 57, name: 'Lime' },
      { r: 123, g: 31, b: 162, name: 'Deep Purple' },
      { r: 244, g: 81, b: 30, name: 'Deep Orange' },
      { r: 149, g: 117, b: 205, name: 'Soft Purple' },
      { r: 165, g: 214, b: 167, name: 'Soft Green' },
      { r: 66, g: 165, b: 245, name: 'Blue' },
      { r: 141, g: 78, b: 88, name: 'Mauve' }, // Approximate match
      { r: 171, g: 71, b: 188, name: 'Purple' },
      { r: 88, g: 44, b: 62, name: 'Dark Purple' }, // Approximate match
      { r: 56, g: 142, b: 129, name: 'Teal' },
      { r: 183, g: 85, b: 98, name: 'Dusty Rose' }, // Approximate match
      { r: 141, g: 78, b: 53, name: 'Brown' },
      { r: 124, g: 209, b: 88, name: 'Green' } // Bottom Right
    ]
  },
  {
    id: 'pastel',
    name: 'Pastel',
    colors: [
      { r: 255, g: 205, b: 210, name: 'Red 100' },
      { r: 239, g: 154, b: 154, name: 'Red 200' },
      { r: 255, g: 224, b: 178, name: 'Orange 100' },
      { r: 255, g: 204, b: 128, name: 'Orange 200' },
      { r: 255, g: 249, b: 196, name: 'Yellow 100' },
      { r: 255, g: 245, b: 157, name: 'Yellow 200' },
      { r: 200, g: 230, b: 201, name: 'Green 100' },
      { r: 165, g: 214, b: 167, name: 'Green 200' },
      { r: 178, g: 235, b: 242, name: 'Cyan 100' },
      { r: 128, g: 222, b: 234, name: 'Cyan 200' },
      { r: 187, g: 222, b: 251, name: 'Blue 100' },
      { r: 144, g: 202, b: 249, name: 'Blue 200' },
      { r: 225, g: 190, b: 231, name: 'Purple 100' },
      { r: 206, g: 147, b: 216, name: 'Purple 200' },
      { r: 248, g: 187, b: 208, name: 'Pink 100' },
      { r: 244, g: 143, b: 177, name: 'Pink 200' }
    ]
  }
];

function ColorPalette({ selectedColor, onColorSelect }) {
  const [currentPaletteIndex, setCurrentPaletteIndex] = useState(0);
  
  const currentPalette = PALETTES[currentPaletteIndex];

  const togglePalette = () => {
    setCurrentPaletteIndex((prev) => (prev + 1) % PALETTES.length);
  };

  const isSelected = (color) => {
    return selectedColor && 
      selectedColor.r === color.r && 
      selectedColor.g === color.g && 
      selectedColor.b === color.b;
  };

  return (
    <div className="color-palette">
      <div className="palette-grid">
        {currentPalette.colors.map((color, index) => (
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
      
      <button 
        className="cat-button" 
        onClick={togglePalette}
        aria-label="Switch Color Palette"
      >
        <CatIcon />
      </button>
    </div>
  );
}

export default ColorPalette;
