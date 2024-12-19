import './Introduction.css';

const Introduction = () => {
  return (
    <div className="introduction">
      <div className="intro-block">
        <div className="intro-title">Introduction</div>
        <div className="intro-content">
          <p>
            This project analyzes interview datasets categorized into Best, Normal, and Worst cases. 
          </p>
          <p>
            The dataset provides a detailed view of interactions between interviewers
            and interviewees, including text data, counts (sentences, words, characters),
            sentiment, interviewer skill types, and interviewee response types.
          </p>
          <p>
            The key attributes were extracted based on the interview raw data through ChatGPT-4o.
          </p>
          <p>
            The dataset is available on <a href="https://drive.google.com/file/d/1-0ELIo4KwKq0-8SY9WNMHqcX6co5kA8o/view?usp=sharing" target="_blank" rel="noopener noreferrer">Google Drive</a>. 
          </p>
          <p className="intro-content-sub">
            This objectives of this project are as follows: 
            <br />
            Identify and analyze the key factors that determine good and bad interviews, exploring the characteristics of both effective and ineffective interviews.
            <br />
            Conduct a formative study to propose a structured design for an LLM-based AI Interviewer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Introduction; 