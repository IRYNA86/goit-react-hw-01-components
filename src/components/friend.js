import PropTypes from 'prop-types';

const Friend = (props) => {
    const {isOnline, avatar, name} = props
    return (
        <li class="item">
            <span class="status">{isOnline}</span>
  <img class="avatar" src={avatar} alt="User avatar" width="48" />
            <p class="name">{name }</p>
</li>
    )
}
Friend.propTypes = {
  isOnline: PropTypes.bool,
  avatar: PropTypes.string,
    name: PropTypes.string,
  
  }
export default Friend