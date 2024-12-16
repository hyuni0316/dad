import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import './Chart1_13.css';
import PropTypes from 'prop-types';

const CustomTooltip = ({ active, payload, type }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="custom-tooltip">
        <p className="tooltip-title">{`${data.name}`}</p>
        <p className="tooltip-total">{`Total: ${data.total}`}</p>
        <div className="tooltip-details">
          {data.details.map((detail, index) => (
            <p key={index}>
              {type === 'interviewer' 
                ? `${detail.question}: ${detail.count}`
                : `${detail.response}: ${detail.count}`}
            </p>
          ))}
        </div>
      </div>
    );
  }
  return null;
};

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
  type: PropTypes.string
};

const Chart1_13 = () => {
  const [interviewerData] = useState([
    { 
      name: 'Best', 
      total: 6,
      details: [
        { question: 'Asset Management Method', count: 2 },
        { question: 'Information Checking Method', count: 2 },
        { question: 'App Usage', count: 2 }
      ]
    },
    { 
      name: 'Normal', 
      total: 10,
      details: [
        { question: 'Financial App Usage', count: 3 },
        { question: 'App Preference Reason', count: 3 },
        { question: 'Information Source', count: 4 }
      ]
    },
    { 
      name: 'Worst', 
      total: 21,
      details: [
        { question: 'Toss Usage Reason', count: 5 },
        { question: 'Toss Pros and Cons', count: 4 },
        { question: 'Bank App Non-usage Reason', count: 4 },
        { question: 'Feature Usage', count: 3 },
        { question: 'Information Source', count: 5 }
      ]
    }
  ]);

  const [intervieweeData] = useState([
    { 
      name: 'Best', 
      total: 9,
      details: [
        { response: 'Direct Management/Decision', count: 2 },
        { response: 'Investment Info from KakaoTalk', count: 2 },
        { response: 'BankSalad Integrated View', count: 3 },
        { response: 'Certificate Inconvenience', count: 2 }
      ]
    },
    { 
      name: 'Normal', 
      total: 12,
      details: [
        { response: 'Scholarship Receipt', count: 3 },
        { response: 'Activity Fee Receipt', count: 2 },
        { response: 'Toss Convenience', count: 4 },
        { response: 'Bank App Non-usage', count: 3 }
      ]
    },
    { 
      name: 'Worst', 
      total: 45,
      details: [
        { response: 'Clean Toss UI', count: 6 },
        { response: 'Heavy Bank Apps', count: 5 },
        { response: 'Toss Convenience', count: 7 },
        { response: 'Excessive Bank App Menus', count: 4 },
        { response: 'Point Collection/Usage', count: 8 },
        { response: 'Benefits Usage', count: 6 },
        { response: 'Review Reference', count: 5 },
        { response: 'Search Usage', count: 4 }
      ]
    }
  ]);

  return (
    <div className="chart-container">
      
      <div className="charts-wrapper">
        <div className="chart">
          <h3>Interviewer Questions Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={interviewerData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip content={<CustomTooltip type="interviewer" />} />
              <Bar dataKey="total">
                {interviewerData.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`}
                    fill={entry.name === 'Best' ? '#63B594' : entry.name === 'Normal' ? '#CECE73' : '#B584D1'}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="chart">
          <h3>Interviewee Responses Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={intervieweeData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip content={<CustomTooltip type="interviewee" />} />
              <Bar dataKey="total">
                {intervieweeData.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`}
                    fill={entry.name === 'Best' ? '#63B594' : entry.name === 'Normal' ? '#CECE73' : '#B584D1'}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="detail-text">
        <div className="insight-section">
          <strong>✔️ Interview Question Pattern Analysis:</strong>
          <p>
            • Best interview: Efficient information collection with minimal repetition (6 times) <br />
            • Normal interview: Basic information gathering with moderate repetition (10 times) <br />
            • Worst interview: Inefficient questioning pattern with excessive repetition (21 times) <br />
          </p>
        </div>

        <div className="insight-section">
          <strong>✔️ Interviewee Response Pattern Analysis: </strong>
          <p>
            • Best interview: 9 repetitions with new context and additional information <br />
            • Normal interview: 12 repetitions with adequate basic information delivery <br />
            • Worst interview: 45 repetitions expressing same content in different ways <br />
          </p>
        </div>

        <div className="key-insight">
          <strong>📌 Key Insights:</strong>
          <p>
            1. Question-Response Ratio: Best interview (1:1.5), Normal interview (1:1.2), Worst interview (1:2.1) showing Best interview has the most efficient information exchange ratio
            <br />
            2. Topic Focus: Best interview focused on core topics of asset management and app usage, while Worst interview overly focused on Toss-related questions
            <br />
            3. Response Quality: Best interview responses feature additional context, while Worst interview mostly contains simple repetitions
          </p>
        </div>
      </div>
    </div>
  );
};

export default Chart1_13; 