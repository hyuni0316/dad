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
      Best: (35 / getTotalResponses("Best") * 100).toFixed(1),
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
      Best: (14 / getTotalResponses("Best") * 100).toFixed(1),
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
          height={500}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 100
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
            label={{ value: '비율 (%)', angle: -90, position: 'insideLeft', offset: 0 }}
            domain={[0, 40]}
          />
          <Tooltip formatter={(value) => [`${value}%`, ""]} />
          <Legend />
          <Bar dataKey="Best" fill="#63B594" name="Best" /> 
          <Bar dataKey="Normal" fill="#CECE73" name="Normal" />
          <Bar dataKey="Worst" fill="#B584D1" name="Worst" />
        </BarChart>
      </div>

      <div className="detail-text">
        <div className="insight-section">
          <strong>✔️ Best Scenario:  </strong>
          <p>Passive Response (36.2%) and Information-Providing Response (31.4%) account for the highest proportions 
            of all responses. Receptive Response (17.6%) are also relatively more frequent compared to other scenarios, 
            suggesting a more engaged and collaborative tone overall.</p>
        </div>

        <div className="insight-section">
          <strong>✔️  Normal Scenario : </strong>
          <p>Passive Response (33.8%) and Information-Providing Response (31.3%) appear at similar levels, 
            with an increase in Example-Providing Response (11.3%), indicating a slightly broader range of response types and situational detail.</p>
        </div>

        <div className="insight-section">
          <strong>✔️  Worst Scenario : </strong>
          <p>Information-Providing Response (38.5%) dominate, followed by Passive Response (26%) 
            and Example-Providing Response (15.5%). The proportions of response types are more distinct in this scenario compared to the others, 
            highlighting a more polarized reaction pattern.</p>
        </div>

        <div className="key-insight">
          <strong>📌 Key Insights:</strong>
          <p>
            • Across all scenarios, Passive Response and Information-Providing Response consistently represent the majority of responses. 
            <br/><br/>
            • The Best Scenario stands out with a relatively higher proportion of Receptive Response, indicating a more open and positive engagement.
            <br/><br/>
            • In the Worst Scenario, there is a noticeable increase in Example-Providing Response, reflecting a tendency for interviewees 
              to illustrate their points with more situational context.
            <br/><br/>
            • Proactive Response and Critical Response remain low across all scenarios, suggesting these response types 
              are less characteristic in the given contexts.</p>
        </div>
      </div>

    </div>
  );
};

export default Chart1_6;