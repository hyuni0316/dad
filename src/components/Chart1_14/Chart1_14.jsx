import { useState, useEffect, useRef } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, Legend } from 'recharts';
import './Chart1_14.css';
import PropTypes from 'prop-types';

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="custom-tooltip">
        <p className="tooltip-title">{`${data.name}`}</p>
        <p className="tooltip-value">{`Count: ${data.value}`}</p>
      </div>
    );
  }
  return null;
};

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array
};

const Chart1_14 = () => {
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

  const formatData = (data) => {
    return data.flatMap(item => [
      { name: `${item.name} Total`, value: item.total, category: item.name },
      ...item.details.map(detail => ({
        name: detail.topic,
        value: detail.count,
        category: item.name
      }))
    ]);
  };

  const [data] = useState([
    {
      name: 'Best',
      total: 37,
      details: [
        { topic: 'Investment/Asset Management', count: 12 },
        { topic: 'Financial App/UX Related', count: 10 },
        { topic: 'Information Gathering Methods', count: 8 },
        { topic: 'Security/Reliability Related', count: 4 },
        { topic: 'Improvement Suggestions', count: 3 }
      ]
    },
    {
      name: 'Normal',
      total: 18,
      details: [
        { topic: 'Financial App/UX Related', count: 8 },
        { topic: 'Payment/Card Related', count: 6 },
        { topic: 'Notification/Information Check', count: 4 }
      ]
    },
    {
      name: 'Worst',
      total: 13,
      details: [
        { topic: 'Income/Fund Management', count: 5 },
        { topic: 'Financial Products Related', count: 4 },
        { topic: 'Rewards/Points Related', count: 4 }
      ]
    }
  ]);

  const formattedData = formatData(data);

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
    <div className="chart-container14" ref={containerRef}>
      <h3>The count of meaningful information contained in each scenario, categorized by specific subtopics</h3>
      
      <div className="chart-wrapper">
        <ResponsiveContainer width="100%" height={600}>
          <BarChart data={formattedData} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" domain={[0, 40]} />
            <YAxis 
              type="category" 
              dataKey="name" 
              width={200}
              style={{ fontSize: '12px' }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend 
              payload={[
                { value: 'Best', type: 'rect', color: '#63B594' },
                { value: 'Normal', type: 'rect', color: '#CECE73' },
                { value: 'Worst', type: 'rect', color: '#B584D1' }
              ]}
            />
            <Bar dataKey="value" barSize={15}>
              {formattedData.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`}
                  fill={getBarColor(entry.category, entry.name.includes('Total'))}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="detail-text">
        <div className="insight-section">
          <strong>✔️ Best Interview Topics</strong>
          <p>
            The best interviews yielded 37 meaningful pieces of information, with a strong focus on 
            Investment/Asset Management (12) and Financial App/UX (10). The depth of discussion extended to 
            Information Gathering Methods (8), Security/Reliability (4), and Improvement Suggestions (3), 
            demonstrating a comprehensive understanding of financial management and technology.
          </p>
        </div>

        <div className="insight-section">
          <strong>✔️ Normal & Worst Interview Topics</strong>
          <p>
            Normal interviews produced 18 pieces of information, primarily centered around Financial App/UX (8) 
            and Payment/Card Related topics (6), with basic coverage of Notifications (4). Worst interviews 
            generated only 13 pieces of information, focusing on basic topics like Income Management (5), 
            Financial Products (4), and Rewards/Points (4), lacking the depth seen in better interviews.
          </p>
        </div>

        <div className="key-insight">
          <strong>📌 Key Insights </strong>
          <p>
            The quality of interviews directly correlates with the breadth and depth of information gathered. 
            Best interviews captured nearly triple the meaningful information compared to worst interviews, 
            covering more sophisticated topics. This highlights the importance of well-structured questions 
            and strategic topic management to maximize the value of interviews.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Chart1_14; 