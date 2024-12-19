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
        <strong>✔️ Speech Patterns by Scenario</strong>
        <p>
          Although the differences were not substantial across scenarios, 
          <span style={{ fontWeight: '600'}}> the difference in speech volume between the interviewer and the interviewee was smallest in the best scenario.
          Interestingly, in the best scenario, the speech volume per turn was relatively lower </span> compared 
          to the worst and normal scenarios. However, the total number of interactions between the interviewer
           and the interviewee was 1,033 turns, making it the most dynamic interaction.
        </p>
      </div>

      <div className="key-insight">
        <strong>📌 Key Insights</strong>
        <p>
          A lower speech volume per turn does not necessarily indicate a poor interview. 
          To determine the quality of an interview, it is essential to consider the overall speech volume 
          and the meaningfulness of the information exchanged. 
          The analysis might suggest that maintaining a high number of dialogue turns with concise utterances can enhance 
          the conversational experience, making it more engaging and productive.
        </p>
      </div>

      </div>
    </div>
  );
};

Chart1_1.propTypes = {
  scenario: PropTypes.oneOf(['Best', 'Normal', 'Worst']).isRequired
};

export default Chart1_1;