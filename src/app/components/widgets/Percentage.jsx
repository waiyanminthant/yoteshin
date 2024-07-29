export function Percentage({ percentage, size = 40, strokeWidth = 3}) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <svg
      width={size}
      height={size}
      className="transform bg-slate-800 rounded-3xl"
    >
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        strokeWidth={strokeWidth}
        className="text-slate-800"
        stroke="currentColor"
        fill="transparent"
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        strokeWidth={strokeWidth}
        className="text-emerald-600"
        stroke="currentColor"
        fill="transparent"
        strokeDasharray={circumference}
        strokeDashoffset={offset ? offset : null}
        style={{ transition: 'stroke-dashoffset 0.35s', transform: 'rotate(-90deg)', transformOrigin: '50% 50%' }}
      />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dy=".3em"
        fill="white"
        className="text-white text-xs font-extrabold"
      >
        {percentage}%
      </text>
    </svg>
  );
}