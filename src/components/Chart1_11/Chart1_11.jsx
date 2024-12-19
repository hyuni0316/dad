import { useRef, useEffect, useState } from 'react';
import WordDisplay from './WordDisplay';

const Chart1_11 = () => {
  const containerRef = useRef(null);
  const [selectedCategories, setSelectedCategories] = useState([]);
  
  useEffect(() => {
    const observedElement = containerRef.current;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1
      }
    );

    if (observedElement) {
      observer.observe(observedElement);
    }

    return () => {
      if (observedElement) {
        observer.unobserve(observedElement);
      }
    };
  }, []);

  const bestWords = [
    ['Toss', 52],
    ['Bank', 45],
    ['App', 43],
    ['Account', 41],
    ['Information', 38],
    ['Money', 35],
    ['Investment', 33],
    ['Asset', 31],
    ['BankSalad', 29],
    ['Card', 28],
    ['Check', 27],
    ['Fund', 25],
    ['Insurance', 24],
    ['Amount', 23],
    ['Return', 21],
    ['Transfer', 20],
    ['Loan', 19],
    ['Management', 18],
    ['Securities', 17],
    ['Product', 16]
  ];

  const normalWords = [
    ['Toss', 48],
    ['Bank', 42],
    ['Money', 39],
    ['App', 37],
    ['Card', 34],
    ['Activity', 31],
    ['Account', 29],
    ['Information', 25],
    ['Experience', 23],
    ['Transfer', 20],
    ['Scholarship', 19],
    ['Finance', 18],
    ['Think', 17],
    ['Support', 16],
    ['Benefit', 15],
    ['Check', 14],
    ['Notification', 13],
    ['Profile', 12],
    ['Service', 11],
    ['Phone', 10]
  ];

  const worstWords = [
    ['Toss', 67],
    ['Bank', 55],
    ['App', 51],
    ['Just', 48],
    ['Now', 43],
    ['Point', 41],
    ['Very', 38],
    ['But', 36],
    ['Money', 34],
    ['Card', 32],
    ['Little', 31],
    ['So', 29],
    ['Think', 25],
    ['Many', 24],
    ['UI', 22],
    ['Advertisement', 20],
    ['Account', 19],
    ['Benefit', 18],
    ['Payment', 17],
    ['Use', 16]
  ];

  const handleCategoryClick = (color) => {
    setSelectedCategories(prev => {
      if (prev.includes(color)) {
        return prev.filter(c => c !== color);
      } else {
        return [...prev, color];
      }
    });
  };

  return (
    <div className="chart-container11" ref={containerRef}>
      <div className="word-category-legend" style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        maxWidth: '800px',
        margin: '0 auto 2rem auto',
        padding: '1rem',
        borderRadius: '8px'
      }}>
        <h3 style={{ marginBottom: '1rem', textAlign: 'center' }}>Top 20 Most Frequent Words</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', justifyContent: 'center'}}>
          <div 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '5px',
              cursor: 'pointer',
              opacity: selectedCategories.includes('#E84DA5') || selectedCategories.length === 0 ? 1 : 0.5,
            }}
            onClick={() => handleCategoryClick('#E84DA5')}
          >
            <span style={{ width: '12px', height: '12px', backgroundColor: '#E84DA5', display: 'inline-block', borderRadius: '50%' }}></span>
            <span>Service Related: Toss, App, BankSalad, etc.</span>
          </div>
          <div 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '5px',
              cursor: 'pointer',
              opacity: selectedCategories.includes('#A9AE22') || selectedCategories.length === 0 ? 1 : 0.5,
            }}
            onClick={() => handleCategoryClick('#A9AE22')}
          >
            <span style={{ width: '12px', height: '12px', backgroundColor: '#A9AE22', display: 'inline-block', borderRadius: '50%' }}></span>
            <span>Bank Related: Bank, Account, Transfer, Card, Insurance, Loan, etc.</span>
          </div>
          <div 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '5px',
              cursor: 'pointer',
              opacity: selectedCategories.includes('#2E94D8') || selectedCategories.length === 0 ? 1 : 0.5,
            }}
            onClick={() => handleCategoryClick('#2E94D8')}
          >
            <span style={{ width: '12px', height: '12px', backgroundColor: '#2E94D8', display: 'inline-block', borderRadius: '50%' }}></span>
            <span>Finance Related: Investment, Asset, Money, etc.</span>
          </div>
          <div 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '5px',
              cursor: 'pointer',
              opacity: selectedCategories.includes('#9A9EAB') || selectedCategories.length === 0 ? 1 : 0.5,
            }}
            onClick={() => handleCategoryClick('#9A9EAB')}
          >
            <span style={{ width: '12px', height: '12px', backgroundColor: '#9A9EAB', display: 'inline-block', borderRadius: '50%' }}></span>
            <span>Adverbs/Others: Just, Now, Very, etc.</span>
          </div>
        </div>
      </div>

      <div className="wordclouds-wrapper" style={{ 
        display: 'flex', 
        flexDirection: 'row', 
        gap: '150px',
        padding: '2rem',
        justifyContent: 'center'
      }}>
        <div className="wordcloud-section">
          <div className="wordcloud-title" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.5rem', fontWeight: '600', paddingBottom: '1rem', textAlign: 'center', width: '100%', margin: '1rem 0' }}>Best</div>
          <WordDisplay words={bestWords} selectedCategories={selectedCategories} />
        </div>
        <div className="wordcloud-section">
          <div className="wordcloud-title" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.5rem', fontWeight: '600', paddingBottom: '1rem', textAlign: 'center', width: '100%', margin: '1rem 0' }}>Normal</div>
          <WordDisplay words={normalWords} selectedCategories={selectedCategories} />
        </div>
        <div className="wordcloud-section">
          <div className="wordcloud-title" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.5rem', fontWeight: '600', paddingBottom: '1rem', textAlign: 'center', width: '100%', margin: '1rem 0' }}>Worst</div>
          <WordDisplay words={worstWords} selectedCategories={selectedCategories} />
        </div>
      </div>

      <div className="detail-text">
        <div className="insight-section">
          <strong>✔️ Characteristics of the Best Interviews</strong>
          <p>
            Best interviews are characterized by the frequent use of <span style={{ fontWeight: '600'}}>specialized and precise financial terminology, </span>
            including terms related to investments, funds, and securities, ensuring clarity and professionalism. 
            Additionally, unnecessary words or fillers are rarely present, maintaining a concise and focused dialogue.
          </p>
        </div>

        <div className="insight-section">
          <strong>✔️ Characteristics of the Normal Interviews:</strong>
          <p>
            Normal interviews incorporate more common financial terms and include vocabulary related to the 
            interviewee&apos;s background, such as student-specific references, 
            creating a casual yet contextually relevant tone.
          </p>
        </div>

        <div className="insight-section">
          <strong>✔️ Characteristics of the Worst Interviews</strong>
          <p>
          The worst interviews feature <span style={{ fontWeight: '600'}}>a high frequency of unnecessary adverbs and fillers</span>, such as 
          &ldquo;just,&rdquo; &ldquo;now,&rdquo; and &ldquo;really,&rdquo; which dilute the clarity and professionalism of the responses.
          </p>
        </div>

        <div className="key-insight">
          <strong>📌 Key Insights</strong>
          <p>
          The analysis of the top 20 most frequent words reveals key patterns across scenarios. 
          In the worst scenarios, excessive use of filler words and vague terms dominates, 
          contrasting with the concise and precise language seen in the best scenarios. 
          <span style={{ fontWeight: '600'}}> These findings indicate that a higher frequency of such unnecessary words could 
          serve as a strong indicator of a less effective interview scenario.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Chart1_11;