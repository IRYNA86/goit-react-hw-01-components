import PropTypes from 'prop-types';
import css from 'components/statistics/statistics.module.css'

function Statistics({ title, stats }) {
 
  return (
    <section className={css.statistics}>
      {title && (< h2 className={css.titles} > {title}</h2 >)}
      <ul className={css.stat}>
        {stats.map(stat => (<li className={css.item} key={stat.id}>
          <span className={css.label}>{stat.label}</span>
          <span className={css.percentage}>{stat.percentage}%</span>
        </li>         
        ))}
      </ul>
    </section>)
};

Statistics.propTypes = {
  title: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
}
export default Statistics;