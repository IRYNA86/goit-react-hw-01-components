import PropTypes from 'prop-types';
import css from 'components/friends/friends.module.css'

const Friend = ({ isOnline, avatar, name }) => {
    
  return (
    <li className={css.item}>
      <span className={isOnline === true ?
        css.statusOn :
        css.statusOff}>
        {isOnline} </span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  )
}
Friend.propTypes = {
  isOnline: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
}

export default Friend