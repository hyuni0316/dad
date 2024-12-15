import { useEffect, useState, useRef } from 'react';
import './ExampleConversation.css';
import { conversationData } from './conversationData';

const ExampleConversation = () => {
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
        threshold: 0.3 // 30% 이상 보일 때 활성화
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
    if (!isVisible) return;

    // 이전 타이머들을 정리
    timeoutsRef.current.forEach(timeout => clearTimeout(timeout));
    timeoutsRef.current = [];
    
    // 상태 초기화
    setVisibleMessages([]);

    // 새로운 타이머 설정
    conversationData.forEach((message, index) => {
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
  }, [isVisible]);

  return (
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
  );
};

export default ExampleConversation; 