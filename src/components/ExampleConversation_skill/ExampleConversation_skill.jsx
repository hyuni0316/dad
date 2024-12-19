import { useEffect, useState, useRef } from 'react';
import './ExampleConversation_skill.css';
import { conversationData1, conversationData2, conversationData3 } from './conversationData_skill';
import PropTypes from 'prop-types';

const ConversationBox = ({ data, title, startAnimation, description }) => {
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
    
    setVisibleMessages([]);

    data.forEach((message, index) => {
      const timeout = setTimeout(() => {
        setVisibleMessages(prev => {
          if (prev.some(m => m.id === message.id)) {
            return prev;
          }
          return [...prev, message];
        });
      }, index * 1000);
      
      timeoutsRef.current.push(timeout);
    });

    return () => {
      timeoutsRef.current.forEach(timeout => clearTimeout(timeout));
    };
  }, [isVisible, data, startAnimation]);

  return (
    <div className="conversation-box">
      <h3 className="conversation-title">{title}</h3>
      <p className="conversation-description">{description}</p>
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
  startAnimation: PropTypes.bool.isRequired,
  description: PropTypes.string.isRequired
};

const ExampleConversation_skill = () => {
  const [firstConversationDone, setFirstConversationDone] = useState(false);
  const [showSecondConversation, setShowSecondConversation] = useState(false);
  const [showThirdConversation, setShowThirdConversation] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setFirstConversationDone(true);
      setShowSecondConversation(true);
    }, (conversationData1.length * 1000) + 1000);

    const timer2 = setTimeout(() => {
      setShowThirdConversation(true);
    }, (conversationData1.length * 1000) + (conversationData2.length * 1000) + 2000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="conversations-container">
      <ConversationBox 
        data={conversationData1} 
        title="Example 1: App Usage Frequency"
        description="Specific Questions & Follow-up Questions → Information-Providing Response"
        startAnimation={true}
      />
      {showSecondConversation && (
        <ConversationBox 
          data={conversationData2} 
          title="Example 2: Asset Management Strategy"
          description="Open-ended Question followed by Clarifying Questions → Example-Providing Response"
          startAnimation={firstConversationDone}
        />
      )}
      {showThirdConversation && (
        <ConversationBox 
          data={conversationData3} 
          title="Example 3: Investment Information Sources"
          description="Information-Providing Response, Proactive Response"
          startAnimation={showSecondConversation}
        />
      )}
    </div>
  );
};

export default ExampleConversation_skill; 