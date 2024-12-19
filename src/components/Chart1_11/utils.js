export const categorizeWord = (word) => {
  const serviceWords = ['Toss', 'App', 'BankSalad', 'Service', 'UI', 'Notification', 'Phone', 'Experience', 'Information'];
  const bankWords = ['Bank', 'Account', 'Transfer', 'Profile', 'Card', 'Insurance', 'Loan', 'Product', 'Advertisement'];
  const financeWords = ['Investment', 'Asset', 'Fund', 'Return', 'Securities', 'Scholarship', 'Finance', 'Support', 'Benefit', 'Point', 'Payment', 'Money', 'Amount'];
  const adverbWords = ['Check', 'Activity', 'Management', 'Just', 'Now', 'Very', 'But', 'Little', 'So', 'Many', 'Use', 'Think'];

  if (serviceWords.includes(word)) return '#E84DA5';
  if (bankWords.includes(word)) return '#A9AE22';
  if (financeWords.includes(word)) return '#2E94D8';
  if (adverbWords.includes(word)) return '#9A9EAB';
  return '#000000';
}; 