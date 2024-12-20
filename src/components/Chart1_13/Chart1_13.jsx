import { useState, useEffect, useRef } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, Legend } from 'recharts';
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
  const containerRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const formatInterviewerData = (data) => {
    return data.flatMap(item => [
      { name: `${item.name} Total`, value: item.total, category: item.name },
      ...item.details.map(detail => ({
        name: detail.question,
        value: detail.count,
        category: item.name
      }))
    ]);
  };

  const formatIntervieweeData = (data) => {
    return data.flatMap(item => [
      { name: `${item.name} Total`, value: item.total, category: item.name },
      ...item.details.map(detail => ({
        name: detail.response,
        value: detail.count,
        category: item.name
      }))
    ]);
  };

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

  const formattedInterviewerData = formatInterviewerData(interviewerData);
  const formattedIntervieweeData = formatIntervieweeData(intervieweeData);

  const getBarColor = (category, isTotal) => {
    if (isTotal) {
      return category === 'Best' ? '#63B594' 
           : category === 'Normal' ? '#CECE73' 
           : '#B584D1';
    } else {
      return category === 'Best' ? '#A3D4C1' 
           : category === 'Normal' ? '#E1E1A8' 
           : '#D4B5E6';
    }
  };

  return (
    <div className="chart-container13" ref={containerRef}>
      <div className="charts-wrapper">
        <div className="chart">
          <h3>Repeated Interviewer Questions Distribution</h3>
          <ResponsiveContainer width="100%" height={600}>
            <BarChart data={formattedInterviewerData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" domain={[0, 50]} />
              <YAxis 
                type="category" 
                dataKey="name" 
                width={150} 
                style={{ fontSize: '12px' }}
              />
              <Tooltip />
              <Legend 
                payload={[
                  { value: 'Best', type: 'rect', color: '#63B594' },
                  { value: 'Normal', type: 'rect', color: '#CECE73' },
                  { value: 'Worst', type: 'rect', color: '#B584D1' }
                ]}
              />
              <Bar dataKey="value" barSize={15}>
                {formattedInterviewerData.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`}
                    fill={getBarColor(entry.category, entry.name.includes('Total'))}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="chart">
          <h3>Repeated Interviewee Responses Distribution</h3>
          <ResponsiveContainer width="100%" height={600}>
            <BarChart data={formattedIntervieweeData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" domain={[0, 50]} />
              <YAxis 
                type="category" 
                dataKey="name" 
                width={200} 
                style={{ fontSize: '12px' }}
              />
              <Tooltip />
              <Legend 
                payload={[
                  { value: 'Best', type: 'rect', color: '#63B594' },
                  { value: 'Normal', type: 'rect', color: '#CECE73' },
                  { value: 'Worst', type: 'rect', color: '#B584D1' }
                ]}
              />
              <Bar dataKey="value" barSize={15}>
                {formattedIntervieweeData.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`}
                    fill={getBarColor(entry.category, entry.name.includes('Total'))}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="detail-text">
        <div className="insight-section">
          <strong>✔️ Interview Question Pattern Analysis</strong>
          <p>
            The analysis of questioning patterns revealed distinct differences in interviewing efficiency, 
            where the Best interviews demonstrated optimal information collection with only 6 repetitions, 
            while Normal interviews showed moderate efficiency with 10 repetitions in basic information gathering, 
            and <span style={{ fontWeight: '600'}}>Worst interviews exhibited an inefficient pattern with excessive repetition occurring 21 times, 
            indicating a significant decline in questioning effectiveness.</span>
          </p>
        </div>

        <div className="insight-section">
          <strong>✔️ Interviewee Response Pattern Analysis </strong>
          <p>
            The response patterns varied significantly across interview quality levels, 
            with the Best interviews showing 9 repetitions, 
            while Normal interviews had 12 repetitions, 
            and <span style={{ fontWeight: '600'}}>Worst interviews demonstrated inefficiency with 45 repetitions 
            that merely expressed the same content in different ways without adding substantial value.</span>
          </p>
        </div>

        <div className="key-insight">
          <strong>📌 Key Insights</strong>
          <p>
            Effective interviews minimize unnecessary repetitions in both questions and responses, 
            focusing on extracting meaningful and concise information. 
            <span style={{ fontWeight: '600'}}> Excessive repetition, as seen in the worst interviews, is a clear indicator of reduced efficiency and quality. </span> 
             Avoiding redundant exchanges and maintaining a streamlined flow can significantly enhance the overall interview experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Chart1_13; 