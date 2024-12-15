import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import "./Chart1_10.css";

const Chart1_10 = () => {
  // 데이터 설정
  const combinedData = {
    skills: [
      { skill: "전문 용어 사용", achievement: 3.142857 },
      { skill: "적극적 경청", achievement: 2.800000 },
      { skill: "정중한 인사", achievement: 2.734177 },
      { skill: "부연 질문", achievement: 2.702703 },
      { skill: "감정적 지지", achievement: 2.636364 },
      { skill: "맥락 파악", achievement: 2.598425 },
      { skill: "구체적인 질문", achievement: 2.566667 },
      { skill: "열린 질문", achievement: 2.530303 },
      { skill: "주제 전환", achievement: 2.500000 },
      { skill: "정보 요청", achievement: 2.469388 },
      { skill: "상황 안내", achievement: 2.410959 },
    ],
    responses: [
      { response: "미온적 반응", achievement: 2.724138 },
      { response: "자기주도적 반응", achievement: 2.720000 },
      { response: "수용적 반응", achievement: 2.705426 },
      { response: "비판적 반응", achievement: 2.678571 },
      { response: "소극적 반응", achievement: 2.613115 },
      { response: "정보 제공형 반응", achievement: 2.583333 },
      { response: "사례제시형 반응", achievement: 2.447761 },
    ],
  };

  return (
    <div style={{ textAlign: "center" }}>

      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "0px",
        marginLeft: "-10px"
      }}>
        {/* Skills Bar Chart */}
        <div style={{ marginLeft: "-30px" }}>
          <div style={{ textAlign: "center", fontSize: "0.7rem", marginBottom: "10px", fontWeight: "350",}}>
            Skills & Achievement (All)
          </div>
          <BarChart
            width={500}
            height={270}
            data={combinedData.skills}
            margin={{ top: 20, right: 0, left: 0, bottom: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="skill"
              tick={{ fontSize: 10 }}
              angle={-40}
              textAnchor="end"
            />
            <YAxis tick={{ fontSize: 10 }} domain={[0, 3.3]}/>
            <Tooltip contentStyle={{ fontSize: "10px" }} />
            <Legend
              wrapperStyle={{ fontSize: "10px", marginTop: "10px", paddingTop: "20px" }}
            />
            <Bar dataKey="achievement" name="Achievement Rate" fill="skyblue" barSize={20} />
          </BarChart>
        </div>

        {/* Responses Bar Chart */}
        <div>
          <div style={{ textAlign: "center", fontSize: "0.7rem", marginBottom: "10px", fontWeight: "350" }}>
            Responses & Achievement (All)
          </div>
          <BarChart
            width={400}
            height={270}
            data={combinedData.responses}
            margin={{ top: 20, right: 20, left: 0, bottom: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="response"
              tick={{ fontSize: 10 }}
              angle={-40}
              textAnchor="end"
            />
            <YAxis tick={{ fontSize: 10 }} domain={[0, 3.3]}/>
            <Tooltip contentStyle={{ fontSize: "10px" }} />
            <Legend
              wrapperStyle={{ fontSize: "10px", marginTop: "10px", paddingTop: "20px" }}
            />
            <Bar dataKey="achievement" name="Achievement Rate" fill="lightpink" barSize={20} />
          </BarChart>
        </div>
      </div>

      <div className="detail-text" style={{ textAlign: "left" }}>

        <div className="key-insight">
          <strong>📌 Key Insights:</strong>
          <p>
            • Core Skills: Specific Questions, Active Listening, Context Understanding, and Follow-Up Questions are essential for eliciting detailed and meaningful responses, particularly in the case of Information-Providing and Passive Responses. 
            <br/><br/>
            • The Best Scenario stands out with a relatively higher proportion of receptive responses (수용적 반응), indicating a more open and positive engagement.
            <br/><br/>
            • Specialized Skills: While less frequent, Topic Transition, Use of Professional Terminology, and Emotional Support play specialized roles in certain contexts, complementing the overall interview process.
            <br/><br/>
            • </p>
        </div>
      </div>


    </div>
  );
};

Chart1_10.propTypes = {
  // PropTypes에서도 제거
};

export default Chart1_10;
