import { useEffect, useRef } from 'react';
import './DatasetDescription.css';
import Chart1_2 from '../Chart1_2/Chart1_2';

const DatasetDescription = () => {
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
        threshold: 0.01,
        rootMargin: '50px'
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
      {/* 첫 번째 카드: Interview Goal */}
      <div className="dataset-card-first-card fade-in" ref={(el) => (cardsRef.current[0] = el)}>
        <div className="dataset-title fade-in-text">Dataset Description</div>
        <div className="dataset-content">
          <div className="goal-section">
            <span className="goal-label fade-in-text">Interview Goal</span>
            <p className="goal-text fade-in-text">
              The goal of this interview is to analyze the experience of using financial
              applications and to understand <br /> how individuals manage their assets.
            </p>
          </div>
        </div>
      </div>

      {/* 두 번째 카드: Basic Attributes */}
      <div className="dataset-card fade-in" ref={(el) => (cardsRef.current[1] = el)}>
        <div className="dataset-subtitle fade-in-text">Dataset Attributes</div>
        <div className="dataset-content">
          <div className="attribute fade-in-text">
            <span className="attribute-label">Speaker</span>
            <p className="attribute-text">Specifies if the speaker is the interviewer or interviewee.</p>
          </div>
          <div className="attribute fade-in-text">
            <span className="attribute-label">Text</span>
            <p className="attribute-text">The spoken content during the interview.</p>
          </div>
          <div className="attribute fade-in-text">
            <span className="attribute-label">Counts</span>
            <p className="attribute-text">Sentence count, word count, and character count for each turn.</p>
          </div>
          <div className="attribute fade-in-text">
            <span className="attribute-label">Sentiment</span>
            <p className="attribute-text">7 categories: Joy, Sadness, Anger, Surprise, Fear, Disgust, Neutral</p>
          </div>
        </div>
      </div>

      {/* 세 번째 카드: Interviewer Skills */}
      <div className="dataset-card fade-in" ref={(el) => (cardsRef.current[2] = el)}>
        <div className="dataset-subsubtitle-container fade-in-text">
          <div className="dataset-subsubtitle">Interviewer Skills</div>
          <p className="dataset-subsubtitle-description">
            The interviewer skills are categorized into 11 categories:
          </p>
        </div>
        <div className="dataset-content">
          <div className="attribute-list">
            <p className="attribute-text fade-in-text">
              • <strong>Situation Guidance (상황 안내):</strong> Explaining time, recording, and note-taking processes to set a calm and comfortable atmosphere before the interview begins.
            </p>
            <p className="attribute-text fade-in-text">
              • <strong>Polite Greeting (정중한 인사):</strong> Expressing gratitude to the interviewee to establish rapport and start the interview on a friendly note.
            </p>
            <p className="attribute-text fade-in-text">
              • <strong>Open-Ended Questions (열린 질문):</strong> Asking questions that allow interviewees to freely share information or opinions, e.g., &quot;Can you tell me about the industry you work in?&quot;
            </p>
            <p className="attribute-text fade-in-text">
              • <strong>Specific Questions (구체적인 질문):</strong> Asking detailed questions related to the interview topic, such as frequency of use or purpose, to elicit more specific information.
            </p>
            <p className="attribute-text fade-in-text">
              • <strong>Follow-Up Questions (부연 질문):</strong> Requesting additional details based on the interviewee&apos;s previous answers to gain a deeper understanding.
            </p>
            <p className="attribute-text fade-in-text">
              • <strong>Information Requests (정보 요청):</strong> Asking the interviewee to share tangible information, such as showing an application screen, to obtain concrete data for the discussion.
            </p>
            <p className="attribute-text fade-in-text">
              • <strong>Active Listening (적극적 경청):</strong> Listening attentively to the interviewee&apos;s responses, confirming their statements, and using their input to guide the conversation.
            </p>
            <p className="attribute-text fade-in-text">
              • <strong>Context Understanding (맥락 파악):</strong> Building on the interviewee&apos;s answers to develop related questions and deepen the conversation.
            </p>
            <p className="attribute-text fade-in-text">
              • <strong>Topic Transition (주제 전환):</strong> Flexibly transitioning to different topics during the interview to diversify the content.
            </p>
            <p className="attribute-text fade-in-text">
              • <strong>Emotional Support (감정적 지지):</strong> Expressing empathy towards the interviewee&apos;s experiences to foster a more meaningful and open discussion.
            </p>
            <p className="attribute-text fade-in-text">
              • <strong>Use of Professional Terminology (전문 용어 사용):</strong> Utilizing subject-specific terms to build credibility and provide a professional environment for the interviewee.
            </p>
          </div>
        </div>
      </div>

      {/* 네 번째 카드: Interviewee Responses */}
      <div className="dataset-card fade-in" ref={(el) => (cardsRef.current[3] = el)}>
        <div className="dataset-subsubtitle-container fade-in-text">
          <div className="dataset-subsubtitle">Interviewee Responses</div>
          <p className="dataset-subsubtitle-description">
            The interviewee responses are categorized into 7 categories:
          </p>
        </div>
        <div className="dataset-content">
          <div className="attribute-list">
            <p className="attribute-text fade-in-text">
              • <strong>Receptive Response (수용적 반응):</strong> The interviewee frequently expresses agreement with suggestions or questions, providing positive feedback and demonstrating a willingness to engage and understand.
            </p>
            <p className="attribute-text fade-in-text">
              • <strong>Passive Response (소극적 반응):</strong> The interviewee avoids directly answering questions or hesitates to share their thoughts or emotions, showing a reluctance to actively engage in the conversation.  
            </p>
            <p className="attribute-text fade-in-text">
              • <strong>Indifferent Response (미온적 반응):</strong> When asked about preferences or intentions for a service or feature, the interviewee takes a neutral stance, avoiding clear positive or negative opinions.
            </p>
            <p className="attribute-text fade-in-text">
              • <strong>Information-Providing Response (정보 제공형 반응):</strong> The interviewee gives detailed explanations based on their experiences or expertise, demonstrating deep understanding and knowledge of the topic.
            </p>
            <p className="attribute-text fade-in-text">
              • <strong>Example-Providing Response (사례제시형 반응):</strong> The interviewee uses personal experiences or observed examples to answer questions, focusing on explaining specific situations in detail.
            </p>
            <p className="attribute-text fade-in-text">
              • <strong>Proactive Response (자기주적 반응):</strong> The interviewee shows a self-driven attitude, taking the initiative to make decisions and actively seeking information to learn from experiences, particularly in contexts like investment or finance.
            </p>
            <p className="attribute-text fade-in-text">
              • <strong>Critical Response (비판적 반응):</strong> The interviewee provides constructive criticism or points out shortcomings of a specific app or service, sharing their personal experiences and suggesting improvements.
            </p>
          </div>
        </div>
      </div>

      {/* 다섯 번째 카드: Interview Sections */}
      <div className="dataset-card fade-in" ref={(el) => (cardsRef.current[4] = el)}>
        <div className="dataset-subsubtitle-container fade-in-text">
          <div className="dataset-subsubtitle">Interview Sections</div>
          <p className="dataset-subsubtitle-description">
            Best (1033 turns), Normal (395 turns), Worst (411 turns)
          </p>
        </div>
        <div className="dataset-content fade-in-text">
          <Chart1_2 />
        </div>
      </div>
    </div>
  );
};

export default DatasetDescription; 