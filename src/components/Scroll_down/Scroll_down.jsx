import "./Scroll_down.css"

const Scroll_down = () => {
  return (
    <div 
      className="scroll-down"
      style={{
        animation: 'bounce 2s infinite'
      }}
    >
      <span 
        className="text-gray-400 text-sm"
      >
        Scroll down
      </span>
      <svg 
        width="20" 
        height="20" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        className="text-gray-400"
      >
        <path d="m6 9 6 6 6-6"/>
      </svg>
    </div>
  );
};

export default Scroll_down;