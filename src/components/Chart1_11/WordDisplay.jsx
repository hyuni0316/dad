import { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { categorizeWord } from './utils';

const WordDisplay = ({ words, selectedCategories }) => {
  const [tooltip, setTooltip] = useState({ show: false, text: '', word: '', x: 0, y: 0 });
  const wordRefs = useRef({});
  
  // ... WordDisplay 컴포넌트의 나머지 코드 ...
};

WordDisplay.propTypes = {
  words: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))).isRequired,
  selectedCategories: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default WordDisplay; 