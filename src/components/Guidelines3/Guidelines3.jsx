import { useEffect, useRef } from 'react';
import './Guidelines3.css';

const Guidelines3 = () => {
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
        <div className="dataset-title fade-in-text">Guidelines for Developing an AI Interviewer Using LLMs</div>
        <div className="dataset-content">
          <div className="goal-section">
            <p className="goal-text fade-in-text">
              A comprehensive suggestion for developing advanced AI interviewers using Large Language Models (LLMs), 
              focusing on natural conversation flow, emotional intelligence, and continuous improvement.
            </p>
          </div>
        </div>
      </div>

      {/* Conversation Flow Design */}
      <div className="dataset-card fade-in" ref={(el) => (cardsRef.current[1] = el)}>
        <div className="dataset-subtitle fade-in-text">1. Conversation Flow Design</div>
        <div className="dataset-content">
          <div className="attribute-list">
            <p className="attribute-text fade-in-text">
              • <strong>Predefined yet Adaptive Structures:</strong> Implement flexible conversation frameworks with dynamic branching paths, enabling contextual adaptation to user inputs while maintaining natural flow.
            </p>
            <p className="attribute-text fade-in-text">
              • <strong>Repetition Control:</strong> Deploy dialogue history tracking to prevent redundant interactions.
            </p>
            <p className="attribute-text fade-in-text">
              • <strong>Context Awareness:</strong> Maintain comprehensive conversation memory to ensure topic consistency and contextual relevance throughout the interview.
            </p>
          </div>
        </div>
      </div>

      {/* Emotional Sensitivity */}
      <div className="dataset-card fade-in" ref={(el) => (cardsRef.current[2] = el)}>
        <div className="dataset-subtitle fade-in-text">2. Emotional Sensitivity</div>
        <div className="dataset-content">
          <div className="attribute-list">
            <p className="attribute-text fade-in-text">
              • <strong>Sentiment Analysis Integration:</strong> Implement real-time emotion detection from text/speech to dynamically adjust AI responses and tone.
            </p>
            <p className="attribute-text fade-in-text">
              • <strong>Personalized Interaction:</strong> Create emotion-aware response templates that validate user feelings and build meaningful connections.
            </p>
          </div>
        </div>
      </div>

      {/* Dynamic Questioning Techniques */}
      <div className="dataset-card fade-in" ref={(el) => (cardsRef.current[3] = el)}>
        <div className="dataset-subtitle fade-in-text">3. Dynamic Questioning Techniques</div>
        <div className="dataset-content">
          <div className="attribute-list">
            <p className="attribute-text fade-in-text">
              • <strong>Probing and Follow-up Logic:</strong> Generate contextual follow-up questions based on response analysis and detected information gaps.
            </p>
            <p className="attribute-text fade-in-text">
              • <strong>Open-ended Question Generation:</strong> Craft prompts that encourage detailed responses and deeper discussion.
            </p>
            <p className="attribute-text fade-in-text">
              • <strong>Active Learning Algorithms:</strong> Optimize question strategies through continuous analysis of response effectiveness.
            </p>
          </div>
        </div>
      </div>

      {/* Natural Language and Tone */}
      <div className="dataset-card fade-in" ref={(el) => (cardsRef.current[4] = el)}>
        <div className="dataset-subtitle fade-in-text">4. Natural Language and Tone</div>
        <div className="dataset-content">
          <div className="attribute-list">
            <p className="attribute-text fade-in-text">
              • <strong>Fine-tuning for Precision:</strong> Enhance model performance through domain-specific training and conversational datasets.
            </p>
            <p className="attribute-text fade-in-text">
              • <strong>Tone Modulation:</strong> Implement dynamic tone adjustment based on context and user preferences.
            </p>
            <p className="attribute-text fade-in-text">
              • <strong>Conversational Fillers:</strong> Include natural conversation elements to enhance flow and engagement.
            </p>
          </div>
        </div>
      </div>

      {/* Topic Management */}
      <div className="dataset-card fade-in" ref={(el) => (cardsRef.current[5] = el)}>
        <div className="dataset-subtitle fade-in-text">5. Topic Management and Transition</div>
        <div className="dataset-content">
          <div className="attribute-list">
            <p className="attribute-text fade-in-text">
              • <strong>Semantic Topic Tracking:</strong> Utilize embeddings for effective topic monitoring and progression management.
            </p>
            <p className="attribute-text fade-in-text">
              • <strong>Summarization Pipelines:</strong> Implement periodic discussion summaries to maintain coherence and smooth transitions.
            </p>
            <p className="attribute-text fade-in-text">
              • <strong>Topic Depth Optimization:</strong> Systematically manage topic exploration depth with defined thresholds.
            </p>
          </div>
        </div>
      </div>

      {/* Feedback and Learning */}
      <div className="dataset-card fade-in" ref={(el) => (cardsRef.current[6] = el)}>
        <div className="dataset-subtitle fade-in-text">6. Feedback and Learning</div>
        <div className="dataset-content">
          <div className="attribute-list">
            <p className="attribute-text fade-in-text">
              • <strong>User Interaction Logging:</strong> Maintain comprehensive interaction records for continuous improvement.
            </p>
            <p className="attribute-text fade-in-text">
              • <strong>Self-reflection Mechanisms:</strong> Implement post-session performance evaluation and adjustment capabilities.
            </p>
            <p className="attribute-text fade-in-text">
              • <strong>Personalized Learning:</strong> Develop feedback-based refinement systems for improved user interaction.
            </p>
          </div>
        </div>
      </div>

      {/* Monitoring and Evaluation */}
      <div className="dataset-card fade-in" ref={(el) => (cardsRef.current[7] = el)}>
        <div className="dataset-subtitle fade-in-text">7. Monitoring and Evaluation</div>
        <div className="dataset-content">
          <div className="attribute-list">
            <p className="attribute-text fade-in-text">
              • <strong>Quantitative Metrics:</strong> Track key performance indicators including response quality and conversation coherence.
            </p>
            <p className="attribute-text fade-in-text">
              • <strong>Behavioral Analysis:</strong> Implement LLM-based engagement monitoring and analysis systems.
            </p>
            <p className="attribute-text fade-in-text">
              • <strong>Continuous Model Updates:</strong> Maintain regular model retraining cycles with new interaction data.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guidelines3;