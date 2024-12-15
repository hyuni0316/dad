import PropTypes from "prop-types";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import "./Chart1_3.css";

const Chart1_3 = ({ scenario }) => {
  const rawData = {
    Best: [
      { sentiment: "neutral", interviewer: 448, interviewee: 447 },
      { sentiment: "joy", interviewer: 5, interviewee: 8 },
      { sentiment: "sadness", interviewer: 16, interviewee: 38 },
      { sentiment: "surprise", interviewer: 42, interviewee: 11 },
      { sentiment: "disgust", interviewer: 4, interviewee: 5 },
      { sentiment: "fear", interviewer: 1, interviewee: 7 },
      { sentiment: "anger", interviewer: 0, interviewee: 0 },
    ],
    Normal: [
      { sentiment: "neutral", interviewer: 182, interviewee: 145 },
      { sentiment: "joy", interviewer: 8, interviewee: 24 },
      { sentiment: "sadness", interviewer: 8, interviewee: 24 },
      { sentiment: "surprise", interviewer: 1, interviewee: 0 },
      { sentiment: "disgust", interviewer: 0, interviewee: 3 },
      { sentiment: "fear", interviewer: 0, interviewee: 0 },
      { sentiment: "anger", interviewer: 0, interviewee: 0 },
    ],
    Worst: [
      { sentiment: "neutral", interviewer: 202, interviewee: 160 },
      { sentiment: "joy", interviewer: 5, interviewee: 24 },
      { sentiment: "sadness", interviewer: 4, interviewee: 13 },
      { sentiment: "surprise", interviewer: 0, interviewee: 0 },
      { sentiment: "disgust", interviewer: 0, interviewee: 2 },
      { sentiment: "fear", interviewer: 0, interviewee: 0 },
      { sentiment: "anger", interviewer: 0, interviewee: 1 },
    ],
  };

  // 로그 변환 적용
  const applyLogTransform = (data) => {
    return data.map((entry) => ({
      sentiment: entry.sentiment,
      interviewer: Math.log(entry.interviewer + 1), // log(x + 1)
      interviewee: Math.log(entry.interviewee + 1), // log(x + 1)
    }));
  };

  const transformedData = {
    Best: applyLogTransform(rawData.Best),
    Normal: applyLogTransform(rawData.Normal),
    Worst: applyLogTransform(rawData.Worst),
  };

  const getBarOpacity = (currentScenario) => {
    return currentScenario === scenario ? 1 : 0.3;
  };

  const commonProps = {
    width: 350,
    height: 380,
    margin: {
      top: 20,
      right: 0,
      left: 0,
      bottom: 50,
    }
  };

  return (
    <div className="flex justify-center items-start w-full">
      <div className="charts">
        {["Best", "Normal", "Worst"].map((scenarioType, index) => {
          const chartData = transformedData[scenarioType];
          return (
            <div key={index}>
              <h3 className="chart-title">{scenarioType} Scenario Emotion Distribution <br/>(Log Transformation)</h3>
              <BarChart
                {...commonProps}
                data={chartData}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="sentiment"
                  tick={{ fontSize: 12 }}
                  angle={-45}
                  textAnchor="end"
                  interval={0}
                />
                <YAxis tick={{ fontSize: 10 }} />
                <Tooltip contentStyle={{ fontSize: "12px" }} />
                <Legend wrapperStyle={{ fontSize: "12px", paddingTop: "30px" }} align="center" verticalAlign="bottom" />
                <Bar 
                  dataKey="interviewer" 
                  name="Interviewer" 
                  fill="skyblue" 
                  barSize={12}
                  opacity={() => getBarOpacity(scenarioType)}
                />
                <Bar 
                  dataKey="interviewee" 
                  name="Interviewee" 
                  fill="lightpink" 
                  barSize={12}
                  opacity={() => getBarOpacity(scenarioType)}
                />
              </BarChart>
            </div>
          );
        })}
      </div>

      <div className="detail-text">
        <div className="insight-section">
          <strong>✔️ Neutral Tone Throughout the Interview: </strong>
          <p>Both the interviewer and interviewee maintain a neutral and objective tone during the conversation, 
            ensuring a balanced and professional atmosphere.</p>
        </div>

        <div className="insight-section">
          <strong>✔️ Interviewer&apos;s Surprise: </strong>
          <p> The interviewer demonstrates a relatively higher level of surprise, 
            likely in response to unexpected insights or unanticipated answers from the interviewee.</p>
        </div>


        <div className="insight-section">
          <strong>✔️  Interviewee&apos;s Emotional Range: </strong>
          <p> The interviewee displays a broader range of emotions, including joy, sadness, fear, and disgust. 
            Notably, negative expressions become more frequent when discussing uncomfortable topics or providing suggestions for improvement, 
            reflecting their deeper emotional engagement with the subject matter.</p>
        </div>

        <div className="key-insight">
          <strong>📌  Key Insights: </strong>
          <p>While there are slight differences in the emotional distribution between the interviewer and interviewee, 
            the overwhelming dominance of the &quot;neutral&quot; category in emotion classification using LLMs diminishes its significance. 
            This suggests that when analyzing emotions in interview data, the limitations posed 
            by the high proportion of neutral classifications should be carefully considered.</p>
        </div>
      </div>
    </div>
  );
};

Chart1_3.propTypes = {
  scenario: PropTypes.oneOf(["Best", "Normal", "Worst"]).isRequired,
};

export default Chart1_3;
