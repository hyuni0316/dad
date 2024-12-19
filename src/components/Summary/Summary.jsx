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
      <div className="dataset-card-first-card fade-in" ref={(el) => (cardsRef.current[0] = el)}>
        <div className="dataset-title fade-in-text">Summary of Findings</div>
        <div className="dataset-content">
          <div className="goal-section">
            <p className="goal-text fade-in-text">
              This project analyzed interview datasets to identify key factors distinguishing good and bad interviews. The findings emphasize the importance of concise speech, emotional exchanges, minimal repetition, and strategic topic management in improving interview quality and information-gathering efficiency.
            </p>
          </div>
        </div>
      </div>

      <div className="dataset-card fade-in" ref={(el) => (cardsRef.current[1] = el)}>
        <div className="dataset-subtitle-summary fade-in-text">1. Speech Patterns and Flow</div>
        <div className="dataset-content">
          <div className="attribute-list">
            <p className="attribute-text fade-in-text">
              • <strong>Balanced Speech Volume:</strong> The best interviews had the smallest speech volume gap between interviewer and interviewee.
            </p>
            <p className="attribute-text fade-in-text">
              • <strong>Dynamic Interaction:</strong> Despite shorter turns, the best interviews had the highest total number of dialogue turns (1,033), ensuring engagement.
            </p>
          </div>
        </div>

        <div className="dataset-subtitle-summary fade-in-text">2. Emotional Distribution</div>
        <div className="dataset-content">
          <div className="attribute-list">
            <p className="attribute-text fade-in-text">
              • <strong>Diverse Emotions:</strong> The best interviews displayed the widest range of emotions, enhancing the conversational experience.
            </p>
            <p className="attribute-text fade-in-text">
              • <strong>Interviewer and Interviewee:</strong> Interviewers often expressed surprise, while interviewees exhibited broader emotions, including joy, sadness, and fear.
            </p>
          </div>
        </div>

        <div className="dataset-subtitle-summary fade-in-text">3. Skills and Response Patterns</div>
        <div className="dataset-content">
          <div className="attribute-list">
            <p className="attribute-text fade-in-text">
              • <strong>Interviewer Skills:</strong> Specific questions and follow-up questions were higher in the best interviews.
            </p>
            <p className="attribute-text fade-in-text">
              • <strong>Interviewee Responses:</strong> Passive responses and information-providing responses accounted for the largest proportions of all responses.
            </p>
          </div>
        </div>

        <div className="dataset-subtitle-summary fade-in-text">4. Frequent Words</div>
        <div className="dataset-content">
          <div className="attribute-list">
            <p className="attribute-text fade-in-text">
              • <strong>Precise Language:</strong> Best interviews used specialized terminology, maintaining clarity and professionalism.
            </p>
            <p className="attribute-text fade-in-text">
              • <strong>Filler Words:</strong> Worst interviews were dominated by unnecessary words, reducing quality.
            </p>
          </div>
        </div>

        <div className="dataset-subtitle-summary fade-in-text">5. Topic Switching</div>
        <div className="dataset-content">
          <div className="attribute-list">
            <p className="attribute-text fade-in-text">
              • <strong>Efficient Transitions:</strong> Best interviews explored topics deeply with only 9 transitions, ensuring coherence.
            </p>
            <p className="attribute-text fade-in-text">
              • <strong>Disjointed Flow:</strong> Worst interviews had 13 transitions, often revisiting the same topics repetitively.
            </p>
          </div>
        </div>

        <div className="dataset-subtitle-summary fade-in-text">6. Repetition</div>
        <div className="dataset-content">
          <div className="attribute-list">
            <p className="attribute-text fade-in-text">
              • <strong>Minimal Repetition:</strong> Best interviews had only 6 question repetitions and 9 response repetitions, optimizing efficiency.
            </p>
            <p className="attribute-text fade-in-text">
              • <strong>Excessive Repetition:</strong> Worst interviews showed 21 question repetitions and 45 response repetitions, reducing effectiveness.
            </p>
          </div>
        </div>

        <div className="dataset-subtitle-summary fade-in-text">7. Valuable Information</div>
        <div className="dataset-content">
          <div className="attribute-list">
            <p className="attribute-text fade-in-text">
              • <strong>Comprehensive Topics:</strong> Best interviews covered advanced topics like investment strategies and app UX, gathering 37 meaningful pieces of information.
            </p>
            <p className="attribute-text fade-in-text">
              • <strong>Limited Depth:</strong> Worst interviews yielded only 13 pieces of information, focusing on basic topics with little depth.
            </p>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Summary;
