import { useState, useEffect } from "react";
import Chart1_1 from "./components/Chart1_1/Chart1_1.jsx";
// import Chart1_2 from "./components/Chart1_2/Chart1_2.jsx";
import Chart1_3 from "./components/Chart1_3/Chart1_3.jsx";
// import Chart1_4 from "./components/Chart1_4/Chart1_4.jsx";
import Chart1_5 from "./components/Chart1_5/Chart1_5.jsx";
import Chart1_6 from "./components/Chart1_6/Chart1_6.jsx";
// import Chart1_7 from "./components/Chart1_7/Chart1_7.jsx";
import Chart1_11 from "./components/Chart1_11/Chart1_11.jsx";
import Chart1_12 from "./components/Chart1_12/Chart1_12.jsx";
import Chart1_13 from "./components/Chart1_13/Chart1_13.jsx";
import Chart1_14 from "./components/Chart1_14/Chart1_14.jsx";
// import Chart1_8 from "./components/Chart1_8/Chart1_8.jsx";
// import Chart1_9 from "./components/Chart1_9/Chart1_9.jsx";
// import Chart1_10 from "./components/Chart1_10/Chart1_10.jsx";

import Introduction from "./components/Introduction/Introduction.jsx";
import DatasetDescription from "./components/DatasetDescription/DatasetDescription.jsx";
// import ExampleConversation from "./components/ExampleConversation/ExampleConversation.jsx";
import ExampleConversation_emotion from "./components/ExampleConversation_emotion/ExampleConversation_emotion.jsx";
import ExampleConversation_skill from "./components/ExampleConversation_skill/ExampleConversation_skill.jsx";
import Summary from "./components/Summary/Summary.jsx";
import Guidelines from "./components/Guidelines/Guidelines.jsx";
import Guidelines2 from "./components/Guidelines2/Guidelines2.jsx";
import Guidelines3 from "./components/Guidelines3/Guidelines3.jsx";
import Scroll_down from "./components/Scroll_down/Scroll_down.jsx";

import "./App.css";

