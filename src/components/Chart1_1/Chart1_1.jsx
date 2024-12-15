import PropTypes from 'prop-types';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './Chart1_1.css';

const Chart1_1 = ({scenario}) => {
  const data = [
    {
      scenario: 'Best',
      interviewer_sentence: 1.560078,
      interviewee_sentence: 1.459302,
      interviewer_word: 11.025194,
      interviewee_word: 10.936047,
      interviewer_char: 34.089147,
      interviewee_char: 31.238372
    },
    {
      scenario: 'Normal',
      interviewer_sentence: 1.623116,
      interviewee_sentence: 2.122449,
      interviewer_word: 18.050251,
      interviewee_word: 22.229592,
      interviewer_char: 49.286432,
      interviewee_char: 56.653061
    },
    {
      scenario: 'Worst',
      interviewer_sentence: 1.682464,
      interviewee_sentence: 1.950000,
      interviewer_word: 19.952607,
      interviewee_word: 22.205000,
      interviewer_char: 66.734597,
      interviewee_char: 69.260000
    }
  ];

  const getBarOpacity = (currentScenario) => {
    return currentScenario === scenario ? 1 : 0.3;
  };

  const commonProps = {
    width: 350,
    height: 300,
    data: data,
    margin: { top: 20, right: 0, left: 0, bottom: 5 }
  };

  return (
    <div className="flex justify-center items-start w-full">
      <div className="charts" style={{display:"flex", flexDirection:"row"}}>
        <div>
          <h3 className="chart1-title">Average Sentence Count by Scenario</h3>
          <BarChart {...commonProps}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="scenario" tick={{ fontSize: 12 }} />
            <YAxis domain={[0, 5]} tick={{ fontSize: 12 }} />
            <Tooltip contentStyle={{ fontSize: '12px' }} />
            <Legend wrapperStyle={{ fontSize: '12px' }} />
            <Bar 
              dataKey="interviewer_sentence" 
              name="Interviewer" 
              fill="skyblue"
              barSize={20}
              opacity={(entry) => getBarOpacity(entry.scenario)}
            />
            <Bar 
              dataKey="interviewee_sentence" 
              name="Interviewee" 
              fill="lightpink"
              barSize={20}
              opacity={(entry) => getBarOpacity(entry.scenario)}
            />
          </BarChart>
        </div>

        <div>
          <h3 className="chart1-title">Average Word Count by Scenario</h3>
          <BarChart {...commonProps}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="scenario" tick={{ fontSize: 12 }} />
            <YAxis domain={[0, 30]} tick={{ fontSize: 12 }} />
            <Tooltip contentStyle={{ fontSize: '12px'}} />
            <Legend wrapperStyle={{ fontSize: '12px', padding: '0 0 0 20px'}} />
            <Bar 
              dataKey="interviewer_word" 
              name="Interviewer" 
              fill="skyblue"
              barSize={20}
              opacity={(entry) => getBarOpacity(entry.scenario)}
            />
            <Bar 
              dataKey="interviewee_word" 
              name="Interviewee" 
              fill="lightpink"
              barSize={20}
              opacity={(entry) => getBarOpacity(entry.scenario)}
            />
          </BarChart>
        </div>

        <div>
          <h3 className="chart1-title">Average Character Count by Scenario</h3>
          <BarChart {...commonProps}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="scenario" tick={{ fontSize: 12 }} />
            <YAxis domain={[0, 80]} tick={{ fontSize: 12 }} />
            <Tooltip contentStyle={{ fontSize: '12px' }} />
            <Legend wrapperStyle={{ fontSize: '12px' }} />
            <Bar 
              dataKey="interviewer_char" 
              name="Interviewer" 
              fill="skyblue"
              barSize={20}
              opacity={(entry) => getBarOpacity(entry.scenario)}
            />
            <Bar 
              dataKey="interviewee_char" 
              name="Interviewee" 
              fill="lightpink"
              barSize={20}
              opacity={(entry) => getBarOpacity(entry.scenario)}
            />
          </BarChart>
        </div>
      </div>
      <div className="detail-text">
        <div className="insight-section">
          <strong>✔️ Characteristics of the Best Scenario: </strong>
          <p>The interaction between the interviewer and the interviewee is marked by short, frequent exchanges. 
            While the volume of speech is minimal, the frequency of conversational turns is high, 
            maintaining an engaging and dynamic flow.</p>
        </div>

        <div className="insight-section">
          <strong>✔️ Characteristics of the Worst Scenario:</strong>
          <p>In contrast, this scenario is characterized by longer, more extended utterances in a single turn. 
            This results in lengthier conversations that can feel drawn-out and disrupt the natural flow of dialogue.</p>
        </div>

        <div className="key-insight">
          <strong>📌 Key Insights:</strong>
          <p>Frequent, concise exchanges appear to enhance both the effectiveness and the engagement of the conversation. 
            This suggests that maintaining a high frequency of dialogue turns with shorter utterances may contribute significantly 
            to a more immersive and productive conversational experience.</p>
        </div>
      </div>
    </div>
  );
};

Chart1_1.propTypes = {
  scenario: PropTypes.oneOf(['Best', 'Normal', 'Worst']).isRequired
};

export default Chart1_1;