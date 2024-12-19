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
      {/* Overview Card */}
      <div className="dataset-card-first-card fade-in" ref={(el) => (cardsRef.current[0] = el)}>
        <div className="dataset-title fade-in-text">Red Flags of a Bad Interview and Practical Solutions</div>
        <div className="dataset-content">
          <div className="goal-section">
            <p className="goal-text fade-in-text">
              A guide to identifying common interview issues and implementing immediate, practical solutions to maintain effective conversations.
            </p>
          </div>
        </div>
      </div>

      {/* Excessive Repetition */}
      <div className="dataset-card fade-in" ref={(el) => (cardsRef.current[1] = el)}>
        <div className="dataset-subtitle fade-in-text">1. Excessive Repetition</div>
        <div className="dataset-content">
          <div className="attribute-list">
            <p className="attribute-text fade-in-text">
              <strong>Red Flag:</strong> Questions or answers being repeated more than three times during the interview.
            </p>
            <p className="attribute-text fade-in-text">
              <strong>Practical Solutions</strong>
              <ul className="solutions-list">
                <li className="solution-item">Acknowledge directly but tactfully: &ldquo;I believe we covered this earlier, let me rephrase to better understand...&rdquo;</li>
                <li className="solution-item">Summarize and redirect: &ldquo;From what you&apos;ve shared about X, let&apos;s explore how this connects to Y...&rdquo;</li>
                <li className="solution-item">Change perspective: &ldquo;Let&apos;s look at this from a different angle. Could you share a specific example of...&rdquo;</li>
                <li className="solution-item">Use the STAR method to redirect: &ldquo;Could you walk me through a particular Situation where this happened?&rdquo; The STAR method (Situation, Task, Action, Result) is a structured interview technique 
                  that helps obtain specific examples of past behavior by asking the interviewee to describe a Situation,
                  the Task required, the Action taken, and the Result achieved.</li>
              </ul>
            </p>
          </div>
        </div>
      </div>

      {/* Imbalanced Conversation */}
      <div className="dataset-card fade-in" ref={(el) => (cardsRef.current[2] = el)}>
        <div className="dataset-subtitle fade-in-text">2. Imbalanced Conversation</div>
        <div className="dataset-content">
          <div className="attribute-list">
            <p className="attribute-text fade-in-text">
              <strong>Red Flag:</strong> Significant imbalance where either party dominates or barely participates.
            </p>
            <p className="attribute-text fade-in-text">
              <strong>Practical Solutions</strong>
              <ul className="solutions-list">
                <li className="solution-item">For overly talkative interviewees:
                  <ul className="sub-list">
                    <li className="solution-item">Use natural pauses to redirect: &ldquo;That&apos;s an interesting point about X. Let&apos;s explore...&rdquo;</li>
                    <li className="solution-item">Politely interject during pauses: &ldquo;You&apos;ve shared valuable insights. Now, let&apos;s focus on...&rdquo;</li>
                  </ul>
                </li>
                <li className="solution-item">For quiet interviewees:
                  <ul className="sub-list">
                    <li className="solution-item">Start with easier, concrete questions: &ldquo;Could you tell me about your typical day at work?&rdquo;</li>
                    <li className="solution-item">Use silence strategically (5-7 seconds) after questions</li>
                    <li className="solution-item">Break complex questions into smaller parts</li>
                    <li className="solution-item">Provide gentle encouragement: &ldquo;Take your time. I&apos;m interested in hearing your perspective on...&rdquo;</li>
                  </ul>
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>

      {/* Disorganized Topic Transitions */}
      <div className="dataset-card fade-in" ref={(el) => (cardsRef.current[3] = el)}>
        <div className="dataset-subtitle fade-in-text">3. Disorganized Topic Transitions</div>
        <div className="dataset-content">
          <div className="attribute-list">
            <p className="attribute-text fade-in-text">
              <strong>Red Flag:</strong> Abrupt topic changes and disconnected conversation flow.
            </p>
            <p className="attribute-text fade-in-text">
              <strong>Practical Solutions</strong>
              <ul className="solutions-list">
                <li className="solution-item">Bridge topics naturally: &ldquo;Your point about X connects well with our next topic about Y...&rdquo;</li>
                <li className="solution-item">Use quick summaries before transitions: &ldquo;We&apos;ve covered the challenges. Now, let&apos;s explore the solutions...&rdquo;</li>
                <li className="solution-item">Reference previous points: &ldquo;Earlier you mentioned X. How does that relate to...&rdquo;</li>
                <li className="solution-item">When topics change abruptly, reconnect: &ldquo;That&apos;s interesting. Let&apos;s finish our discussion about X first, then explore that further.&rdquo;</li>
              </ul>
            </p>
          </div>
        </div>
      </div>

      {/* Shallow Information */}
      <div className="dataset-card fade-in" ref={(el) => (cardsRef.current[4] = el)}>
        <div className="dataset-subtitle fade-in-text">4. Shallow Information Gathering</div>
        <div className="dataset-content">
          <div className="attribute-list">
            <p className="attribute-text fade-in-text">
              <strong>Red Flag:</strong> Receiving brief, surface-level responses lacking detail.
            </p>
            <p className="attribute-text fade-in-text">
              <strong>Practical Solutions</strong>
              <ul className="solutions-list">
                <li className="solution-item">Use specific follow-ups: &ldquo;Could you walk me through the steps you took?&rdquo;</li>
                <li className="solution-item">Ask about impact: &ldquo;How did that decision affect the team/project?&rdquo;</li>
                <li className="solution-item">Use contrast questions: &ldquo;What made this approach more effective than others?&rdquo;</li>
                <li className="solution-item">Mirror their language: &ldquo;You mentioned &apos;challenging&apos; - what specific challenges did you face?&rdquo;</li>
                <li className="solution-item">Provide context: &ldquo;In similar situations, teams might face X or Y. What was your experience?&rdquo;</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guidelines2;