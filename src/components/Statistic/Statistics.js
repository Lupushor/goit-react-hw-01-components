import PropTypes from 'prop-types';
import { StatisticsInfo, StatList, StatItem } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  const randomColor = () => {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)})`;
  };

  return (
    <StatisticsInfo>
      {title && <h2 class="title">{title}</h2>}

      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <StatItem key={id} style={{ backgroundColor: randomColor() }}>
            <span class="label">{label}</span>
            <span class="percentage">{percentage}%</span>
          </StatItem>
        ))}
      </StatList>
    </StatisticsInfo>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
