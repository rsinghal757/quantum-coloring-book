import { useState } from 'react';
import Canvas from './components/Canvas';
import ColorPalette from './components/ColorPalette';
import InfoPanel from './components/InfoPanel';
import { bookPages } from './data/bookContent';

function App() {
  const [selectedColor, setSelectedColor] = useState({ r: 231, g: 76, b: 60 });
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  const currentPage = bookPages[currentPageIndex];
  const hasNext = currentPageIndex < bookPages.length - 1;
  const hasPrev = currentPageIndex > 0;

  const hasImage = Boolean(currentPage.image);

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

  // Pages with images: sketch + palette + navigation only
  if (hasImage) {
    return (
      <div className="app">
        <main className="main-content sketch-page">
          <div className="sketch-layout">
            <div className="canvas-section">
              <Canvas 
                selectedColor={selectedColor} 
                imageSrc={currentPage.image} 
              />
            </div>
            <div className="palette-aside">
              <ColorPalette 
                selectedColor={selectedColor} 
                onColorSelect={setSelectedColor} 
              />
            </div>
          </div>
          <div className="sketch-nav">
            <InfoPanel
              title={currentPage.title}
              content={currentPage.content}
              type={currentPage.type}
              seriesTitle={currentPage.seriesTitle}
              authors={currentPage.authors}
              onNext={handleNext}
              onPrev={handlePrev}
              hasNext={hasNext}
              hasPrev={hasPrev}
              navOnly={true}
            />
          </div>
        </main>
      </div>
    );
  }

  // Pages without images (text-only, cover)
  return (
    <div className="app">
      <main className={`main-content text-page ${currentPage.type === 'cover' ? 'cover-page' : ''}`}>
        <div className="info-section wide">
          <InfoPanel 
            title={currentPage.title}
            content={currentPage.content}
            type={currentPage.type}
            seriesTitle={currentPage.seriesTitle}
            authors={currentPage.authors}
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
