import PropTypes from 'prop-types';
import Friend from 'components/friends/friend';
import css from 'components/friends/friends.module.css'

function FriendsList({ friends }) {
    return (
  <ul className={css.friends_center}>
   {friends.map(({id, avatar, name, isOnline}) => (
   
   <Friend key={id}
    avatar={avatar}
    name={name}
    isOnline={isOnline}
/>

)
)
}
 </ul>
)
}
FriendsList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    isOnline: PropTypes.bool,
    avatar: PropTypes.string,
    name: PropTypes.string
  }))
}
export default FriendsList;