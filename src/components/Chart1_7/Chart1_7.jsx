import React from "react";
import PropTypes from "prop-types";
import Plotly from "plotly.js-dist";

const prepareHeatmapData = (data) => {
  const skills = Object.keys(data);
  const responses = Object.keys(data[skills[0]]);
  const zData = skills.map((skill) => responses.map((response) => data[skill][response] || 0));
  return { skills, responses, zData };
};

const Chart1_7 = ({ scenario }) => {
  const tables = {
    Worst: {
      "구체적인 질문": { "미온적 반응": 5, "비판적 반응": 4, "사례제시형 반응": 14, "소극적 반응": 22, "수용적 반응": 14, "자기주도적 반응": 2, "정보 제공형 반응": 39 },
      "맥락 파악": { "미온적 반응": 3, "비판적 반응": 1, "사례제시형 반응": 15, "소극적 반응": 17, "수용적 반응": 5, "자기주도적 반응": 0, "정보 제공형 반응": 29 },
      "부연 질문": { "미온적 반응": 2, "비판적 반응": 0, "사례제시형 반응": 6, "소극적 반응": 6, "수용적 반응": 4, "자기주도적 반응": 0, "정보 제공형 반응": 15 },
      "상황 안내": { "미온적 반응": 2, "비판적 반응": 0, "사례제시형 반응": 1, "소극적 반응": 10, "수용적 반응": 2, "자기주도적 반응": 1, "정보 제공형 반응": 10 },
      "열린 질문": { "미온적 반응": 1, "비판적 반응": 1, "사례제시형 반응": 1, "소극적 반응": 4, "수용적 반응": 1, "자기주도적 반응": 1, "정보 제공형 반응": 10 },
      "적극적 경청": { "미온적 반응": 2, "비판적 반응": 1, "사례제시형 반응": 7, "소극적 반응": 6, "수용적 반응": 4, "자기주도적 반응": 0, "정보 제공형 반응": 19 },
      "전문 용어 사용": { "미온적 반응": 0, "비판적 반응": 0, "사례제시형 반응": 1, "소극적 반응": 2, "수용적 반응": 0, "자기주도적 반응": 0, "정보 제공형 반응": 0 },
      "정보 요청": { "미온적 반응": 0, "비판적 반응": 0, "사례제시형 반응": 4, "소극적 반응": 2, "수용적 반응": 5, "자기주도적 반응": 0, "정보 제공형 반응": 6 },
      "정중한 인사": { "미온적 반응": 1, "비판적 반응": 0, "사례제시형 반응": 3, "소극적 반응": 2, "수용적 반응": 0, "자기주도적 반응": 1, "정보 제공형 반응": 7 },
      "주제 전환": { "미온적 반응": 0, "비판�� 반응": 0, "사례제시형 반응": 0, "소극적 반응": 1, "수용적 반응": 0, "자기주도적 반응": 0, "정보 제공형 반응": 3 },
    },
    Normal: {
      "감정적 지지": { "미온적 반응": 0, "비판적 반응": 0, "사례제시형 반응": 0, "소극적 반응": 0, "수용적 반응": 1, "자기주도적 반응": 0, "정보 제공형 반응": 1 },
      "구체적인 질문": { "미온적 반응": 9, "비판적 반응": 3, "사례제시형 반응": 14, "소극적 반응": 36, "수용적 반응": 7, "자기주도적 반응": 5, "정보 제공형 반응": 31 },
      "맥락 파악": { "미온적 반응": 4, "비판적 반응": 2, "사례제시형 반응": 7, "소극적 반응": 18, "수용적 반응": 5, "자기주도적 반응": 3, "정보 제공형 반응": 18 },
      "부연 질문": { "미온적 반응": 4, "비판적 반응": 1, "사례제시형 반응": 4, "소극적 반응": 10, "수용적 반응": 3, "자기주도적 반응": 2, "정보 제공형 반응": 16 },
      "상황 안내": { "미온적 반응": 2, "비판적 반응": 1, "사례제시형 반응": 0, "소극적 반응": 4, "수용적 반응": 0, "자기주도적 반응": 3, "정보 제공형 반응": 6 },
      "열린 질문": { "미온적 반응": 1, "비판적 반응": 0, "사례제시형 반응": 2, "소극적 반응": 7, "수용적 반응": 5, "자기주도적 반응": 1, "정보 제공형 반응": 9 },
      "적극적 경청": { "미온적 반응": 6, "비판적 반응": 1, "사례제시형 반응": 6, "소극적 반응": 13, "수용적 반응": 3, "자기주도적 반응": 2, "정보 제공형 반응": 14 },
      "전문 용어 사용": { "미온적 반응": 0, "비판적 반응": 1, "사례제시형 반응": 0, "소극적 반응": 1, "수용적 반응": 0, "자기주도적 반응": 0, "정보 제공형 반응": 0 },
      "정보 요청": { "미온적 반응": 0, "비판적 반응": 1, "사례제시형 반응": 1, "소극적 반응": 10, "수용적 반응": 1, "자기주도적 반응": 1, "정보 제공형 반응": 4 },
      "정중한 인사": { "미온적 반응": 1, "비판적 반응": 1, "사례제시형 반응": 3, "소극적 반응": 5, "수용적 반응": 1, "자기주도적 반응": 1, "정보 제공형 반응": 3 },
      "주제 전환": { "미온적 반응": 0, "비판적 반응": 0, "사례제시형 반응": 0, "소극적 반응": 2, "수용적 반응": 0, "자기주도적 반응": 0, "정보 제공형 반응": 0 },
    },
    Best: {
      "감정적 지지": { "미온적 반응": 2, "비판적 반응": 3, "사례제시형 반응": 1, "소극적 반응": 2, "수용적 반응": 0, "자기주도적 반응": 0, "정보 제공형 반응": 2 },
      "구체적인 질문": { "미온적 반응": 23, "비판적 반응": 3, "사례제시형 반응": 4, "소극적 반응": 65, "수용적 반응": 43, "자기주도적 반응": 2, "정보 제공형 반응": 71 },
      "맥락 파악": { "미온적 반응": 5, "비판적 반응": 2, "사례제시형 반응": 1, "소극적 반응": 40, "수용적 반응": 28, "자기주도적 반응": 2, "정보 제공형 반응": 18 },
      "부연 질문": { "미온적 반응": 2, "비판적 반응": 4, "사례제시형 반응": 1, "소극적 반응": 31, "수용적 반응": 28, "자기주도적 반응": 3, "정보 제공형 반응": 19 },
      "상황 안내": { "미온적 반응": 4, "비판적 반응": 0, "사례제시형 반응": 3, "소극적 반응": 24, "수용적 반응": 7, "자기주도적 반응": 4, "정보 제공형 반응": 19 },
      "열린 질문": { "미온적 반응": 3, "비판적 반응": 2, "사례제시형 반응": 2, "소극적 반응": 21, "수용적 반응": 9, "자기주도적 반응": 0, "정보 제공형 반응": 10 },
      "적극적 경청": { "미온적 반응": 2, "비판�� 반응": 3, "사례제시형 반응": 0, "소극적 반응": 30, "수용적 반응": 24, "자기주도적 반응": 1, "정보 제공형 반응": 27 },
      "전문 용어 사용": { "미온적 반응": 0, "비판적 반응": 0, "사례제시형 반응": 0, "소극적 반응": 2, "수용적 반응": 1, "자기주도적 반응": 0, "정보 제공형 반응": 4 },
      "정보 요청": { "미온적 반응": 0, "비판적 반응": 0, "사례제시형 반응": 0, "소극적 반응": 16, "수용적 반응": 5, "자기주도적 반응": 0, "정보 제공형 반응": 16 },
      "정중한 인사": { "미온적 반응": 2, "비판적 반응": 2, "사례제시형 반응": 2, "소극적 반응": 29, "수용적 반응": 8, "자기주도적 반응": 1, "정보 제공형 반응": 26 },
      "주제 전환": { "미온적 반응": 0, "비판적 반응": 0, "사례제시형 반응": 0, "소극적 반응": 1, "수용적 반응": 2, "자기주도적 반응": 0, "정보 제공형 반응": 0 }
    }
  };

  React.useEffect(() => {
    ["Best", "Normal", "Worst"].forEach((scenarioType) => {
      const { skills, responses, zData } = prepareHeatmapData(tables[scenarioType]);
      // const isHighlighted = scenarioType === scenario;

      const data = [
        {
          z: zData,
          x: responses,
          y: skills,
          type: "heatmap",
          hoverongaps: false,
          colorscale: [
            [0, "EFE4F9" ],
            [0.3, "CFB1EC" ],
            [1, "9364D1" ],
          ],
          // opacity: isHighlighted ? 1 : 0.4,
        },
      ];

      const layout = {
        title: {
          text: `${scenarioType} Scenario`,
          font: { size: 10 },
        },
        xaxis: {
          title: "Interviewee Responses",
          titlefont: { size: 11 },
          tickfont: { size: 10 },
        },
        yaxis: {
          title: "Interviewer Skills",
          titlefont: { size: 11 },
          tickfont: { size: 10 },
        },
        margin: { t: 50, l: 100, r: 10, b: 90 },
        paper_bgcolor: "rgba(0,0,0,0)",
        plot_bgcolor: "rgba(0,0,0,0)",
        autosize: true,
      };

      const config = {
        responsive: true,
      };

      Plotly.newPlot(`heatmap-${scenarioType}`, data, layout, config);
    });
  }, [scenario]);

  return (
    <div>
      <div style={{ 
        display: "flex", 
        flexDirection: "row",
        gap: "20px",
        justifyContent: "space-between",
        marginBottom: "60px"
      }}>
        {["Best", "Normal", "Worst"].map((scenarioType, index) => (
          <div 
            key={index} 
            id={`heatmap-${scenarioType}`} 
            style={{ 
              width: "400px",
              height: "400px"
            }} 
          />
        ))}
      </div>
      <div className="detail-text">
        <div className="insight-section">
          <strong>✔️ Core Skills and High-Frequency Responses : </strong>
          <p>
            • Specific Questions (구체적인 질문), Active Listening (적극적 경청), Context Understanding (맥락 파악), and Follow-Up Questions (부연 질문): These core skills appear most frequently across all response types, playing a crucial role in deepening the interview and enhancing information exchange.
            <br/><br/>
            • Information-Providing Responses (정보 제공형 반응): These responses are strongly associated with core skills, showing the highest frequency (18,244 instances).
            <br/><br/>
            • Passive Responses (소극적 반응): Similarly influenced, with 18,090 occurrences, reflecting their significance in interview dynamics.</p>
        </div>

        <div className="insight-section">
          <strong>✔️ Low-Frequency Skills :</strong>
          <p>
            • Topic Transition (주제 전환):Displays the lowest frequency across all response types, with a maximum of 357 instances. Its limited use suggests a minor role in guiding the flow of interviews.
            <br/><br/>
            • Use of Professional Terminology (전문 용어 사용):Impacts Information-Providing Responses (443 instances) but remains underutilized overall, indicating a niche role.
            <br/><br/>
            • Emotional Support (감정적 지지):Primarily associated with Passive Responses (467 instances), emphasizing its contribution to emotionally stabilizing the interview environment.</p>
        </div>

        <div className="key-insight">
          <strong>📌 Key Insights:</strong>
          <p>
            Core Skills: Specific Questions, Active Listening, Context Understanding, and Follow-Up Questions are essential for eliciting detailed and meaningful responses, particularly in the case of Information-Providing and Passive Responses.
            <br/><br/>
            Specialized Skills: While less frequent, Topic Transition, Use of Professional Terminology, and Emotional Support play specialized roles in certain contexts, complementing the overall interview process.
          </p>
        </div>
      </div>
    </div>
  )
};  

Chart1_7.propTypes = {
  scenario: PropTypes.oneOf(["Best", "Normal", "Worst"]).isRequired,
};

export default Chart1_7;

