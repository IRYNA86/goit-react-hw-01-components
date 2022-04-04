import Friend from 'components/friends/friend';
import css from 'components/friends/friends.module.css'

function FriendsList({ friends }) {
    return (
  <ul className={css.friends_center}>
   {friends.map(friend => (
   <div className={css.friends_card} key={friend.id}>
   <Friend
    avatar={friend.avatar}
    name={friend.name}
    isOnline={friend.isOnline}
/>
</div>
)
)
}
 </ul>
)
}
export default FriendsList;