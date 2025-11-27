import { useState } from 'react';
import Canvas from './components/Canvas';
import ColorPalette from './components/ColorPalette';
import InfoPanel from './components/InfoPanel';
import { bookPages } from './data/bookContent';

function App() {
  // Default to the first color in the palette (red)
  const [selectedColor, setSelectedColor] = useState({ r: 231, g: 76, b: 60 });
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  const currentPage = bookPages[currentPageIndex];
  const hasNext = currentPageIndex < bookPages.length - 1;
  const hasPrev = currentPageIndex > 0;

  const handleNext = () => {
    if (hasNext) {
      setCurrentPageIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (hasPrev) {
      setCurrentPageIndex(prev => prev - 1);
    }
  };

  return (
    <div className="app">
      <main className="main-content">
        <div className="canvas-section">
          <Canvas 
            selectedColor={selectedColor} 
            imageSrc={currentPage.image} 
          />
          <ColorPalette 
            selectedColor={selectedColor} 
            onColorSelect={setSelectedColor} 
          />
        </div>
        
        <div className="info-section">
          <InfoPanel 
            title={currentPage.title}
            content={currentPage.content}
            onNext={handleNext}
            onPrev={handlePrev}
            hasNext={hasNext}
            hasPrev={hasPrev}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
