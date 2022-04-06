import Profile from 'components/profile/profile';
import user from 'components/outputData/user.json';

import stats from 'components/outputData/data.json';
import Statistics from './components/statistics/statistics';

import friends from 'components/outputData/friends.json';
import FriendsList from 'components/friends/friendsList';
import cssFriends from 'components/friends/friends.module.css'

import transactions from 'components/outputData/transactions.json';
import TransactionHistoryList from './components/transaction/transactionHistoryList';

export default function App() {
    return <section>
        <div>
            <Profile
                username={user.username}
                tag={user.tag}
                location={user.location}
                avatar={user.avatar}
                stats={user.stats} />
        </div>
                   
            <Statistics title="Upload stats" stats={stats}/> 
                    
        <div className={cssFriends.friends_box}>
            <FriendsList friends={friends} />
        </div>
                
            <TransactionHistoryList transactions={transactions} />
        
    </section>
}