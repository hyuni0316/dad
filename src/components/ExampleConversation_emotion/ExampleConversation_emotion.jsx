import { useEffect, useState, useRef } from 'react';
import './ExampleConversation_emotion.css';
import { conversationData1, conversationData2 } from './conversationData_emotion';
import PropTypes from 'prop-types';

const ConversationBox = ({ data, title, startAnimation }) => {
  const [visibleMessages, setVisibleMessages] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const timeoutsRef = useRef([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3
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

  useEffect(() => {
    if (!isVisible || !startAnimation) return;

    timeoutsRef.current.forEach(timeout => clearTimeout(timeout));
    timeoutsRef.current = [];
    
    setVisibleMessages(data);

    return () => {
      timeoutsRef.current.forEach(timeout => clearTimeout(timeout));
    };
  }, [isVisible, data, startAnimation]);

  return (
    <div className="conversation-box">
      <h3 className="conversation-title">{title}</h3>
      <div className="example-content" ref={containerRef}>
        {visibleMessages.map((message) => (
          <div key={message.id} className={`message ${message.speaker}`}>
            <div className="message-bubble">
              <span className="example-label">
                {message.speaker === 'interviewer' ? 'Interviewer' : 'Interviewee'}
              </span>
              <span className="example-text">{message.text}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

ConversationBox.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      speaker: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
  startAnimation: PropTypes.bool.isRequired
};

const ExampleConversation_emotion = () => {
  const [showSecondConversation, setShowSecondConversation] = useState(false);
  const [startSecondAnimation, setStartSecondAnimation] = useState(false);

  useEffect(() => {
    const firstConversationDuration = conversationData1.length * 1000; // 각 메시지가 1초 간격으로 나타남
    const timer1 = setTimeout(() => {
      setShowSecondConversation(true);
      setTimeout(() => {
        setStartSecondAnimation(true);
      }, 100);
    }, firstConversationDuration);

    return () => {
      clearTimeout(timer1);
    };
  }, []);

  return (
    <div className="conversations-container">
      <ConversationBox 
        data={conversationData1} 
        title="Example 1: Fear and Surprise in Login Issues"
        startAnimation={true}
      />
      {showSecondConversation && (
        <ConversationBox 
          data={conversationData2} 
          title="Example 2: Joy and Surprise in Point System"
          startAnimation={startSecondAnimation}
        />
      )}
    </div>
  );
};

export default ExampleConversation_emotion; 