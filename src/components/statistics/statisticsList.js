import Statistics from 'components/statistics/statistics';
import css from 'components/statistics/statistics.module.css'

function StatisticsList({ data }) {
    return (
    <div className={css.stat}>
        {data.map(dat => (
                <div className={css.item} key={dat.id}>
                    <Statistics
               
                label={dat.label}
                percentage={dat.percentage}
                    />
                </div>
            ))}
    </div>);
}

export default StatisticsList;