import { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { categorizeWord } from './utils';

const WordDisplay = ({ words, selectedCategories }) => {
  const [tooltip, setTooltip] = useState({ show: false, text: '', word: '', x: 0, y: 0 });
  const wordRefs = useRef({});

  const handleMouseEnter = (word, count) => {
    const wordEl = wordRefs.current[word];
    if (wordEl) {
      const rect = wordEl.getBoundingClientRect();
      setTooltip({
        show: true,
        text: `${count}`,
        word: word,
        x: rect.left + (rect.width / 2),
        y: rect.top
      });
    }
  };

  const handleMouseLeave = () => {
    setTooltip({ show: false, text: '', word: '', x: 0, y: 0 });
  };

  return (
    <div className="wordcloud-section">
      <div className="wordcloud" style={{ 
        display: 'grid',
        gridTemplateColumns: '1fr',
        gridTemplateRows: 'repeat(20, 1fr)',
      }}>
        {words.map(([word, count], index) => {
          const wordCategory = categorizeWord(word);
          const fontSize = Math.max(12, Math.min(36, count * 0.8));
          const shouldDisplay = selectedCategories.length === 0 || selectedCategories.includes(wordCategory);
          
          return (
            <span
              key={index}
              ref={el => wordRefs.current[word] = el}
              style={{
                fontSize: `${fontSize}px`,
                color: categorizeWord(word),
                display: shouldDisplay ? 'flex' : 'none',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'default',
                position: 'relative',
                padding: '1rem',
                height: '30px',
                opacity: shouldDisplay ? 1 : 0.3,
                transition: 'opacity 0.3s ease',
              }}
              onMouseEnter={() => handleMouseEnter(word, count)}
              onMouseLeave={handleMouseLeave}
            >
              {word}
              {tooltip.show && tooltip.word === word && (
                <div 
                  className="tooltip show"
                  style={{
                    position: 'absolute',
                    bottom: '71%',
                    transform: 'translateX(-0%)',
                    marginBottom: '0px',
                    textAlign: 'center',
                    fontSize: '20px'
                  }}
                >
                  {tooltip.text}
                </div>
              )}
            </span>
          );
        })}
      </div>
    </div>
  );
};

WordDisplay.propTypes = {
  words: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))).isRequired,
  selectedCategories: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default WordDisplay; 