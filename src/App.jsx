import {  useEffect } from "react";
import Chart1_1 from "./components/Chart1_1/Chart1_1.jsx";
// import Chart1_2 from "./components/Chart1_2/Chart1_2.jsx";
import Chart1_3 from "./components/Chart1_3/Chart1_3.jsx";
// import Chart1_4 from "./components/Chart1_4/Chart1_4.jsx";
import Chart1_5 from "./components/Chart1_5/Chart1_5.jsx";
import Chart1_6 from "./components/Chart1_6/Chart1_6.jsx";
import Chart1_7 from "./components/Chart1_7/Chart1_7.jsx";
import Chart1_11 from "./components/Chart1_11/Chart1_11.jsx";
import Chart1_12 from "./components/Chart1_12/Chart1_12.jsx";
import Chart1_13 from "./components/Chart1_13/Chart1_13.jsx";
import Chart1_14 from "./components/Chart1_14/Chart1_14.jsx";
// import Chart1_8 from "./components/Chart1_8/Chart1_8.jsx";
// import Chart1_9 from "./components/Chart1_9/Chart1_9.jsx";
// import Chart1_10 from "./components/Chart1_10/Chart1_10.jsx";

import Introduction from "./components/Introduction/Introduction.jsx";
import DatasetDescription from "./components/DatasetDescription/DatasetDescription.jsx";
import ExampleConversation from "./components/ExampleConversation/ExampleConversation.jsx";
import Summary from "./components/Summary/Summary.jsx";
import Guidelines from "./components/Guidelines/Guidelines.jsx";
import Scroll_down from "./components/Scroll_down/Scroll_down.jsx";


import "./App.css";

const App = () => {
  const scenario = "Best";

  useEffect(() => {
    // 페이지 로드/새로고침 시 맨 위로 스크롤
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
  

  return (
    <div className="container">
      {/* 첫 페이지 */}
      <header className="header">
        <div className="header-title-container">
          <h1 className="hero-title">What Makes a Good Interviewer?</h1>
          <p className="hero-subtitle">Exploring the Interview Process</p>
        </div>
        <Scroll_down className="scroll-down" />
      </header>

      <section className="section">
        <Introduction />
      </section>

      <section className="section">
        <DatasetDescription />
      </section>

      <div className="page-change">
        <div className="page-change-title">
          Alright, let’s dive into the analysis results and explore what we’ve uncovered!
        </div>
      </div>

      {/* 분석 섹션들 */}
      <section className="section">
          <div className="section-title">Is there a difference in the amount of speech between <br />  the interviewer and the interviewee depending on the scenario?</div>
          <div className="section-subtitle">Compare character count, word count, sentence count</div>
          <div className="chart-content">
            <Chart1_1 scenario={scenario} />
          </div>
      </section>


      <section className="section">
          <div className="section-title">Does the distribution of emotions differ  <br /> across the Best, Normal, and Worst scenarios?</div>
          <div className="section-subtitle">Analyze sentiment (Joy, Sadness, Anger, Surprise, Fear, Disgust, Neutral) throughout the conversation.</div>
          <div className="chart-content">
            <Chart1_3 scenario={scenario} />
            {/* <Chart1_4 scenario={scenario} /> */}
            <div className="example">
              <div className="example-title">Example</div>
              <ExampleConversation />
            </div>
          </div>
      </section>

      <section className="section">
          <div className="section-title">How are the types of <br /> Interviewer Skills and Interviewee Responses distributed?</div>
          <div className="section-subtitle">Examine ratio charts of the 11 Interviewer Skills and 7 Interviewee Responses by scenario.</div>
          <div className="chart-content">
            <div className="chart-subtitle">Types of Interviewer Skills</div>
            <Chart1_5 scenario={scenario} />
            <div className="chart-subtitle">Types of Interviewee Responses</div>
            <Chart1_6 scenario={scenario} />
            <div className="example">
              <div className="example-title">Example</div>
              <ExampleConversation />
            </div>
          </div>
      </section>

      {/* Correlation Analysis - Skills and Responses */}
      <section className="section">
          <div className="section-title">Is there a relation between Interviewer Skills and Interviewee Responses?</div>
          <div className="chart-content">
            <div className="chart-subtitle">Heatmap of Interviewer Skills and Interviewee Responses</div>
            <Chart1_7 scenario={scenario} />
          </div>
      </section>

      <section className="section">
        <div className="section-title">What are the most frequently occurring words in each scenario?</div>
        <div className="chart-content">
          <Chart1_11 />
        </div>
      </section>


      <section className="section">
        <div className="section-title">How often does topic switching occur during the conversation flow?</div>
        <div className="chart-content">
          <Chart1_12 />
        </div>
      </section>

      <section className="section">
        <div className="section-title">
          How often did the interviewer repeat the same question? <br />
          How often did the interviewee repeat the same response?
        </div>
        <div className="chart-content">
          <Chart1_13 />
        </div>
      </section> 

      <section className="section">
        <div className="section-title">
          How much valuable information is contained in the responses?
        </div>
        <div className="chart-content">
          <Chart1_14 />
        </div>
      </section> 




      {/* <section className="section">
          <div className="section-title">What are the Interviewer Skills and Interviewee Responses that lead to a high Response Achievement rate?</div>
          <div className="chart-content">
            <div className="chart-subtitle">Achievement Rate of Interviewer Questions</div>
            <Chart1_10 scenario={scenario} />
            <div className="example">
              <div className="example-title">Example</div>
              <ExampleConversation />
            </div>
          </div>
      </section> */}

      <div className="page-change">
        <div className="page-change-title">
          Let’s explore summaries and Guidelines for a Successful Interview in depth.
        </div>
        <div className="page-change-content">
          Mastering these principles can help you navigate interviews with confidence and achieve outstanding results.
        </div>
      </div>

      <section className="section">
        <Summary />
      </section>

      <section className="section">
        <Guidelines />
      </section>

    </div>
  );
  };
  
export default App;
  