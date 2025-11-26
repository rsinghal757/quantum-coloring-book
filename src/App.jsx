import { useState } from 'react';
import Canvas from './components/Canvas';
import ColorPalette from './components/ColorPalette';
import InfoPanel from './components/InfoPanel';

function App() {
  // Default to the first color in the palette (red)
  const [selectedColor, setSelectedColor] = useState({ r: 231, g: 76, b: 60 });

  return (
    <div className="app">
      <main className="main-content">
        <div className="canvas-section">
          <Canvas 
            selectedColor={selectedColor} 
            imageSrc="/image.png" 
          />
          <ColorPalette 
            selectedColor={selectedColor} 
            onColorSelect={setSelectedColor} 
          />
        </div>
        
        <div className="info-section">
          <InfoPanel />
        </div>
      </main>
    </div>
  );
}

export default App;

