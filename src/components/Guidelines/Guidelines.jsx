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
      {/* 첫 번째 카드: 개요 */}
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

      {/* 두 번째 카드: Interview Design */}
      <div className="dataset-card fade-in" ref={(el) => (cardsRef.current[1] = el)}>
        <div className="dataset-subtitle fade-in-text">1. Interview Design</div>
        <div className="dataset-content">
          <div className="attribute-list">
            <p className="attribute-text fade-in-text">
              • <strong>Define Clear Objectives:</strong> Focus on extracting specific information such as user experiences, pain points, or improvement ideas.
            </p>
            <p className="attribute-text fade-in-text">
              • <strong>Structured Flow:</strong> Divide the interview into an introduction (ice-breaking), main discussion (key scenarios), and conclusion.
            </p>
            <p className="attribute-text fade-in-text">
              • <strong>Question Organization:</strong> Start with general questions, add follow-ups for depth, and incorporate scenario-specific questions.
            </p>
          </div>
        </div>
      </div>

      {/* 세 번째 카드: Interviewer Role */}
      <div className="dataset-card fade-in" ref={(el) => (cardsRef.current[2] = el)}>
        <div className="dataset-subtitle fade-in-text">2. Interviewer Role</div>
        <div className="dataset-content">
          <div className="attribute-list">
            <p className="attribute-text fade-in-text">
              • <strong>Active Listening:</strong> Summarize and empathize with responses to encourage detailed answers.
            </p>
            <p className="attribute-text fade-in-text">
              • <strong>Focus on Clarity:</strong> Guide the conversation to avoid topic divergence while allowing flexibility.
            </p>
            <p className="attribute-text fade-in-text">
              • <strong>Engage with Follow-ups:</strong> Use questions like &quot;Why?&quot; or &quot;Can you elaborate?&quot; to explore deeper insights.
            </p>
          </div>
        </div>
      </div>

      {/* 네 번째 카드: Balancing Flexibility */}
      <div className="dataset-card fade-in" ref={(el) => (cardsRef.current[3] = el)}>
        <div className="dataset-subtitle fade-in-text">3. Balancing Flexibility and Depth</div>
        <div className="dataset-content">
          <div className="attribute-list">
            <p className="attribute-text fade-in-text">
              • <strong>Adapt to Responses:</strong> Build questions based on the interviewee&apos;s answers to expand the discussion naturally.
            </p>
            <p className="attribute-text fade-in-text">
              • <strong>Request Specific Examples:</strong> Encourage interviewees to provide real-life use cases and detailed scenarios.
            </p>
          </div>
        </div>
      </div>

      {/* 다섯 번째 카드: Time Management */}
      <div className="dataset-card fade-in" ref={(el) => (cardsRef.current[4] = el)}>
        <div className="dataset-subtitle fade-in-text">4. Effective Time Management</div>
        <div className="dataset-content">
          <div className="attribute-list">
            <p className="attribute-text fade-in-text">
              • <strong>Prioritize Key Questions:</strong> Cover critical topics early and allocate time for additional exploration.
            </p>
            <p className="attribute-text fade-in-text">
              • <strong>Avoid Redundancy:</strong> Skip repetitive questions and summarize when necessary to maintain flow.
            </p>
          </div>
        </div>
      </div>

      {/* 여섯 번째 카드: Key Takeaways */}
      <div className="dataset-card fade-in" ref={(el) => (cardsRef.current[5] = el)}>
        <div className="dataset-subtitle fade-in-text">📌 Key Takeaways</div>
        <div className="dataset-content">
          <div className="attribute-list">
            <p className="attribute-text fade-in-text">
              • Structured yet flexible interview design ensures clarity and depth in data collection.
            </p>
            <p className="attribute-text fade-in-text">
              • Active listening and tailored follow-up questions are critical for detailed insights.
            </p>
            <p className="attribute-text fade-in-text">
              • Efficient time management and precise questioning enhance data quality and usability.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guidelines; 