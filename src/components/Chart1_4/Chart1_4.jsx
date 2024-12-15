import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const Chart1_4 = () => {
  const rawSkillData = [
    { skill: "감정적 지지", joy: 2, neutral: 7, sadness: 3, disgust: 0, surprise: 0, fear: 0 },
    { skill: "구체적인 질문", joy: 2, neutral: 395, sadness: 9, disgust: 1, surprise: 10, fear: 0 },
    { skill: "맥락 파악", joy: 2, neutral: 213, sadness: 6, disgust: 0, surprise: 3, fear: 0 },
    { skill: "부연 질문", joy: 1, neutral: 150, sadness: 2, disgust: 2, surprise: 6, fear: 0 },
    { skill: "상황 안내", joy: 1, neutral: 98, sadness: 4, disgust: 0, surprise: 6, fear: 1 },
    { skill: "열린 질문", joy: 3, neutral: 83, sadness: 0, disgust: 0, surprise: 6, fear: 0 },
    { skill: "적극적 경청", joy: 4, neutral: 157, sadness: 5, disgust: 0, surprise: 5, fear: 0 },
    { skill: "전문 용어 사용", joy: 0, neutral: 12, sadness: 0, disgust: 0, surprise: 0, fear: 0 },
    { skill: "정보 요청", joy: 1, neutral: 66, sadness: 2, disgust: 0, surprise: 3, fear: 0 },
    { skill: "정중한 인사", joy: 3, neutral: 90, sadness: 5, disgust: 1, surprise: 4, fear: 0 },
    { skill: "주제 전환", joy: 1, neutral: 8, sadness: 0, disgust: 0, surprise: 0, fear: 0 },
  ];

  const rawResponseData = [
    { response: "미온적 반응", anger: 0, disgust: 1, fear: 1, joy: 2, neutral: 50, sadness: 2, surprise: 2 },
    { response: "비판적 반응", anger: 0, disgust: 4, fear: 2, joy: 0, neutral: 10, sadness: 11, surprise: 1 },
    { response: "사례제시형 반응", anger: 0, disgust: 0, fear: 1, joy: 10, neutral: 49, sadness: 7, surprise: 0 },
    { response: "소극적 반응", anger: 0, disgust: 5, fear: 2, joy: 3, neutral: 244, sadness: 44, surprise: 7 },
    { response: "수용적 반응", anger: 0, disgust: 0, fear: 0, joy: 21, neutral: 107, sadness: 0, surprise: 1 },
    { response: "자기주도적 반응", anger: 0, disgust: 0, fear: 0, joy: 3, neutral: 20, sadness: 2, surprise: 0 },
    { response: "정보 제공형 반응", anger: 1, disgust: 0, fear: 1, joy: 17, neutral: 272, sadness: 9, surprise: 0 },
  ];

  const applyLogTransform = (data) =>
    data.map((entry) => {
      const transformedEntry = { ...entry };
      Object.keys(entry).forEach((key) => {
        if (key !== "skill" && key !== "response") {
          transformedEntry[key] = Math.log(entry[key] + 1); // log(x + 1) 변환
        }
      });
      return transformedEntry;
    });

  const skillData = applyLogTransform(rawSkillData);
  const responseData = applyLogTransform(rawResponseData);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      {/* Chart for Sentiment Counts by Skill */}
      <div style={{ marginLeft: "-10px" }}>
        <div style={{ textAlign: "center", fontSize: "0.7rem", marginBottom: "5px", fontWeight: "350" }}>
          Sentiment Counts by Skill (Log Transformed)
        </div>
        <BarChart
          width={650}
          height={350}
          data={skillData}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="skill"
            tick={{ fontSize: 10 }}
            angle={-45}
            textAnchor="end"
          />
          <YAxis tick={{ fontSize: 10 }} />
          <Tooltip contentStyle={{ fontSize: "10px" }} />
          <Legend className="custom-legend" wrapperStyle={{ fontSize: "10px", padding: "20px", marginTop: "20px" }} />
          <Bar dataKey="joy" name="Joy (Log)" fill="#f6c23e" />
          <Bar dataKey="neutral" name="Neutral (Log)" fill="#4e73df" />
          <Bar dataKey="sadness" name="Sadness (Log)" fill="#e74a3b" />
          <Bar dataKey="disgust" name="Disgust (Log)" fill="#1cc88a" />
          <Bar dataKey="surprise" name="Surprise (Log)" fill="#36b9cc" />
          <Bar dataKey="fear" name="Fear (Log)" fill="#858796" />
        </BarChart>
      </div>

      {/* Chart for Sentiment Counts by Response */}
      <div style={{ marginLeft: "-10px" }}>
        <div style={{ textAlign: "center", fontSize: "0.7rem", marginBottom: "5px", fontWeight: "350" }}>
          Sentiment Counts by Response (Log Transformed)
        </div>
        <BarChart
          width={650}
          height={350}
          data={responseData}
          margin={{
            top: 0,
            right: 30,
            left: 0,
            bottom: 60,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="response"
            tick={{ fontSize: 10 }}
            angle={-45}
            textAnchor="end"
          />
          <YAxis tick={{ fontSize: 10 }} />
          <Tooltip contentStyle={{ fontSize: "10px" }} />
          <Legend className="custom-legend" wrapperStyle={{ fontSize: "10px", padding: "20px", marginTop: "20px" }} />
          <Bar dataKey="anger" name="Anger (Log)" fill="#d9534f" />
          <Bar dataKey="disgust" name="Disgust (Log)" fill="#1cc88a" />
          <Bar dataKey="fear" name="Fear (Log)" fill="#858796" />
          <Bar dataKey="joy" name="Joy (Log)" fill="#f6c23e" />
          <Bar dataKey="neutral" name="Neutral (Log)" fill="#4e73df" />
          <Bar dataKey="sadness" name="Sadness (Log)" fill="#e74a3b" />
          <Bar dataKey="surprise" name="Surprise (Log)" fill="#36b9cc" />
        </BarChart>
      </div>


    </div>
  );
};

export default Chart1_4;
