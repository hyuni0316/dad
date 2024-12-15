import { useState, useEffect } from "react";
import Chart1_1 from "./components/Chart1_1/Chart1_1.jsx";
import Chart1_2 from "./components/Chart1_2/Chart1_2.jsx";
import Chart1_3 from "./components/Chart1_3/Chart1_3.jsx";
import Chart1_4 from "./components/Chart1_4/Chart1_4.jsx";
import Chart1_5 from "./components/Chart1_5/Chart1_5.jsx";
import Chart1_6 from "./components/Chart1_6/Chart1_6.jsx";
import Chart1_7 from "./components/Chart1_7/Chart1_7.jsx";
import Chart1_8 from "./components/Chart1_8/Chart1_8.jsx";
import Chart1_9 from "./components/Chart1_9/Chart1_9.jsx";
import Chart1_10 from "./components/Chart1_10/Chart1_10.jsx";
// import Scroll_down from "./components/Scroll_down/Scroll_down.jsx";


import "./App.css";

const App = () => {
  const [scenario, setScenario] = useState("Best");
  const [sectionList, setSectionList] = useState({});
  const [conversation, setConversation] = useState([]);
  const [analysis, setanalysis] = useState("인터뷰어와 인터뷰이 발화량 비교 분석")
  const [selectedSection, setSelectedSection] = useState(null);

  // 섹션 리스트 JSON 데이터 가져오기
  useEffect(() => {
    fetch("/interview_data/01_section.json")
      .then((response) => response.json())
      .then((data) => setSectionList(data))
      .catch((error) => console.error("Error fetching section data:", error));
  }, []);

  // 시나리오에 따라 대화 JSON 데이터 가져오기
  useEffect(() => {
    if (scenario) {
      fetch(`/interview_data/01_${scenario}.json`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch data");
          }
          return response.json();
        })
        .then((data) => setConversation(data))
        .catch((error) => console.error(`Error fetching ${scenario} conversation:`, error));
    }
  }, [scenario]);

  // 시나리오에 따라 섹션 리스트 선택
  const sections = sectionList[`${scenario} Section List`] || [];

  // 섹션 클릭 핸들러 추가
  const scrollToSection = (sectionName) => {
    const conversationDiv = document.querySelector('.conversation');
    const sectionStart = conversationDiv?.querySelector(`[data-section="${sectionName}"]`);
    
    if (sectionStart && conversationDiv) {
      conversationDiv.scrollTop = sectionStart.offsetTop - conversationDiv.offsetTop;
      setSelectedSection(sectionName);
    }
  };

  return (
    <div className="container">
      <header className="header">
        <h3>What Makes a Good Interviewer? Exploring the Interview Process</h3>
      </header>

      <div className="interview-comparison">
        <div className="comparison-header">
          <button 
            onClick={() => setScenario("Best")}
            className={scenario === "Best" ? "selected" : ""}
          >
            Best
          </button>
          <button 
            onClick={() => setScenario("Normal")}
            className={scenario === "Normal" ? "selected" : ""}
          >
            Normal
          </button>
          <button 
            onClick={() => setScenario("Worst")}
            className={scenario === "Worst" ? "selected" : ""}
          >
            Worst
          </button>
        </div>

        <div className="panels-container">
          <div className="interview-panel">
            <div className="sections">
              <div className="sections-title">Sections</div>
              {sections.length > 0 ? (
                sections.map((section, index) => (
                  <button 
                    className={`section-button ${selectedSection === section ? 'selected' : ''}`}
                    key={index}
                    onClick={() => scrollToSection(section)}
                  >
                    {section}
                  </button>
                ))
              ) : (
                <p>Loading sections...</p>
              )}
            </div>
            <div className="interview-script">
              <div className="script-title">{scenario} Interview Script</div>
              <div className="conversation">
                {conversation.length > 0 ? (
                  conversation.map((line, index) => (
                    <div 
                      key={index} 
                      className={line.speaker}
                      data-section={line.section}
                    >
                      <div className="speaker">{line.speaker}</div>
                      <div className="text">{line.text}</div>
                    </div>
                  ))
                ) : (
                  <p>Loading conversation...</p>
                )}
              </div>
            </div>
          </div>

          <div className="analysis-panel">
            <div className="interview-goal">
              <div>Interview Goal</div>
              <p>금융 앱 사용 경험과 자산관리 형태 파악</p>
            </div>
            <div className="interview-analysis">
              <div>Interview Analysis</div>
              <div className="analysis-button">
                <button 
                  onClick={() => setanalysis("인터뷰어와 인터뷰이 발화량 비교 분석")}
                  className={analysis === "인터뷰어와 인터뷰이 발화량 비교 분석" ? "selected" : ""}
                >
                  인터뷰어와 인터뷰이 발화량 비교 분석
                </button>
                <button 
                  onClick={() => setanalysis("섹션 별 발화량 비교 분석")}
                  className={analysis === "섹션 별 발화량 비교 분석" ? "selected" : ""}
                >
                  섹션 별 발화량 비교 분석
                </button>
                <button 
                  onClick={() => setanalysis("인터뷰어와 인터뷰이 감정 비교 분석")}
                  className={analysis === "인터뷰어와 인터뷰이 감정 비교 분석" ? "selected" : ""}
                >
                  인터뷰어와 인터뷰이 감정 비교 분석
                </button>
                <button 
                  onClick={() => setanalysis("인터뷰어 스킬과 인터뷰이 반응 별 감정 분포")}
                  className={analysis === "인터뷰어 스킬과 인터뷰이 반응 별 감정 분포" ? "selected" : ""}
                >
                  스킬과 반응 유형 별 감정 분포
                </button>
                <button 
                  onClick={() => setanalysis("인터뷰어 스킬 유형 분석")}
                  className={analysis === "인터뷰어 스킬 유형 분석" ? "selected" : ""}
                >
                  인터뷰어 스킬 유형 분석
                </button>
                <button 
                  onClick={() => setanalysis("인터뷰이 반응 유형 분석")}
                  className={analysis === "인터뷰이 반응 유형 분석" ? "selected" : ""}
                >
                  인터뷰이 반응 유형 분석
                </button>
                <button 
                  onClick={() => setanalysis("인터뷰어 스킬과 인터뷰이 반응 상관관계 분석")}
                  className={analysis === "인터뷰어 스킬과 인터뷰이 반응 상관관계 분석" ? "selected" : ""}
                >
                  스킬과 반응 유형 관계 분석
                </button>
                <button 
                  onClick={() => setanalysis("인터뷰어 스킬 유형 상관관계 분석")}
                  className={analysis === "인터뷰어 스킬 유형 상관관계 분석" ? "selected" : ""}
                >
                  스킬 유형 상관관계 분석
                </button>
                <button 
                  onClick={() => setanalysis("인터뷰 반응 유형 상관관계 분석")}
                  className={analysis === "인터뷰 반응 유형 상관관계 분석" ? "selected" : ""}
                >
                  반응 유형 상관관계 분석
                </button>
                <button 
                  onClick={() => setanalysis("인터뷰어 질문에 대한 응답 달성율 분석")}
                  className={analysis === "인터뷰어 질문에 대한 응답 달성율 분석" ? "selected" : ""}
                >
                  인터뷰어 질문에 대한 응답 달성율 분석
                </button>
              </div>
            </div>
            <div className="chart-comparison">
              <div className="chart-title">{analysis}</div>
              <div className="charts">
                {analysis === "인터뷰어와 인터뷰이 발화량 비교 분석" && <Chart1_1 scenario={scenario}/>}
                {analysis === "섹션 별 발화량 비교 분석" && <Chart1_2 scenario={scenario}/>}
                {analysis === "인터뷰어와 인터뷰이 감정 비교 분석" && <Chart1_3 scenario={scenario}/>}
                {analysis === "인터뷰어 스킬과 인터뷰이 반응 별 감정 분포" && <Chart1_4 scenario={scenario}/>}
                {analysis === "인터뷰어 스킬 유형 분석" && <Chart1_5 scenario={scenario}/>}
                {analysis === "인터뷰이 반응 유형 분석" && <Chart1_6 scenario={scenario}/>}
                {analysis === "인터뷰어 스킬과 인터뷰이 반응 상관관계 분석" && <Chart1_7 scenario={scenario}/>}
                {analysis === "인터뷰어 스킬 유형 상관관계 분석" && <Chart1_8 scenario={scenario}/>}
                {analysis === "인터뷰 반응 유형 상관관계 분석" && <Chart1_9 scenario={scenario}/>}
                {analysis === "인터뷰어 질문에 대한 응답 달성율 분석" && <Chart1_10 scenario={scenario}/>}
              </div>
            </div>
          </div>
          
        </div>
        {/* <Scroll_down/> */}


      </div>
    </div>
  );
};

export default App;
