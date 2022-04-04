import ProfileList from './components/profile/profileList';
import user from './user.json';

import data from './data.json';
import StatisticsList from './components/statistics/statisticsList';
import StatisticsTitle from 'components/statistics/statisticsTitle';
import css from 'components/statistics/statistics.module.css'

import friends from './friends.json';
import FriendsList from 'components/friends/friendsList';
import cssFriends from 'components/friends/friends.module.css'

import transactions from './transactions.json';
import TransactionHistoryList from './components/transaction/transactionHistoryList';
import cssTrans from 'components/transaction/transaction.module.css'

export default function App() {
    return <section>
        <div>
            <ProfileList user={user}/>
        </div>
        
        <section className={css.statistics}>
            <StatisticsTitle text='Upload stats' />
            <StatisticsList data={data} />
        </section>
        
        <div className={cssFriends.friends_box}>
            <FriendsList friends={friends} />
        </div>
        
        <table className={cssTrans.transaction_history}>
            <thead className={cssTrans.table}>
                <tr>
                    <th className={cssTrans.table_header}>Type </th>
                    <th className={cssTrans.table_header}>Amount </th>
                    <th className={cssTrans.table_header}>Currency</th>
                </tr>
            </thead>
            <TransactionHistoryList transactions={transactions} />
        </table>
    </section>
}