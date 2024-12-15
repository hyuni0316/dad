import { useEffect, useRef } from 'react';
import './Summary.css';

const Summary = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const cards = cardsRef.current;
    cards.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cards.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <div className="dataset-description">
      {/* 첫 번째 카드: 개요 */}
      <div className="dataset-card-first-card fade-in" ref={(el) => (cardsRef.current[0] = el)}>
        <div className="dataset-title fade-in-text">Summary of Findings</div>
        <div className="dataset-content">
          <div className="goal-section">
            <p className="goal-text fade-in-text">
              The comparative analysis of interview scenarios (Best, Normal, Worst) reveals key patterns in question strategies, interviewer roles, 
              and response quality. The findings highlight how structured approaches and effective questioning can significantly improve interview outcomes.
            </p>
          </div>
        </div>
      </div>

      {/* 두 번째 카드: Interview Flow */}
      <div className="dataset-card fade-in" ref={(el) => (cardsRef.current[1] = el)}>
        <div className="dataset-subtitle fade-in-text">1. Interview Flow and Questioning Strategies</div>
        <div className="dataset-content">
          <div className="attribute-list">
            <p className="attribute-text fade-in-text">
              • <strong>Best:</strong> Logical, step-by-step questioning led to detailed insights and high-quality data collection.
            </p>
            <p className="attribute-text fade-in-text">
              • <strong>Normal:</strong> Flexible, example-driven questions supported moderate engagement and balanced responses.
            </p>
            <p className="attribute-text fade-in-text">
              • <strong>Worst:</strong> Lack of question coherence and frequent flow changes resulted in surface-level data.
            </p>
          </div>
        </div>
      </div>

      {/* 세 번째 카드: Interviewer's Role */}
      <div className="dataset-card fade-in" ref={(el) => (cardsRef.current[2] = el)}>
        <div className="dataset-subtitle fade-in-text">2. Interviewer's Role and Conversation Management</div>
        <div className="dataset-content">
          <div className="attribute-list">
            <p className="attribute-text fade-in-text">
              • <strong>Best:</strong> Interviewer maintained control with logical direction and adapted to responses flexibly.
            </p>
            <p className="attribute-text fade-in-text">
              • <strong>Normal:</strong> Active interaction and question adjustments promoted balanced dialogue.
            </p>
            <p className="attribute-text fade-in-text">
              • <strong>Worst:</strong> Over-reliance on short answers weakened interviewer's control and consistency.
            </p>
          </div>
        </div>
      </div>

      {/* 네 번째 카드: Data Collection */}
      <div className="dataset-card fade-in" ref={(el) => (cardsRef.current[3] = el)}>
        <div className="dataset-subtitle fade-in-text">3. Data Collection and Utilization</div>
        <div className="dataset-content">
          <div className="attribute-list">
            <p className="attribute-text fade-in-text">
              • <strong>Best:</strong> Detailed data with actionable insights and high utility for service design.
            </p>
            <p className="attribute-text fade-in-text">
              • <strong>Normal:</strong> Rich real-life examples allowed moderate levels of actionable findings.
            </p>
            <p className="attribute-text fade-in-text">
              • <strong>Worst:</strong> Limited depth and breadth in responses reduced the utility of collected data.
            </p>
          </div>
        </div>
      </div>

      {/* 다섯 번째 카드: Key Differences */}
      <div className="dataset-card fade-in" ref={(el) => (cardsRef.current[4] = el)}>
        <div className="dataset-subtitle fade-in-text">📌 Key Differences</div>
        <div className="dataset-content">
          <div className="attribute-list">
            <p className="attribute-text fade-in-text">
              • <strong>Best:</strong> Most structured and logical approach with high-quality, actionable insights.
            </p>
            <p className="attribute-text fade-in-text">
              • <strong>Normal:</strong> Balanced flow with moderate depth in insights and actionable data.
            </p>
            <p className="attribute-text fade-in-text">
              • <strong>Worst:</strong> Weak structure and limited insights led to lower utility and engagement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary; 