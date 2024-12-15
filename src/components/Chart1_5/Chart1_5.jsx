import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const Chart1_5 = () => {
  const data = [
    {
      skill: "Emotional Support",
      Best: 10,
      Normal: 2,
      Worst: 0
    },
    {
      skill: "Specific Questions",
      Best: 211,
      Normal: 105,
      Worst: 101
    },
    {
      skill: "Context Understanding",
      Best: 96,
      Normal: 57,
      Worst: 71
    },
    {
      skill: "Follow-Up Questions",
      Best: 88,
      Normal: 40,
      Worst: 33
    },
    {
      skill: "Situation Guidance",
      Best: 61,
      Normal: 18,
      Worst: 31
    },
    {
      skill: "Open-Ended Questions",
      Best: 47,
      Normal: 25,
      Worst: 20
    },
    {
      skill: "Active Listening",
      Best: 87,
      Normal: 45,
      Worst: 39
    },
    {
      skill: "Use of Professional Terminology",
      Best: 7,
      Normal: 2,
      Worst: 3
    },
    {
      skill: "Information Requests",
      Best: 37,
      Normal: 18,
      Worst: 17
    },
    {
      skill: "Polite Greeting",
      Best: 70,
      Normal: 16,
      Worst: 17
    },
    {
      skill: "Topic Transition",
      Best: 3,
      Normal: 2,
      Worst: 4
    }
  ];

  const getTotalResponses = (scenario) => {
    let total = 0;
    data.forEach(item => {
      total += item[scenario];
    });
    return total;
  };

  const bestTotal = getTotalResponses("Best");
  const normalTotal = getTotalResponses("Normal");
  const worstTotal = getTotalResponses("Worst");

  const percentageData = data.map(item => ({
    skill: item.skill,
    Best: (item.Best / bestTotal * 100).toFixed(1),
    Normal: (item.Normal / normalTotal * 100).toFixed(1),
    Worst: (item.Worst / worstTotal * 100).toFixed(1)
  }));

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "100%" }}>
      <div style={{ width: "800px", marginBottom: "20px", marginLeft: "-200px" }}>
        <BarChart
          width={1000}
          height={500}
          data={percentageData}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 100
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            dataKey="skill" 
            angle={-45} 
            textAnchor="end"
            interval={0}
            height={80}
            tick={{ fontSize: 12 }}
          />
          <YAxis 
            tick={{ fontSize: 12 }}
            label={{ value: '비율 (%)', angle: -90, position: 'insideLeft', offset: 0 }}
            domain={[0, 35]}
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
          <strong>✔️ Best Scenario:</strong>
          <p> The use of Specific Questions is most frequent in this scenario, playing a crucial role in the success of the interview. 
            This skill ensures a smooth conversational flow and actively engages the interviewee, encouraging them to participate more fully.</p>
        </div>

        <div className="insight-section">
          <strong>✔️ Normal Scenario:</strong>
          <p>  While Specific Questions and Context Understanding remain key skills, 
            their frequency is lower compared to the Best Scenario. This suggests a slight decline in the efficiency of interview progression, 
            potentially impacting the overall effectiveness of the conversation.</p>
        </div>
        <div className="insight-section">
          <strong>✔️ Worst Scenario:</strong>
          <p>   There is an increase in the use of Information Requests and Polite Greeting, 
            reflecting an effort to stabilize the interview. However, the frequency of Specific Questions and Context Understanding 
            is comparatively lower, which may hinder the natural flow and depth of the conversation.</p>
        </div>

        <div className="key-insight">
          <strong>📌 Key Insights:</strong>
          <p>
            •  Specific Questions and Context Understanding are pivotal skills across all scenarios.
            <br/><br/>
            • The use of Professional Terminology and Topic Transition is relatively infrequent in all scenarios.</p>
        </div>
      </div>

    </div>
  );
};

export default Chart1_5;