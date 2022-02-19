import Profile from './components/profile'
import user from './user.json';
// import Statistics from 'components/statistics';
import data from './data.json';
import StatisticsList from './components/statisticsList'
// import Friend from './components/friend';
import friends from './friends.json';
import FriendsList from './components/friendsList';
// import TransactionsHistory from './components/transactionHistory';
import transactions from './transactions.json';
import TransactionHistoryList from './components/transactionHistoryList'

export default function App() {
    return <section>
        <div>
        <Profile
  src={user.avatar}
  username={user.username}
  tag={user.tag}
  location={user.location}
  followers={user.stats.followers}
  views={user.stats.views}
  likes={user.stats.likes}  
            />
            </div>
        <div>
            <h2 class="title">Upload stats</h2>
<StatisticsList data={data}/>
</div>
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