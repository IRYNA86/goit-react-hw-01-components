import css from 'components/statistics/statistics.module.css'

const StatisticsTitle = ({ text }) => {
    return <h2 className={css.title}>{ text }</h2>;
};

export default StatisticsTitle