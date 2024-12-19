import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const Chart1_6 = () => {
  // Calculate total responses for each scenario
  const getTotalResponses = (scenario) => {
    const responses = {
      Best: 35 + 17 + 14 + 187 + 91 + 9 + 162,
      Normal: 14 + 7 + 22 + 66 + 16 + 10 + 61,
      Worst: 9 + 4 + 31 + 52 + 22 + 5 + 77
    };
    return responses[scenario];
  };

  // Calculate percentages for each response type
  const data = [
    {
      response: "Indifferent Response",
      Best: (20 / getTotalResponses("Best") * 100).toFixed(1),
      Normal: (14 / getTotalResponses("Normal") * 100).toFixed(1),
      Worst: (9 / getTotalResponses("Worst") * 100).toFixed(1)
    },
    {
      response: "Critical Response",
      Best: (17 / getTotalResponses("Best") * 100).toFixed(1),
      Normal: (7 / getTotalResponses("Normal") * 100).toFixed(1),
      Worst: (4 / getTotalResponses("Worst") * 100).toFixed(1)
    },
    {
      response: "Example-Providing Response",
      Best: (50 / getTotalResponses("Best") * 100).toFixed(1),
      Normal: (22 / getTotalResponses("Normal") * 100).toFixed(1),
      Worst: (31 / getTotalResponses("Worst") * 100).toFixed(1)
    },
    {
      response: "Passive Response",
      Best: (187 / getTotalResponses("Best") * 100).toFixed(1),
      Normal: (66 / getTotalResponses("Normal") * 100).toFixed(1),
      Worst: (52 / getTotalResponses("Worst") * 100).toFixed(1)
    },
    {
      response: "Receptive Response",
      Best: (91 / getTotalResponses("Best") * 100).toFixed(1),
      Normal: (16 / getTotalResponses("Normal") * 100).toFixed(1),
      Worst: (22 / getTotalResponses("Worst") * 100).toFixed(1)
    },
    {
      response: "Proactive Response",
      Best: (9 / getTotalResponses("Best") * 100).toFixed(1),
      Normal: (10 / getTotalResponses("Normal") * 100).toFixed(1),
      Worst: (5 / getTotalResponses("Worst") * 100).toFixed(1)
    },
    {
      response: "Information-Providing Response",
      Best: (162 / getTotalResponses("Best") * 100).toFixed(1),
      Normal: (61 / getTotalResponses("Normal") * 100).toFixed(1),
      Worst: (77 / getTotalResponses("Worst") * 100).toFixed(1)
    }
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "100%" }}>
      <div style={{ width: "800px", marginBottom: "20px", marginLeft: "-110px" }}>
        <BarChart
          width={900}
          height={600}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 50
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            dataKey="response" 
            angle={-45} 
            textAnchor="end"
            interval={0}
            height={80}
            tick={{ fontSize: 12 }}
          />
          <YAxis 
            tick={{ fontSize: 12 }}
            label={{ value: 'ratio (%)', angle: -90, position: 'insideLeft', offset: 0 }}
            domain={[0, 40]}
          />
          <Tooltip formatter={(value) => [`${value}%`, ""]} />
          <Legend 
            verticalAlign="bottom" 
            wrapperStyle={{ paddingTop: "50px" }}
          />
          <Bar dataKey="Best" fill="#63B594" name="Best" /> 
          <Bar dataKey="Normal" fill="#CECE73" name="Normal" />
          <Bar dataKey="Worst" fill="#B584D1" name="Worst" />
        </BarChart>
      </div>

      <div className="detail-text">
        <div className="insight-section">
          <strong>✔️ Interviewee Skill Distribution</strong>
          <p>
            The use of specific questions, context understanding, and active listening was most frequent across all scenarios. In the best scenario, the proportions of emotional support, follow-up questions, and polite greetings were notably higher compared to other scenarios.
          </p>
        </div>

        <div className="insight-section">
          <strong>✔️ Interviewee Response Distribution</strong>
          <p>
            Passive responses and information-providing responses accounted for the largest proportions of all responses. In the best scenario, receptive responses were relatively more frequent compared to other scenarios.
          </p>
        </div>

        <div className="key-insight">
          <strong>📌 Key Insights:</strong>
          <p>
            The interviewer’s skill usage underscores the importance of fostering a supportive and engaging 
            atmosphere to elicit more positive and interactive responses. 
            While there were slight differences across scenarios, the overall distributions were notably 
            similar. This could be attributed to the small sample size or the fact that 
            both interviewer skill types and interviewee response types were automatically 
            categorized and extracted using LLMs. These findings highlight the need for further research 
            to refine and improve the methods of categorizing and classifying these types more effectively.
          </p>
        </div>
      </div>

    </div>
  );
};

export default Chart1_6;