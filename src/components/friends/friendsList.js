import Friend from 'components/friends/friend';
import css from 'components/friends/friends.module.css'

function FriendsList({ friends }) {
    return (
  <ul className={css.friends_center}>
   {friends.map(friend => (
   
   <Friend key={friend.id}
    avatar={friend.avatar}
    name={friend.name}
    isOnline={friend.isOnline}
/>

)
)
}
 </ul>
)
}
export default FriendsList;