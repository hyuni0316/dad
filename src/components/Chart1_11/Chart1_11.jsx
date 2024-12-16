import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const categorizeWord = (word) => {
  const serviceWords = ['토스', '앱/어플', '뱅크샐러드', '서비스', 'UI'];
  const bankWords = ['은행', '계좌', '이체', '계정'];
  const financeWords = ['투자', '자산', '펀드', '수익', '증권', '장학금', '금융', '지원', '혜택', '포인트', '결제'];
  const cardWords = ['카드', '보험', '대출', '상품', '광고', '활동'];
  const infoWords = ['정보', '확인', '관리', '알림', '휴대폰', '경험'];
  const moneyWords = ['돈', '금액'];
  const adverbWords = ['그냥', '이제', '되게', '근데', '좀', '그래서', '많이', '쓰다', '생각'];

  if (serviceWords.includes(word)) return '#FF6B6B';  // 빨간색
  if (bankWords.includes(word)) return '#4ECDC4';     // 청록색
  if (financeWords.includes(word)) return '#45B7D1';  // 파란색
  if (cardWords.includes(word)) return '#96CEB4';     // 초록색
  if (infoWords.includes(word)) return '#D87BCF';     // 노란색
  if (moneyWords.includes(word)) return '#D4A5A5';    // 분홍색
  if (adverbWords.includes(word)) return '#9A9EAB';   // 회색
  return '#000000';  // 기본 검정색
}

const WordDisplay = ({ words, title }) => {
  const [tooltip, setTooltip] = useState({ show: false, text: '', x: 0, y: 0 });

  const handleMouseEnter = (e, word, count) => {
    const rect = e.target.getBoundingClientRect();
    setTooltip({
      show: true,
      text: `${word}: ${count}회`,
      x: rect.left + (rect.width / 2),
      y: rect.top
    });
  };

  const handleMouseLeave = () => {
    setTooltip({ show: false, text: '', x: 0, y: 0 });
  };

  const handleMouseMove = (e) => {
    if (tooltip.show) {
      const rect = e.target.getBoundingClientRect();
      setTooltip(prev => ({
        ...prev,
        x: rect.left + (rect.width / 2),
        y: rect.top + 150
      }));
    }
  };

  return (
    <div className="wordcloud-section">
      <h3>{title}</h3>
      <div className="wordcloud">
        {words.map(([word, count], index) => {
          const fontSize = Math.max(12, Math.min(48, count * 0.8));
          return (
            <span
              key={index}
              style={{
                fontSize: `${fontSize}px`,
                color: categorizeWord(word),
                margin: '5px',
                display: 'inline-block',
                transition: 'all 0.3s ease',
                cursor: 'default'
              }}
              onMouseEnter={(e) => handleMouseEnter(e, word, count)}
              onMouseLeave={handleMouseLeave}
              onMouseMove={handleMouseMove}
            >
              {word}
            </span>
          );
        })}
      </div>
      {tooltip.show && (
        <div 
          className={`tooltip ${tooltip.show ? 'show' : ''}`}
          style={{
            left: `${tooltip.x}px`,
            top: `${tooltip.y}px`,
            transform: 'translate(-50%, -100%)',
            position: 'fixed',
            pointerEvents: 'none'
          }}
        >
          {tooltip.text}
        </div>
      )}
    </div>
  );
};

WordDisplay.propTypes = {
  words: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]))).isRequired,
  title: PropTypes.string.isRequired
};

const Chart1_11 = () => {
  const bestWords = [
    ['토스', 52],
    ['은행', 45],
    ['앱/어플', 43],
    ['계좌', 41],
    ['정보', 38],
    ['돈', 35],
    ['투자', 33],
    ['자산', 31],
    ['뱅크샐러드', 29],
    ['카드', 28],
    ['확인', 27],
    ['펀드', 25],
    ['보험', 24],
    ['금액', 23],
    ['수익', 21],
    ['이체', 20],
    ['대출', 19],
    ['관리', 18],
    ['증권', 17],
    ['상품', 16]
  ];

  const normalWords = [
    ['토스', 48],
    ['은행', 42],
    ['돈', 39],
    ['앱/어플', 37],
    ['카드', 34],
    ['활동', 31],
    ['계좌', 29],
    ['정보', 25],
    ['경험', 23],
    ['이체', 20],
    ['장학금', 19],
    ['금융', 18],
    ['생각', 17],
    ['지원', 16],
    ['혜택', 15],
    ['확인', 14],
    ['알림', 13],
    ['계정', 12],
    ['서비스', 11],
    ['휴대폰', 10]
  ];

  const worstWords = [
    ['토스', 67],
    ['은행', 55],
    ['앱/어플', 51],
    ['그냥', 48],
    ['이제', 43],
    ['포인트', 41],
    ['되게', 38],
    ['근데', 36],
    ['돈', 34],
    ['카드', 32],
    ['좀', 31],
    ['그래서', 29],
    ['생각', 25],
    ['많이', 24],
    ['UI', 22],
    ['광고', 20],
    ['계좌', 19],
    ['혜택', 18],
    ['결제', 17],
    ['쓰다', 16]
  ];

  return (
    <div>
      <div className="chart-container">
        <WordDisplay words={bestWords} title="Best" />
        <WordDisplay words={normalWords} title="Normal" />
        <WordDisplay words={worstWords} title="Worst" />
      </div>

      <div className="detail-text">
        <div className="insight-section">
          <strong>✔️ Characteristics of the Best Interviews:</strong>
          <p>
            Best interviews contain a wealth of specific details and actionable insights. 
            Responses often include numerical data, real-world experiences, and professionally structured content. 
            They provide detailed, replicable explanations and exhibit a high level of information value.</p>
        </div>

        <div className="insight-section">
          <strong>✔️ Characteristics of the Normal Interviews:</strong>
          <p>Normal interviews offer practical information at a general level. 
            Responses reflect typical financial activities, basic app usage experiences, and insights from a college student's perspective. 
            The information value is moderate, providing useful but not highly detailed insights.</p>
        </div>

        <div className="insight-section">
          <strong>✔️ Characteristics of the Worst Interviews:</strong>
          <p>Worst interviews are dominated by superficial descriptions with very limited specific information. 
            Responses lack depth and focus more on subjective opinions rather than practical details. 
            The information value is low, offering minimal actionable or insightful content.</p>
        </div>

        <div className="key-insight">
          <strong>📌 Key Insights:</strong>
          <p>The quality of information, particularly specificity, practicality, and actionable details, 
            appears to be a major determinant of interview ratings. Best interviews excel in these aspects, 
            while normal and worst interviews show diminishing levels of information richness.</p>
        </div>
      </div>


    </div>
    
  );
};

export default Chart1_11;