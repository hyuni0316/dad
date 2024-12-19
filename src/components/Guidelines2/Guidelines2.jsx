import { useEffect, useRef } from 'react';
import './Guidelines2.css';

const Guidelines2 = () => {
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
      {/* First Card: Overview */}
      <div className="dataset-card-first-card fade-in" ref={(el) => (cardsRef.current[0] = el)}>
        <div className="dataset-title fade-in-text">Red Flags of a Bad Interview and Solutions</div>
        <div className="dataset-content">
          <div className="goal-section">
            <p className="goal-text fade-in-text">
              Understanding common interview pitfalls and their solutions is crucial for conducting effective interviews. 
              Here are key warning signs to watch for and how to address them proactively.
            </p>
          </div>
        </div>
      </div>

      {/* Second Card: Excessive Repetition */}
      <div className="dataset-card fade-in" ref={(el) => (cardsRef.current[1] = el)}>
        <div className="dataset-subtitle fade-in-text">1. Excessive Repetition</div>
        <div className="dataset-content">
          <div className="attribute-list">
            <p className="attribute-text fade-in-text">
              • <strong>Red Flag:</strong> Questions or answers being repeated more than three times during the interview, indicating poor preparation or attention.
            </p>
            <p className="attribute-text fade-in-text">
              • <strong>Solution:</strong> Create and follow a comprehensive question list before the interview, while actively tracking responses to maintain conversation flow without redundancy.
            </p>
          </div>
        </div>
      </div>

      {/* Third Card: Imbalanced Conversation */}
      <div className="dataset-card fade-in" ref={(el) => (cardsRef.current[2] = el)}>
        <div className="dataset-subtitle fade-in-text">2. Imbalanced Conversation</div>
        <div className="dataset-content">
          <div className="attribute-list">
            <p className="attribute-text fade-in-text">
              • <strong>Red Flag:</strong> Significant imbalance in conversation participation, where either the interviewer or interviewee monopolizes the discussion.
            </p>
            <p className="attribute-text fade-in-text">
              • <strong>Solution:</strong> Actively manage conversation flow through strategic intervention and thoughtful follow-up questions to ensure balanced participation.
            </p>
          </div>
        </div>
      </div>

      {/* Fourth Card: Disorganized Topic Transitions */}
      <div className="dataset-card fade-in" ref={(el) => (cardsRef.current[3] = el)}>
        <div className="dataset-subtitle fade-in-text">3. Disorganized Topic Transitions</div>
        <div className="dataset-content">
          <div className="attribute-list">
            <p className="attribute-text fade-in-text">
              • <strong>Red Flag:</strong> Poor connectivity between topics and jarring transitions that disrupt the natural flow of conversation.
            </p>
            <p className="attribute-text fade-in-text">
              • <strong>Solution:</strong> Develop a structured interview guide with clearly defined transition points while maintaining flexibility in conversation flow.
            </p>
          </div>
        </div>
      </div>

      {/* Fifth Card: Shallow Information Gathering */}
      <div className="dataset-card fade-in" ref={(el) => (cardsRef.current[4] = el)}>
        <div className="dataset-subtitle fade-in-text">4. Shallow Information Gathering</div>
        <div className="dataset-content">
          <div className="attribute-list">
            <p className="attribute-text fade-in-text">
              • <strong>Red Flag:</strong> Insufficient depth in responses, characterized by a lack of concrete examples and detailed explanations.
            </p>
            <p className="attribute-text fade-in-text">
              • <strong>Solution:</strong> Incorporate specific prompting questions such as "Can you provide an example?" or "How exactly did you handle that?" to elicit more detailed responses.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guidelines2;