const App = () => {
  const scenario = "Best";

  useEffect(() => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };

    window.scrollTo(0, 0);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.2 }
    );

    const sections = document.querySelectorAll(".section, .page-change");
    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
      window.onbeforeunload = null;
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="container">
      <div className="table-of-contents">
        <div className="toc-header">Contents</div>
        <div className="toc-content">
          <ul className="toc-list">
            <li className="toc-item" onClick={() => scrollToSection('introduction')}>1. Introduction</li>
            <li className="toc-item" onClick={() => scrollToSection('dataset')}>2. Dataset Description</li>
            <li className="toc-item" onClick={() => scrollToSection('analysis')}>3. Analysis</li>
            <li className="toc-item toc-subitem" onClick={() => scrollToSection('speech')}>3-1. Amount of Speech</li>
            <li className="toc-item toc-subitem" onClick={() => scrollToSection('sentiment')}>3-2. Sentiment Analysis</li>
            <li className="toc-item toc-subitem" onClick={() => scrollToSection('skills')}>3-3. Interviewer Skills and Responses</li>
            <li className="toc-item toc-subitem" onClick={() => scrollToSection('words')}>3-4. Frequent Words</li>
            <li className="toc-item toc-subitem" onClick={() => scrollToSection('topic')}>3-5. Topic Transition</li>
            <li className="toc-item toc-subitem" onClick={() => scrollToSection('repetition')}>3-6. Repetition Q&A</li>
            <li className="toc-item toc-subitem" onClick={() => scrollToSection('valuable')}>3-7. Valuable Information</li>
            <li className="toc-item" onClick={() => scrollToSection('summary')}>4. Summary of Findings</li>
            <li className="toc-item" onClick={() => scrollToSection('guidelines')}>5. Guidelines for a Successful Interview</li>
            <li className="toc-item" onClick={() => scrollToSection('redflags')}>6. Red Flags of a Bad Interview </li>
          </ul>
        </div>
      </div>

      <header className="header">
        <div className="header-title-container">
          <h1 className="hero-title">Understanding What Defines a Good or Bad Interview</h1>
          <p className="hero-subtitle">Analyzing Differences and Patterns Across Best, Normal, and Worst Interview Scenarios</p>
        </div>
        <Scroll_down className="scroll-down" />
      </header>

      <section id="introduction" className="section">
        <Introduction />
      </section>

      <section id="dataset" className="section">
        <DatasetDescription />
      </section>

      <div id="analysis" className="page-change">
        <div className="page-change-title">
          Alright, let’s dive into the analysis results and explore what we’ve uncovered!
        </div>
      </div>

      <section id="speech" className="section">
        <div className="section-title">
          Is there a difference in the amount of speech  per turn <br /> depending on the scenario?
        </div>
        <div className="section-subtitle">Compare character count, word count, sentence count per turn. <br /> The total turn is Best - 1033 turns, Normal - 395 turns, Worst - 411 turns</div>
        <div className="chart-content">
          <Chart1_1 scenario={scenario} />
        </div>
      </section>

      <section id="sentiment" className="section">
        <div className="section-title">
          Does the distribution of emotions differ <br /> across the Best, Normal, and Worst scenarios?
        </div>
        <div className="section-subtitle">
          Analyze sentiment (Joy, Sadness, Anger, Surprise, Fear, Disgust, Neutral) throughout the conversation.
        </div>
        <div className="chart-content">
          <Chart1_3 scenario={scenario} />
          <div className="example">
            <div className="example-title">Example</div>
            <ExampleConversation_emotion />
          </div>
        </div>
      </section>

      <section id="skills" className="section">
        <div className="section-title">
          How are the types of <br /> Interviewer Skills and Interviewee Responses distributed?
        </div>
        <div className="section-subtitle">
          Examine ratio charts of the 11 Interviewer Skills and 7 Interviewee Responses by scenario.
        </div>
        <div className="chart-content">
          <div className="chart-subtitle"> Interviewer Skills Ratio Distribution</div>
          <Chart1_5 scenario={scenario} />
          <div className="chart-subtitle">Interviewee Responses Ratio Distribution</div>
          <Chart1_6 scenario={scenario} />
          <div className="example">
            <div className="example-title">Example</div>
            <ExampleConversation_skill />
          </div>
        </div>
      </section>
{/* 
      <section className="section">
        <div className="section-title">
          Is there a relation between Interviewer Skills and Interviewee Responses?
        </div>
        <div className="chart-content">
          <div className="chart-subtitle">
            Heatmap of Interviewer Skills and Interviewee Responses
          </div>
          <Chart1_7 scenario={scenario} />
        </div>
      </section> */}

      <section id="words" className="section">
        <div className="section-title">What are the most frequently occurring words in each scenario?</div>
        <div className="chart-content">
          <Chart1_11 />
        </div>
      </section>

      <section id="topic" className="section">
        <div className="section-title">
          How often does topic switching occur during the conversation flow?
        </div>
        <div className="chart-content">
          <Chart1_12 />
        </div>
      </section>

      <section id="repetition" className="section">
        <div className="section-title">
          How frequently were the same questions repeated by the interviewer, and how often did the interviewee provide repeated responses?
        </div>
        <div className="chart-content">
          <Chart1_13 />
        </div>
      </section>

      <section id="valuable" className="section">
        <div className="section-title">
          How much valuable information is contained in the responses?
        </div>
        <div className="chart-content">
          <Chart1_14 />
        </div>
      </section>

      <div className="page-change">
        <div className="page-change-title">
          Now, let&apos;s summarize the key findings and practical guidelines derived from our analysis.
        </div>
        <div className="page-change-content">
          Understanding these patterns and implementing the insights can help improve interview 
          and maximize the effectiveness of information gathering. 
          Additionally, this can serve as a key metric for evaluating interview quality.
        </div>
      </div>

      <section id="summary" className="section">
        <Summary />
      </section>

      <section id="guidelines" className="section">
        <Guidelines />
      </section>

      <section id="redflags" className="section">
        <Guidelines2 />
      </section>

      {/* <section className="section">
        <Guidelines3 />
      </section> */}
      
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-name">Hyun Lee</div>
          <div className="footer-email">hyunini0408@kaist.ac.kr</div>
          <div className="footer-info">
            Course : Data Analytics for Designers (DAD)
            <br />
            2024 Fall Department of Industrial Design, KAIST
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;