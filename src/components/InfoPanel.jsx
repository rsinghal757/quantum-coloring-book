import { useState } from 'react';

const BlochIcon = ({ direction = 'right' }) => {
  const isRight = direction === 'right';
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', padding: '4px' }}>
       <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.2"/>
       <ellipse cx="12" cy="12" rx="9" ry="3" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4"/>
       <path d="M12 3V21" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" strokeOpacity="0.4"/>
       
       {isRight ? (
         <g>
           <line x1="12" y1="12" x2="19" y2="12" stroke="currentColor" strokeWidth="1.5" />
           <path d="M16 9L19 12L16 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
         </g>
       ) : (
         <g>
           <line x1="12" y1="12" x2="5" y2="12" stroke="currentColor" strokeWidth="1.5" />
           <path d="M8 9L5 12L8 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
         </g>
       )}
       <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
    </svg>
  );
};

const AtomIcon = () => {
  return (
    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ padding: '4px' }}>
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1.2" transform="rotate(0 12 12)"/>
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1.2" transform="rotate(60 12 12)"/>
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1.2" transform="rotate(120 12 12)"/>
      <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
    </svg>
  );
};

const StartIcon = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.5"/>
      <path d="M10 8L15 12L10 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};


function InfoPanel({ title, content, type, seriesTitle, authors, onNext, onPrev, hasNext, hasPrev }) {
  const [atomColor, setAtomColor] = useState('var(--text-secondary)');
  
  const handleAtomHover = () => {
    const rainbowColors = [
      '#E74C3C', // Red
      '#E67E22', // Orange
      '#F1C40F', // Yellow
      '#2ECC71', // Green
      '#3498DB', // Blue
      '#9B59B6', // Purple
      '#E91E63'  // Pink
    ];
    const randomColor = rainbowColors[Math.floor(Math.random() * rainbowColors.length)];
    setAtomColor(randomColor);
  };

  const handleAtomLeave = () => {
    setAtomColor('var(--text-secondary)');
  };

  // Helper function to parse bold text in markdown style (**text**)
  const parseContent = (text) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index}>{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  const renderNavigation = () => (
    <div className="navigation">
      <div className="nav-arrows">
        <button 
          className="nav-button" 
          aria-label="Previous page"
          onClick={onPrev}
          disabled={!hasPrev}
          style={{ opacity: hasPrev ? 1 : 0.3, cursor: hasPrev ? 'pointer' : 'default' }}
        >
          <BlochIcon direction="left" />
        </button>
        <button 
          className="nav-button" 
          aria-label="Next page"
          onClick={onNext}
          disabled={!hasNext}
          style={{ opacity: hasNext ? 1 : 0.3, cursor: hasNext ? 'pointer' : 'default' }}
        >
          <BlochIcon direction="right" />
        </button>
      </div>
      <div 
        className="nav-icon-container" 
        onMouseEnter={handleAtomHover}
        onMouseLeave={handleAtomLeave}
        style={{ color: atomColor }}
      >
        <AtomIcon />
      </div>
    </div>
  );

  if (type === 'cover') {
    return (
      <div className="info-panel cover-layout">
        <div className="cover-content">
          <p className="series-title">{seriesTitle}</p>
          <h1 className="book-title">{title}</h1>
          <p className="authors">{authors}</p>
          {content && content.length > 0 && (
            <div className="cover-extra-content">
              {content.map((line, index) => (
                <p key={index}>{parseContent(line)}</p>
              ))}
            </div>
          )}
        </div>
        <button className="start-button" onClick={onNext}>
          <span className="start-text">Start Reading</span>
          <span className="start-icon"><StartIcon /></span>
        </button>
      </div>
    );
  }

  return (
    <div className="info-panel">
      <h1 className="title">{title}</h1>
      
      <div className="content-wrapper">
        <div className="content">
          {content.map((paragraph, index) => (
            <p key={index}>
              {parseContent(paragraph)}
            </p>
          ))}
        </div>
      </div>
      
      {renderNavigation()}
    </div>
  );
}


export default InfoPanel;
