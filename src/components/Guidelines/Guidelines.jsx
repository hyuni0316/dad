import { useEffect, useRef } from 'react';
import './Guidelines.css';

const Guidelines = () => {
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
        <div className="dataset-title fade-in-text">Guidelines for a Successful Interview</div>
        <div className="dataset-content">
          <div className="goal-section">
            <p className="goal-text fade-in-text">
              The following strategies outline best practices for conducting effective interviews to gather actionable insights 
              while maintaining a structured and comfortable environment for participants.
            </p>
          </div>
        </div>
      </div>

      {/* Second Card: Optimizing Conversation Patterns */}
      <div className="dataset-card fade-in" ref={(el) => (cardsRef.current[1] = el)}>
        <div className="dataset-subtitle fade-in-text">1. Optimizing Conversation Patterns</div>
        <div className="dataset-content">
          <div className="attribute-list">
            <p className="attribute-text fade-in-text">
              • <strong>Concise Communication:</strong> Maintain brief and clear exchanges, avoiding prolonged monologues to keep the conversation dynamic and engaging.
            </p>
            <p className="attribute-text fade-in-text">
              • <strong>Professional Language:</strong> Utilize industry-appropriate terminology and precise expressions while minimizing unnecessary filler words.
            </p>
            <p className="attribute-text fade-in-text">
              • <strong>Balanced Dialogue:</strong> Ensure equal participation between interviewer and interviewee to create meaningful discourse.
            </p>
          </div>
        </div>
      </div>

      {/* Third Card: Question Strategies */}
      <div className="dataset-card fade-in" ref={(el) => (cardsRef.current[2] = el)}>
        <div className="dataset-subtitle fade-in-text">2. Question Strategies</div>
        <div className="dataset-content">
          <div className="attribute-list">
            <p className="attribute-text fade-in-text">
              • <strong>Specific Initial Questions:</strong> Start with focused inquiries to establish clear direction and understanding of the topic.
            </p>
            <p className="attribute-text fade-in-text">
              • <strong>Strategic Follow-ups:</strong> Develop subsequent questions based on responses to explore topics in greater depth.
            </p>
            <p className="attribute-text fade-in-text">
              • <strong>Question Management:</strong> Avoid redundant questioning while ensuring comprehensive coverage of each topic.
            </p>
            <p className="attribute-text fade-in-text">
              • <strong>Contextual Depth:</strong> Prepare well-researched questions that encourage detailed and insightful responses.
            </p>
          </div>
        </div>
      </div>

      {/* Fourth Card: Topic Management */}
      <div className="dataset-card fade-in" ref={(el) => (cardsRef.current[3] = el)}>
        <div className="dataset-subtitle fade-in-text">3. Topic Management</div>
        <div className="dataset-content">
          <div className="attribute-list">
            <p className="attribute-text fade-in-text">
              • <strong>Structured Transitions:</strong> Execute clear and logical progression between different topics. Topic transitions are recommended to be less than 10 times.
            </p>
            <p className="attribute-text fade-in-text">
              • <strong>Topic Depth:</strong> Ensure thorough exploration of each topic with minimum 4-5 exchange turns.
            </p>
            <p className="attribute-text fade-in-text">
              • <strong>Content Efficiency:</strong> Minimize topic repetition while maintaining comprehensive coverage.
            </p>
          </div>
        </div>
      </div>

      {/* Fifth Card: Emotional Engagement */}
      <div className="dataset-card fade-in" ref={(el) => (cardsRef.current[4] = el)}>
        <div className="dataset-subtitle fade-in-text">4. Emotional Engagement</div>
        <div className="dataset-content">
          <div className="attribute-list">
            <p className="attribute-text fade-in-text">
              • <strong>Empathetic Response:</strong> Demonstrate appropriate understanding and support throughout the interview.
            </p>
            <p className="attribute-text fade-in-text">
              • <strong>Emotional Awareness:</strong> Remain attentive to and acknowledge the interviewee&apos;s emotional state changes.
            </p>
            <p className="attribute-text fade-in-text">
              • <strong>Atmosphere Creation:</strong> Foster a balanced environment that maintains professionalism while encouraging open dialogue.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guidelines;