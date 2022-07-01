import css from './Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      <div className={css.titleStat}>
        {title && <h2 className="title">{title}</h2>}
      </div>

      <div className={css.statList}>
        <ul className={css.list}>
          {stats.map(({ id, label, percentage }) => {
            return (
              <li className={css.item} key={id}>
                <span className={css.label}>{label}</span>
                <span className="percentage">{percentage}%</span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
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
