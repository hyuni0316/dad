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

  const getBarColor = (category) => {
    return category === 'Best' ? '#63B594' 
         : category === 'Normal' ? '#CECE73' 
         : '#B584D1';
  };

  return (
    <div className="chart-container14" ref={containerRef}>
      <h3>Distribution of Interview Topics by Quality Level</h3>
      
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
                  fill={getBarColor(entry.category)}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="detail-text">
        <div className="insight-section">
          <strong>✔️ Best Interview Topics:</strong>
          <p>
            최상의 인터뷰는 총 37개의 주제를 다루며, 투자/자산관리(12), 금융앱/UX(10), 
            정보수집 방법(8) 등 다양한 전문적인 주제들을 깊이 있게 다룹니다. 
            특히 보안/신뢰성(4)과 개선제안(3)과 같은 고급 주제도 포함됩니다.
          </p>
        </div>

        <div className="insight-section">
          <strong>✔️ Normal & Worst Interview Topics:</strong>
          <p>
            일반 인터뷰는 18개 주제로, 주로 금융앱/UX(8)와 결제/카드(6) 관련 기본적인 내용을 다룹니다.
            최하위 인터뷰는 13개의 제한된 주제로, 수입/자금관리(5), 금융상품(4), 리워드/포인트(4)와 
            같은 표면적인 내용에 머무릅니다.
          </p>
        </div>

        <div className="key-insight">
          <strong>📌 핵심 인사이트:</strong>
          <p>
            인터뷰 품질은 다루는 주제의 수와 깊이에서 명확한 차이를 보입니다. 
            최상위 인터뷰는 일반 인터뷰의 2배, 최하위 인터뷰의 3배 가까운 주제를 다루며,
            특히 전문적이고 심층적인 금융 관련 주제들을 포함한다는 특징이 있습니다.
            이는 인터뷰 설계 시 다양하고 전문적인 주제를 포함하는 것이 중요함을 시사합니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Chart1_14; 