// Chart1_12.jsx
import React, { useEffect, useRef } from 'react';
import './Chart1_12.css';

const Chart1_12 = () => {
  const containerRef = useRef(null);
  
  useEffect(() => {
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

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const interviews = [
    {
      type: 'Best',
      name: 'Lim',
      topics: [
        'Personal Background/Current Assets',
        'Asset Management (Cash-focused)',
        'Investment Activities (Funds, Wrap)',
        'Financial App Usage Patterns',
        'Bank/Securities App Comparison',
        'Banksalad Usage',
        'Loan/Insurance Management',
        'Real Estate/Vehicle Assets',
        'Information Gathering'
      ],
      className: 'best'
    },
    {
      type: 'Normal',
      name: 'Kim',
      topics: [
        'Personal Background/Education',
        'Income Sources/Scholarship',
        'Financial App Experience',
        'Toss Usage Reasons',
        'Banking App Usage',
        'Card Usage',
        'Investment Experience',
        'Information Gathering',
        'Future Plans',
        'Company-related Questions'
      ],
      className: 'normal'
    },
    {
      type: 'Worst',
      name: 'Seol',
      topics: [
        { text: 'Personal Introduction', isRepeated: false },
        { text: 'Financial Life (Break: Restroom)', isRepeated: false },
        { text: 'Toss App Usage', isRepeated: true },
        { text: 'Banking App Comparison', isRepeated: true },
        { text: 'Card Usage', isRepeated: false },
        { text: 'Back to Toss App', isRepeated: true },
        { text: 'Points/Benefits', isRepeated: true },
        { text: 'Banking Apps Revisited', isRepeated: true },
        { text: 'Information Gathering', isRepeated: false },
        { text: 'Toss Features Again', isRepeated: true },
        { text: 'Ad Blocking App', isRepeated: false },
        { text: 'Points Again', isRepeated: true },
        { text: 'Company Environment', isRepeated: false }
      ],
      className: 'worst'
    }
  ];

  return (
    <div className="chart-container12" ref={containerRef}>
      <h2 style={{ textAlign: 'center' }}>Topic Transition Flow</h2>
      
      <div className="flow-comparison">
        {interviews.map((interview, idx) => (
          <div key={idx} className="interview-flow">
            <h3>{interview.type} Interview </h3>
            <div className="flow-items">
              {interview.topics.map((topic, topicIdx) => (
                <React.Fragment key={topicIdx}>
                  <div 
                    className={`flow-item ${interview.className} ${topic.isRepeated ? 'repeated' : ''}`}
                    style={{ animationDelay: `${0.2 + (topicIdx * 0.2)}s` }}
                  >
                    {typeof topic === 'string' ? topic : topic.text}
                  </div>
                  {topicIdx < interview.topics.length - 1 && (
                    <div 
                      className="arrow"
                      style={{ animationDelay: `${0.3 + (topicIdx * 0.2)}s` }}
                    >
                      ↓
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="detail-text">
        <div className="insight-section">
          <strong>✔️ Transition Frequency Analysis</strong>
          <p>
            The analysis reveals distinct patterns across interview quality levels. 
            The Best interview demonstrates optimal efficiency with 9 transitions, each characterized by thorough topic exploration and meaningful depth. 
            The Normal interview shows acceptable progression with 10 transitions. 
            The Worst interview exhibits inefficient flow with 13 transitions, marked by unnecessary repetition and superficial coverage of topics.
          </p>
        </div>

        <div className="insight-section">
          <strong>✔️ Transition Pattern </strong>
          <p>
            Each interview type displays unique transitional characteristics.
            The Best interview maintains a coherent narrative with seamlessly connected topics, 
            demonstrating strategic planning and purposeful progression. 
            The worst interviews are marked by disjointed transitions, frequent backtracking,
             interruptions, and a lack of strategic direction in topic management.
          </p>
        </div>

        <div className="key-insight">
          <strong>📌 Key Insights:</strong>
          <p>
            Effective interviews demonstrate a clear focus on topic connectivity and depth, 
            while maintaining systematic progression between subjects. 
            This approach, combined with avoiding repetitive topic revisits, 
            significantly enhances interview efficiency and the overall quality of the conversation. 
            In other words, frequent backtracking to the same topic can serve as 
            a signal of a poorly conducted interview.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Chart1_12;