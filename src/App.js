import ProfileList from './components/profile/profileList';
import user from './user.json';

import data from './data.json';
import StatisticsList from './components/statistics/statisticsList';
import StatisticsTitle from 'components/statistics/statisticsTitle';
import css from 'components/statistics/statistics.module.css'
// import Friend from './components/friend';
import friends from './friends.json';
import FriendsList from './components/friendsList';
// import TransactionsHistory from './components/transactionHistory';
import transactions from './transactions.json';
import TransactionHistoryList from './components/transactionHistoryList'

export default function App() {
    return <section>
        <div>
            <ProfileList user={user}/>
        </div>
        
        <section className={css.statistics}>
            <StatisticsTitle text='Upload stats' />
            <StatisticsList data={data} />
        </section>
        <div>
            <FriendsList friends={friends} />
            </div>
        <table>
        <thead>
                <tr>
                    <th>Type </th>
                    <th>Amount </th>
                    <th>Currency</th>
                </tr>
        </thead>
        
<TransactionHistoryList transactions={transactions}/>
       </table>
</section>
}