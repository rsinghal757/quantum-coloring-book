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

function InfoPanel() {
  return (
    <div className="info-panel">
      <h1 className="title">The Origins of Quantum Computing</h1>
      
      <div className="content">
        <p>
          Who came up with the idea of quantum computing? Well, it's difficult to pinpoint one single 
          person. In 1980, Russian mathematician Yuri Manin was the first to suggest that a computer 
          could run on quantum behavior instead of classical behavior, in a mathematics book about 
          computable functions. The following year, American physicist Richard Feynman 
          independently suggested a similar idea, stating in a famous lecture: "If you want to make 
          a simulation of nature, you'd better make it quantum mechanical, and by golly it's a wonderful 
          problem, because it doesn't look so easy." These were the first instances of this idea of 
          <strong> quantum simulation</strong>, which paved the way for quantum computing as we know it today.
        </p>
      </div>
      
      <div className="navigation">
        <div className="nav-arrows">
          <button className="nav-button" aria-label="Previous page">
            <BlochIcon direction="left" />
          </button>
          <button className="nav-button" aria-label="Next page">
            <BlochIcon direction="right" />
          </button>
        </div>
        <div className="nav-icon-container">
          <AtomIcon />
        </div>
      </div>
    </div>
  );
}

export default InfoPanel;

