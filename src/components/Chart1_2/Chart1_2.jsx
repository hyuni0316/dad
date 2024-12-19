import PropTypes from "prop-types";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import "./Chart1_2.css";

const Chart1_2 = () => {
  const data = {
    Best: [
      { section: "Introduction and Interview Explanation", interviewee: -95, interviewer: 380 },
      { section: "Basic Information Check", interviewee: -136, interviewer: 249 },
      { section: "Financial App Usage Status", interviewee: -1150, interviewer: 886 },
      { section: "Asset Management Methods", interviewee: -3807, interviewer: 4680 },
      { section: "MyData Service Related", interviewee: -1062, interviewer: 1434 },
      { section: "Loan and Insurance Management", interviewee: -5763, interviewer: 5701 },
      { section: "Securities and Investment Management", interviewee: -838, interviewer: 603 },
      { section: "Service Improvement Suggestions", interviewee: -3123, interviewer: 3320 },
      { section: "Conclusion", interviewee: -145, interviewer: 337 },
    ],
    Normal: [
      { section: "Introduction and Interview Explanation", interviewee: -58, interviewer: 560 },
      { section: "Basic Information Check", interviewee: -1129, interviewer: 891 },
      { section: "Asset Management Methods", interviewee: -895, interviewer: 758 },
      { section: "Loan and Insurance Management", interviewee: -500, interviewer: 561 },
      { section: "Securities and Investment Management", interviewee: -703, interviewer: 384 },
      { section: "Financial App Usage Status", interviewee: -3305, interviewer: 2175 },
      { section: "Experience and Perception of Financial Apps", interviewee: -2112, interviewer: 1825 },
      { section: "Service Improvement Suggestions", interviewee: -2292, interviewer: 2449 },
      { section: "Conclusion", interviewee: -110, interviewer: 205 },
    ],
    Worst: [
      { section: "Introduction and Interview Explanation", interviewee: 0, interviewer: 619 },
      { section: "Basic Information Check", interviewee: -2299, interviewer: 2237 },
      { section: "Asset Management Methods", interviewee: -141, interviewer: 313 },
      { section: "Loan and Insurance Management", interviewee: -737, interviewer: 828 },
      { section: "Securities and Investment Management", interviewee: -881, interviewer: 683 },
      { section: "Financial App Usage Status", interviewee: -2940, interviewer: 2258 },
      { section: "Service Improvement Suggestions", interviewee: -1059, interviewer: 869 },
      { section: "Experience and Perception of Financial Apps", interviewee: -2742, interviewer: 2449 },
      { section: "Service Improvement Suggestions 2", interviewee: -2873, interviewer: 3511 },
      { section: "Conclusion", interviewee: -180, interviewer: 314 },
    ],
  };

  const yDomain = [-6000, 6000]; // Y축 범위 설정

  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", gap: "80px" }}>
      {["Best", "Normal", "Worst"].map((scenarioType, index) => {
        const chartData = data[scenarioType];
        return (
          <div key={index} style={{ textAlign: "center", width: "100%" }}>
            <div
              style={{
                marginBottom: "0px",
                fontSize: "0.8rem",
                fontWeight: "bold",
              }}
            >
              Speech Volume ({scenarioType} Section)
            </div>
            <div style={{ width: '100%', maxWidth: '900px', margin: '0 auto' }}>
              <ResponsiveContainer width="100%" height={350}>
                <AreaChart
                  data={chartData}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 50,
                    bottom: 70,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis 
                    dataKey="section" 
                    label={{ value: "Section Timeline", position: "insideBottom", offset: -50, fontSize: 12, fontWeight: "bold" }} 
                    tick={{ fontSize: 8, textAnchor: "end", height: 60, width: 50 }}
                    interval={0} 
                  />
                  <YAxis 
                    domain={yDomain} // yDomain 적용
                    label={{ value: "Character Count", angle: -90, position: "insideLeft", fontSize: 12, fontWeight: "bold" }} 
                    tickFormatter={(tick) => Math.abs(tick)}
                    tick={{ fontSize: 11 }}
                  />
                  <Tooltip contentStyle={{ fontSize: "10px" }} />
                  <Legend wrapperStyle={{ fontSize: "10px", paddingTop: "15px" }} align="right" verticalAlign="top" />
                  <Area
                    dataKey="interviewer"
                    name="Interviewer"
                    fill="lightpink"
                    stroke="red"
                  />
                  <Area
                    dataKey="interviewee"
                    name="Interviewee"
                    fill="skyblue"
                    stroke="blue"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        );
      })}
    </div>
  );
};

Chart1_2.propTypes = {
  scenario: PropTypes.oneOf(["Best", "Normal", "Worst"]).isRequired,
};

export default Chart1_2;
