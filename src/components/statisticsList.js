import Statistics from './statistics';

function StatisticsList({ data }) {
    return (
    <ul>
        {data.map(dat => (
                <li  key={dat.id}>
                    <Statistics
               
                label={dat.label}
                percentage={dat.percentage}
                    />
                </li>
            ))}
    </ul>);
}

export default StatisticsList;