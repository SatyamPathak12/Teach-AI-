const GlobalBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#0A0C14] dark:bg-[#0A0C14]">
      {/* Soft Glowing Gradient Corners - Positioned at edges */}
      <div className="absolute top-[-30%] left-[-20%] h-[600px] w-[600px] rounded-full bg-blue-600/15 blur-[120px] filter" />
      <div className="absolute bottom-[-30%] right-[-20%] h-[500px] w-[500px] rounded-full bg-indigo-600/15 blur-[120px] filter" />
      <div className="absolute top-[30%] right-[-25%] h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[100px] filter" />
      <div className="absolute bottom-[20%] left-[-25%] h-[450px] w-[450px] rounded-full bg-indigo-500/10 blur-[100px] filter" />
      
      {/* Left Side Decorative Lines */}
      <svg
        className="absolute left-0 top-0 h-full w-[200px] opacity-40"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 1000"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="leftGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0" />
            <stop offset="30%" stopColor="#60A5FA" stopOpacity="0.6" />
            <stop offset="70%" stopColor="#818CF8" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="leftGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#6366F1" stopOpacity="0" />
            <stop offset="40%" stopColor="#818CF8" stopOpacity="0.5" />
            <stop offset="60%" stopColor="#60A5FA" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
          </linearGradient>
          <filter id="glowLeft" x="-50%" y="-10%" width="200%" height="120%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        <g filter="url(#glowLeft)">
          {/* Flowing vertical curve on left */}
          <path
            d="M-20 0 Q 80 250, 30 500 Q -20 750, 60 1000"
            stroke="url(#leftGradient1)"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M10 0 Q 100 300, 50 550 Q 0 800, 80 1000"
            stroke="url(#leftGradient2)"
            strokeWidth="1"
            fill="none"
            opacity="0.6"
          />
          {/* Subtle accent line */}
          <path
            d="M-10 100 Q 60 400, 20 700 Q -10 900, 40 1100"
            stroke="url(#leftGradient1)"
            strokeWidth="2"
            fill="none"
            opacity="0.3"
          />
        </g>
      </svg>

      {/* Right Side Decorative Lines */}
      <svg
        className="absolute right-0 top-0 h-full w-[200px] opacity-40"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 1000"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="rightGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#6366F1" stopOpacity="0" />
            <stop offset="25%" stopColor="#818CF8" stopOpacity="0.5" />
            <stop offset="75%" stopColor="#60A5FA" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="rightGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0" />
            <stop offset="35%" stopColor="#60A5FA" stopOpacity="0.4" />
            <stop offset="65%" stopColor="#818CF8" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
          </linearGradient>
          <filter id="glowRight" x="-50%" y="-10%" width="200%" height="120%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        <g filter="url(#glowRight)">
          {/* Flowing vertical curve on right */}
          <path
            d="M220 0 Q 120 250, 170 500 Q 220 750, 140 1000"
            stroke="url(#rightGradient1)"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M190 0 Q 100 300, 150 550 Q 200 800, 120 1000"
            stroke="url(#rightGradient2)"
            strokeWidth="1"
            fill="none"
            opacity="0.6"
          />
          {/* Subtle accent line */}
          <path
            d="M210 100 Q 140 400, 180 700 Q 210 900, 160 1100"
            stroke="url(#rightGradient1)"
            strokeWidth="2"
            fill="none"
            opacity="0.3"
          />
        </g>
      </svg>

      {/* Subtle Corner Accents - Top Left */}
      <svg
        className="absolute left-0 top-0 h-[300px] w-[300px] opacity-25"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 300 300"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="cornerGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0 100 Q 50 50, 100 0"
          stroke="url(#cornerGradient1)"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M0 150 Q 75 75, 150 0"
          stroke="url(#cornerGradient1)"
          strokeWidth="0.8"
          fill="none"
          opacity="0.6"
        />
      </svg>

      {/* Subtle Corner Accents - Bottom Right */}
      <svg
        className="absolute right-0 bottom-0 h-[300px] w-[300px] opacity-25"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 300 300"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="cornerGradient2" x1="100%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#818CF8" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M300 200 Q 250 250, 200 300"
          stroke="url(#cornerGradient2)"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M300 150 Q 225 225, 150 300"
          stroke="url(#cornerGradient2)"
          strokeWidth="0.8"
          fill="none"
          opacity="0.6"
        />
      </svg>
    </div>
  );
};

export default GlobalBackground;
