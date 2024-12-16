import React from 'react';
import './Chart1_12.css';

const Chart1_12 = () => {
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
        'Information Gathering Methods'
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
        'Personal Introduction',
        'Financial Life (Break: Restroom)',
        'Toss App Usage',
        'Banking App Comparison',
        'Card Usage',
        'Back to Toss App',
        'Points/Benefits',
        'Banking Apps Revisited',
        'Information Gathering',
        'Toss Features Again',
        'Ad Blocking App',
        'Points Again',
        'Company Environment'
      ],
      className: 'worst'
    }
  ];

  return (
    <div className="chart-container">
      <h2>Topic Transition Flow Analysis</h2>
      
      <div className="flow-comparison">
        {interviews.map((interview, idx) => (
          <div key={idx} className="interview-flow">
            <h3>{interview.type} Interview </h3>
            <div className="flow-items">
              {interview.topics.map((topic, topicIdx) => (
                <React.Fragment key={topicIdx}>
                  <div className={`flow-item ${interview.className}`}>
                    {topic}
                  </div>
                  {topicIdx < interview.topics.length - 1 && (
                    <div className="arrow">↓</div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="detail-text">
        <div className="insight-section">
          <strong>✔️ Transition Frequency Analysis:</strong>
          <p>
            • Best: 9 transitions showing optimal flow with in-depth topic exploration<br/>
            • Normal: 10 transitions with adequate frequency but lacking depth<br/>
            • Worst: 13 transitions with frequent repetition showing inefficient flow
          </p>
        </div>

        <div className="insight-section">
          <strong>✔️ Transition Pattern Characteristics:</strong>
          <p>
            • Best: Logical sequence with clear connections between topics<br/>
            • Normal: Generally sequential with occasional skip patterns<br/>
            • Worst: Frequent topic repetition and sudden transitions lacking consistency
          </p>
        </div>

        <div className="key-insight">
          <strong>📌 Key Insights:</strong>
          <p>
            • Effective interviews prioritize topic connectivity and depth over transition frequency<br/>
            • Systematic topic transitions are crucial in determining interview quality<br/>
            • Repetitive topic revisits significantly reduce interview efficiency
          </p>
        </div>
      </div>
    </div>
  );
};

export default Chart1_12; 