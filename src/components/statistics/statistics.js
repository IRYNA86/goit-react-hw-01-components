import PropTypes from 'prop-types';
import css from 'components/statistics/statistics.module.css'

export default function Statistics(props) {
  const { label, percentage } = props
  return (
    <ul className={css.stat_list}>
      <li >
        <span className={css.label}>{label}</span>
        <span className={css.percentage}>{percentage}%</span>
      </li>
    </ul>
  );
}
Statistics.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
}