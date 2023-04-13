export const StatisticData = ({ stat }) => {
  return (
    <div>
      <span className="label">{stat.label}</span>
      <span className="percentage">{stat.percentage}%</span>
    </div>
  );
};
