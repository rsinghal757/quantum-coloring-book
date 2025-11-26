function InfoPanel() {
  return (
    <div className="info-panel">
      <h1 className="title">The Origins of Quantum Computing</h1>
      
      <div className="divider">
        <span className="divider-line"></span>
        <span className="divider-icon">⚛</span>
        <span className="divider-line"></span>
      </div>
      
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
        <button className="nav-button" aria-label="Previous page">
          ←
        </button>
        <button className="nav-button" aria-label="Next page">
          →
        </button>
      </div>
    </div>
  );
}

export default InfoPanel;

