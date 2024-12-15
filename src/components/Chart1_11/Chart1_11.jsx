import './Chart1_11.css';

const Chart1_11 = () => {
  const bestWords = [
    { text: '토스', value: 52 },
    { text: '은행', value: 45 },
    { text: '앱/어플', value: 43 },
    { text: '계좌', value: 41 },
    { text: '정보', value: 38 },
    { text: '돈', value: 35 },
    { text: '투자', value: 33 },
    { text: '자산', value: 31 },
    { text: '뱅크샐러드', value: 29 },
    { text: '카드', value: 28 },
    { text: '확인', value: 27 },
    { text: '펀드', value: 25 },
    { text: '보험', value: 24 },
    { text: '금액', value: 23 },
    { text: '수익', value: 21 },
    { text: '이체', value: 20 },
    { text: '대출', value: 19 },
    { text: '관리', value: 18 },
    { text: '증권', value: 17 },
    { text: '상품', value: 16 },
  ];

  const normalWords = [
    { text: '토스', value: 48 },
    { text: '은행', value: 42 },
    { text: '돈', value: 39 },
    { text: '앱/어플', value: 37 },
    { text: '카드', value: 34 },
    { text: '활동', value: 31 },
    { text: '계좌', value: 29 },
    { text: '정보', value: 25 },
    { text: '경험', value: 23 },
    { text: '이체', value: 20 },
    { text: '장학금', value: 19 },
    { text: '금융', value: 18 },
    { text: '생각', value: 17 },
    { text: '지원', value: 16 },
    { text: '혜택', value: 15 },
    { text: '확인', value: 14 },
    { text: '알림', value: 13 },
    { text: '계정', value: 12 },
    { text: '서비스', value: 11 },
    { text: '휴대폰', value: 10 },
  ];

  const worstWords = [
    { text: '토스', value: 67 },
    { text: '은행', value: 55 },
    { text: '앱/어플', value: 51 },
    { text: '그냥', value: 48 },
    { text: '이제', value: 43 },
    { text: '포인트', value: 41 },
    { text: '되게', value: 38 },
    { text: '근데', value: 36 },
    { text: '돈', value: 34 },
    { text: '카드', value: 32 },
    { text: '좀', value: 31 },
    { text: '그래서', value: 29 },
    { text: '생각', value: 25 },
    { text: '많이', value: 24 },
    { text: 'UI', value: 22 },
    { text: '광고', value: 20 },
    { text: '계좌', value: 19 },
    { text: '혜택', value: 18 },
    { text: '결제', value: 17 },
    { text: '쓰다', value: 16 },
  ];


  return (
    <div className="chart-container">
      <div className="wordcloud-section">
        <h3>Best 그룹 워드클라우드</h3>
        <div className="wordcloud">
        </div>
      </div>
      
      <div className="wordcloud-section">
        <h3>Normal 그룹 워드클라우드</h3>
        <div className="wordcloud">
        </div>
      </div>
      
      <div className="wordcloud-section">
        <h3>Worst 그룹 워드클라우드</h3>
        <div className="wordcloud">
        </div>
      </div>
    </div>
  );
};

export default Chart1_11;
