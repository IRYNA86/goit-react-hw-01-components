import Friend from './friend';

function FriendsList({ friends }) {
    return (
  <ul>
   {friends.map(friend => (
   <div  key={friend.id}>
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