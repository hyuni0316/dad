import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Chart1_14.css';

const Chart1_14 = () => {
  const data = [
    {
      name: 'Best',
      value: 23,
      fill: '#B584D1'
    },
    {
      name: 'Normal',
      value: 12,
      fill: '#CECE73'
    },
    {
      name: 'Worst',
      value: 5,
      fill: '#63B594'
    },
  ];

  return (
    <div className="chart-container">
      <h3 style={{ textAlign: 'center' }}>Quantitative Analysis of Valuable Information by Interview Quality</h3>
      
      <div className="chart-wrapper" style={{ width: '80%', height: 400, margin: '0 auto' }}>
        <ResponsiveContainer>
          <BarChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 20,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" label={{ value: 'Scenario', position: 'bottom', offset: 0 }} />
            <YAxis 
              label={{ 
                value: 'Number of Valuable Responses', 
                angle: -90, 
                position: 'insideLeft',
                style: { textAnchor: 'middle' }
              }} 
            />
            <Tooltip />
            <Bar 
              dataKey="value" 
              fill={(entry) => entry.fill}
              barSize={100}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="detail-text">
        <div className="insight-section">
          <strong>✔️ Best Interview Characteristics: </strong>
          <p>Best interviews contain 23 pieces of valuable information, rich in specific figures and information 
          based on real experience. For example, they provide specific and professional financial activity 
          details such as "Operating with 80-85% in investment assets and 15-20% in cash assets."</p>
        </div>

        <div className="insight-section">
          <strong>✔️ Normal and Worst Interview Characteristics:</strong>
          <p>Normal interviews contain 12 pieces of valuable information, providing practical information 
          at a general level. In contrast, Worst interviews contain only 5 pieces of valuable information, 
          mostly consisting of superficial explanations and subjective impressions.</p>
        </div>

        <div className="key-insight">
          <strong>📌 Key Insight:</strong>
          <p>Interview quality is greatly influenced by the specificity and practicality of the information 
          provided. Best interviews contain about 2 times more valuable information than Normal interviews 
          and about 4.6 times more than Worst interviews, showing a clear difference in terms of information 
          quantity. This suggests that providing concrete experiences and numerical data is crucial for 
          conducting good interviews.</p>
        </div>
      </div>
    </div>
  );
};

export default Chart1_14; 