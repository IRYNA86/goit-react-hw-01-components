import PropTypes from 'prop-types';
import css from 'components/statistics/statistics.module.css'

function Statistics({ title, stats }) {
 
  return (
    <section className={css.statistics}>
      {title && (< h2 className={css.titles} > {title}</h2 >)}
      <ul className={css.stat}>
        {stats.map(({id, label, percentage}) => (<li className={css.item} key={id}>
          <span className={css.label}>{label}</span>
          <span className={css.percentage}>{percentage}%</span>
        </li>         
        ))}
      </ul>
    </section>)
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number
  }))
}
export default Statistics;