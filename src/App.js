import Profile from './components/profile'
import user from './user.json';
import Statistics from 'components/statistics';
import data from './data.json';
import FriendList from './components/friendList';
import friends from './friends.json';
import TransactionsHistory from './components/transactionHistory';
import transactions from './transactions.json';

export default function App() {
    return <div>
        <Profile
  src={user.avatar}
  username={user.username}
  tag={user.tag}
  location={user.location}
  followers={user.stats.followers}
  views={user.stats.views}
  likes={user.stats.likes}  
        />
        <Statistics
    id={data[0].id}
    label={data[0].label}
    percentage={data[0].percentage}
        />
        <FriendList
            avatar={friends[0].avatar}
            name={friends[0].name}
            isOnline={friends[0].isOnline}
        />
        <TransactionsHistory
        type={transactions[0].type}
                    amount={transactions[0].amount}
                    currency={transactions[0].currency}
        />
    </div>
}