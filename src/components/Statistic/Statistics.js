import PropTypes from 'prop-types';
import { StatisticData } from './StatisticData';
import { StatisticTitle } from './StatisticTitle';

export const Statistics = ({ title, stats }) => {
  const randomColor = () => {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)})`;
  };

  return (
    <section className="statistics">
      <StatisticTitle title={title} />
      <ul className="stat-list">
        {stats.map(stat => (
          <li
            className="stat-item"
            key={stat.id}
            style={{ backgroundColor: randomColor() }}
          >
            <StatisticData stat={stat} />
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.defaultProps = {
  title: '',
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
