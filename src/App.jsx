import { useState } from 'react';
import Canvas from './components/Canvas';
import ColorPalette from './components/ColorPalette';
import InfoPanel from './components/InfoPanel';
import { bookPages } from './data/bookContent';

const ReadIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const PaintIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8.5 10a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" fill="currentColor"/>
    <path d="M21 15l-5-5L5 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

function App() {
  const [selectedColor, setSelectedColor] = useState({ r: 231, g: 76, b: 60 });
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [viewMode, setViewMode] = useState('sketch'); // 'sketch' or 'text'

  const currentPage = bookPages[currentPageIndex];
  const hasNext = currentPageIndex < bookPages.length - 1;
  const hasPrev = currentPageIndex > 0;

  const hasImage = Boolean(currentPage.image);

  const handleNext = () => {
    if (hasNext) {
      setCurrentPageIndex(prev => prev + 1);
      setViewMode('sketch');
    }
  };

  const handlePrev = () => {
    if (hasPrev) {
      setCurrentPageIndex(prev => prev - 1);
      setViewMode('sketch');
    }
  };

  const toggleView = () => {
    setViewMode(prev => prev === 'sketch' ? 'text' : 'sketch');
  };

  // Pages with images: separate sketch and text views
  if (hasImage) {
    return (
      <div className="app">
        {viewMode === 'sketch' ? (
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
              <button 
                className="view-toggle-button" 
                onClick={toggleView}
                aria-label="Switch to reading view"
              >
                <ReadIcon />
                <span>Read</span>
              </button>
            </div>
          </main>
        ) : (
          <main className="main-content text-page">
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
            <div className="text-page-nav">
              <button 
                className="view-toggle-button" 
                onClick={toggleView}
                aria-label="Switch to coloring view"
              >
                <PaintIcon />
                <span>Color</span>
              </button>
            </div>
          </main>
        )}
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
