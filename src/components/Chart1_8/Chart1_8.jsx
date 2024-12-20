import { useEffect } from "react";
import PropTypes from "prop-types";
import Plotly from "plotly.js-dist";

const prepareCorrelationData = (data) => {
  const skills = Object.keys(data);
  const zData = skills.map((skill) =>
    skills.map((targetSkill) => data[skill][targetSkill] || 0)
  );
  return { skills, zData };
};

const Chart1_8 = ({ scenario }) => {
  const tables = {
    Worst: {
        "감정적 지지": {
            "구체적인 질문": 0.809040, "맥락 파악": 0.801784, "부연 질문": 0.748455, "상황 안내": 0.801270,
            "열린 질문": 1.000000, "적극적 경청": 0.668153, "전문 용어 사용": 0.277778, "정보 요청": 0.554700,
            "정중한 인사": 0.680414, "주제 전환": 1.000000, "감정적 지지": 1.000000
        },
        "구체적인 질문": {
            "구체적인 질문": 1.000000, "맥락 파악": 0.991031, "부연 질문": 0.963343, "상황 안내": 0.814955,
            "열린 질문": 0.809040, "적극적 경청": 0.936975, "전문 용어 사용": 0.426993, "정보 요청": 0.841452,
            "정중한 인사": 0.651404, "주제 전환": 0.809040, "감정적 지지": 0.809040
        },
        "맥락 파악": {
            "구체적인 질문": 0.991031, "맥락 파악": 1.000000, "부연 질문": 0.981981, "상황 안내": 0.770934,
            "열린 질문": 0.801784, "적극적 경청": 0.964286, "전문 용어 사용": 0.489979, "정보 요청": 0.815374,
            "정중한 인사": 0.727393, "주제 전환": 0.801784, "감정적 지지": 0.801784
        },
        "부연 질문": {
            "구체적인 질문": 0.963343, "맥락 파악": 0.981981, "부연 질문": 1.000000, "상황 안내": 0.738350,
            "열린 질문": 0.748455, "적극적 경청": 0.981981, "전문 용어 사용": 0.476290, "정보 요청": 0.849208,
            "정중한 인사": 0.796296, "주제 전환": 0.748455, "감정적 지지": 0.748455
        },
        "상황 안내": {
            "구체적인 질문": 0.814955, "맥락 파악": 0.770934, "부연 질문": 0.738350, "상황 안내": 1.000000,
            "열린 질문": 0.801270, "적극적 경청": 0.624090, "전문 용어 사용": 0.251828, "정보 요청": 0.571454,
            "정중한 인사": 0.514041, "주제 전환": 0.801270, "감정적 지지": 0.801270
        },
        "열린 질문": {
            "구체적인 질문": 0.809040, "맥락 파악": 0.801784, "부연 질문": 0.748455, "상황 안내": 0.801270,
            "열린 질문": 1.000000, "적극적 경청": 0.668153, "전문 용어 사용": 0.277778, "정보 요청": 0.554700,
            "정중한 인사": 0.680414, "주제 전환": 1.000000, "감정적 지지": 1.000000
        },
        "적극적 경청": {
            "구체적인 질문": 0.936975, "맥락 파악": 0.964286, "부연 질문": 0.981981, "상황 안내": 0.624090,
            "열린 질문": 0.668153, "적극적 경청": 1.000000, "전문 용어 사용": 0.445435, "정보 요청": 0.852437,
            "정중한 인사": 0.763763, "주제 전환": 0.668153, "감정적 지지": 0.668153
        },
        "전문 용어 사용": {
            "구체적인 질문": 0.426993, "맥락 파악": 0.489979, "부연 질문": 0.476290, "상황 안내": 0.251828,
            "열린 질문": 0.277778, "적극적 경청": 0.445435, "전문 용어 사용": 1.000000, "정보 요청": 0.138675,
            "정중한 인사": 0.453609, "주제 전환": 0.277778, "감정적 지지": 0.277778
        },
        "정보 요청": {
            "구체적인 질문": 0.841452, "맥락 파악": 0.815374, "부연 질문": 0.849208, "상황 안내": 0.571454,
            "열린 질문": 0.554700, "적극적 경청": 0.852437, "전문 용어 사용": 0.138675, "정보 요청": 1.000000,
            "정중한 인사": 0.490653, "주제 전환": 0.554700, "감정적 지지": 0.554700
        },
        "정중한 인사": {
            "구체적인 질문": 0.651404, "맥락 파악": 0.727393, "부연 질문": 0.796296, "상황 안내": 0.514041,
            "열린 질문": 0.680414, "적극적 경청": 0.763763, "전문 용어 사용": 0.453609, "정보 요청": 0.490653,
            "정중한 인사": 1.000000, "주제 전환": 0.680414, "감정적 지지": 0.680414
        },
        "주제 전환": {
            "구체적인 질문": 0.809040, "맥락 파악": 0.801784, "부연 질문": 0.748455, "상황 안내": 0.801270,
            "열린 질문": 1.000000, "적극적 경청": 0.668153, "전문 용어 사용": 0.277778, "정보 요청": 0.554700,
            "정중한 인사": 0.680414, "주제 전환": 1.000000, "감정적 지지": 1.000000
        }
    },
    Normal: {
        "감정적 지지": {
            "감정적 지지": 1.000000, "구체적인 질문": 0.158114, "맥락 파악": 0.398862, "부연 질문": 0.319090,
            "상황 안내": 0.079772, "열린 질문": 0.638179, "적극적 경청": 0.319090, "전문 용어 사용": -0.400000,
            "정보 요청": 0.261684, "정중한 인사": 0.000000, "주제 전환": -0.258199
        },
        "구체적인 질문": {
            "감정적 지지": 0.158114, "구체적인 질문": 1.000000, "맥락 파악": 0.954994, "부연 질문": 0.954994,
            "상황 안내": 0.468487, "열린 질문": 0.828862, "적극적 경청": 0.954994, "전문 용어 사용": 0.000000,
            "정보 요청": 0.610786, "정중한 인사": 0.896421, "주제 전환": 0.612372
        },
        "맥락 파악": {
            "감정적 지지": 0.398862, "구체적인 질문": 0.954994, "맥락 파악": 1.000000, "부연 질문": 0.927273,
            "상황 안내": 0.400000, "열린 질문": 0.945455, "적극적 경청": 0.927273, "전문 용어 사용": -0.079772,
            "정보 요청": 0.695837, "정중한 인사": 0.874383, "주제 전환": 0.514929
        },
        "부연 질문": {
            "감정적 지지": 0.319090, "구체적인 질문": 0.954994, "맥락 파악": 0.927273, "부연 질문": 1.000000,
            "상황 안내": 0.554545, "열린 질문": 0.845455, "적극적 경청": 1.000000, "전문 용어 사용": -0.159545,
            "정보 요청": 0.526848, "정중한 인사": 0.783929, "주제 전환": 0.411943
        },
        "상황 안내": {
            "감정적 지지": 0.079772, "구체적인 질문": 0.468487, "맥락 파악": 0.400000, "부연 질문": 0.554545,
            "상황 안내": 1.000000, "열린 질문": 0.436364, "적극적 경청": 0.554545, "전문 용어 사용": 0.159545,
            "정보 요청": 0.576551, "정중한 인사": 0.422116, "주제 전환": 0.411943
        },
        "열린 질문": {
            "감정적 지지": 0.638179, "구체적인 질문": 0.828862, "맥락 파악": 0.945455, "부연 질문": 0.845455,
            "상황 안내": 0.436364, "열린 질문": 1.000000, "적극적 경청": 0.845455, "전문 용어 사용": -0.159545,
            "정보 요청": 0.725659, "정중한 인사": 0.723627, "주제 전환": 0.411943
        },
        "적극적 경청": {
            "감정적 지지": 0.319090, "구체적인 질문": 0.954994, "맥락 파악": 0.927273, "부연 질문": 1.000000,
            "상황 안내": 0.554545, "열린 질문": 0.845455, "적극적 경청": 1.000000, "전문 용어 사용": -0.159545,
            "정보 요청": 0.526848, "정중한 인사": 0.783929, "주제 전환": 0.411943
        },
        "전문 용어 사용": {
            "감정적 지지": -0.400000, "구체적인 질문": 0.000000, "맥락 파악": -0.079772, "부연 질문": -0.159545,
            "상황 안내": 0.159545, "열린 질문": -0.159545, "적극적 경청": -0.159545, "전문 용어 사용": 1.000000,
            "정보 요청": 0.436139, "정중한 인사": 0.264575, "주제 전환": 0.645497
        },
        "정보 요청": {
            "감정적 지지": 0.261684, "구체적인 질문": 0.610786, "맥락 파악": 0.695837, "부연 질문": 0.526848,
            "상황 안내": 0.576551, "열린 질문": 0.725659, "적극적 경청": 0.526848, "전문 용어 사용": 0.436139,
            "정보 요청": 1.000000, "정중한 인사": 0.791257, "주제 전환": 0.675664
        },
        "정중한 인사": {
            "감정적 지지": 0.000000, "구체적인 질문": 0.896421, "맥락 파악": 0.874383, "부연 질문": 0.783929,
            "상황 안내": 0.422116, "열린 질문": 0.723627, "적극적 경청": 0.783929, "전문 용어 사용": 0.264575,
            "정보 요청": 0.791257, "정중한 인사": 1.000000, "주제 전환": 0.683130
        },
        "주제 전환": {
            "감정적 지지": -0.258199, "구체적인 질문": 0.612372, "맥락 파악": 0.514929, "부연 질문": 0.411943,
            "상황 안내": 0.411943, "열린 질문": 0.411943, "적극적 경청": 0.411943, "전문 용어 사용": 0.645497,
            "정보 요청": 0.675664, "정중한 인사": 0.683130, "주제 전환": 1.000000
        }
    },
    Best: {
        "감정적 지지": {
            "감정적 지지": 1.000000, "구체적인 질문": 0.187120, "맥락 파악": 0.047203, "부연 질문": 0.093560,
            "상황 안내": -0.141610, "열린 질문": 0.264339, "적극적 경청": 0.355529, "전문 용어 사용": 0.072261,
            "정보 요청": 0.073060, "정중한 인사": 0.271857, "주제 전환": -0.326732
        },
        "구체적인 질문": {
            "감정적 지지": 0.187120, "구체적인 질문": 1.000000, "맥락 파악": 0.774806, "부연 질문": 0.607143,
            "상황 안내": 0.810844, "열린 질문": 0.954994, "적극적 경청": 0.785714, "전문 용어 사용": 0.906327,
            "정보 요청": 0.896421, "정중한 인사": 0.926562, "주제 전환": 0.445435
        },
        "맥락 파악": {
            "감정적 지지": 0.047203, "구체적인 질문": 0.774806, "맥락 파악": 1.000000, "부연 질문": 0.882919,
            "상황 안내": 0.881818, "열린 질문": 0.881818, "적극적 경청": 0.900937, "전문 용어 사용": 0.795243,
            "정보 요청": 0.844232, "정중한 인사": 0.822753, "주제 전환": 0.764093
        },
        "부연 질문": {
            "감정적 지지": 0.093560, "구체적인 질문": 0.607143, "맥락 파악": 0.882919, "부연 질문": 1.000000,
            "상황 안내": 0.738769, "열린 질문": 0.738769, "적극적 경청": 0.928571, "전문 용어 사용": 0.788110,
            "정보 요청": 0.836660, "정중한 인사": 0.778312, "주제 전환": 0.757240
        },
        "상황 안내": {
            "감정적 지지": -0.141610, "구체적인 질문": 0.810844, "맥락 파악": 0.881818, "부연 질문": 0.738769,
            "상황 안내": 1.000000, "열린 질문": 0.836364, "적극적 경청": 0.774806, "전문 용어 사용": 0.874767,
            "정보 요청": 0.904534, "정중한 인사": 0.785355, "주제 전환": 0.584307
        },
        "열린 질문": {
            "감정적 지지": 0.264339, "구체적인 질문": 0.954994, "맥락 파악": 0.881818, "부연 질문": 0.738769,
            "상황 안내": 0.836364, "열린 질문": 1.000000, "적극적 경청": 0.882919, "전문 용어 사용": 0.874767,
            "정보 요청": 0.904534, "정중한 인사": 0.972345, "주제 전환": 0.584307
        },
        "적극적 경청": {
            "감정적 지지": 0.355529, "구체적인 질문": 0.785714, "맥락 파악": 0.900937, "부연 질문": 0.928571,
            "상황 안내": 0.774806, "열린 질문": 0.882919, "적극적 경청": 1.000000, "전문 용어 사용": 0.866921,
            "정보 요청": 0.896421, "정중한 인사": 0.889499, "주제 전환": 0.579066
        },
        "전문 용어 사용": {
            "감정적 지지": 0.072261, "구체적인 질문": 0.906327, "맥락 파악": 0.795243, "부연 질문": 0.788110,
            "상황 안내": 0.874767, "열린 질문": 0.874767, "적극적 경청": 0.866921, "전문 용어 사용": 1.000000,
            "정보 요청": 0.989071, "정중한 인사": 0.899647, "주제 전환": 0.491473
        },
        "정보 요청": {
            "감정적 지지": 0.073060, "구체적인 질문": 0.896421, "맥락 파악": 0.844232, "부연 질문": 0.836660,
            "상황 안내": 0.904534, "열린 질문": 0.904534, "적극적 경청": 0.896421, "전문 용어 사용": 0.989071,
            "정보 요청": 1.000000, "정중한 인사": 0.930261, "주제 전환": 0.571440
        },
        "정중한 인사": {
            "감정적 지지": 0.271857, "구체적인 질문": 0.926562, "맥락 파악": 0.822753, "부연 질문": 0.778312,
            "상황 안내": 0.785355, "열린 질문": 0.972345, "적극적 경청": 0.889499, "전문 용어 사용": 0.899647,
            "정보 요청": 0.930261, "정중한 인사": 1.000000, "주제 전환": 0.600925
        },
        "주제 전환": {
            "감정적 지지": -0.326732, "구체적인 질문": 0.445435, "맥락 파악": 0.764093, "부연 질문": 0.757240,
            "상황 안내": 0.584307, "열린 질문": 0.584307, "적극적 경청": 0.579066, "전문 용어 사용": 0.491473,
            "정보 요청": 0.571440, "정중한 인사": 0.600925, "주제 전환": 1.000000
        }
    }
  };

  useEffect(() => {
    ["Best", "Normal", "Worst"].forEach((scenarioType) => {
      const { skills, zData } = prepareCorrelationData(tables[scenarioType]);
    //   const isHighlighted = scenarioType === scenario;

      const data = [
        {
          z: zData,
          x: skills,
          y: skills,
          type: "heatmap",
          hoverongaps: false,
          colorscale: [
            [0, "EBE378"],
            [0.5, "EFFDFF"],
            [1, "6B8FE2"],
          ],
        //   opacity: isHighlighted ? 1 : 0.4, // 선택된 시나리오 강조
        },
      ];

      const layout = {
        title: {
          text: `${scenarioType} Scenario - Interviewer Skill Correlation`,
          font: { size: 14 },
        },
        xaxis: { title: "Skills", titlefont: { size: 12 }, tickfont: { size: 10 } },
        yaxis: { title: "Skills", titlefont: { size: 12 }, tickfont: { size: 10 } },
        margin: { t: 50, l: 80, r: 20, b: 80 },
        paper_bgcolor: "rgba(0,0,0,0)",
        plot_bgcolor: "rgba(0,0,0,0)",
      };

      Plotly.newPlot(`correlation-heatmap-${scenarioType}`, data, layout);
    });
  }, [scenario]);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      {["Best", "Normal", "Worst"].map((scenarioType, index) => (
        <div
          key={index}
          id={`correlation-heatmap-${scenarioType}`}
          style={{ width: "600px", height: "500px" }}
        />
      ))}
        <div className="detail-text" style={{ fontSize: "0.7rem", marginTop: "10px" }}>

        </div>
    </div>
  );
};

Chart1_8.propTypes = {
  scenario: PropTypes.oneOf(["Best", "Normal", "Worst"]).isRequired,
};

export default Chart1_8;
