import PropTypes from 'prop-types';
import css from 'components/friends/friends.module.css'

const Friend = (props) => {
    const {isOnline, avatar, name} = props
  return (
    <li className={css.item}>
      {isOnline === true ?
        <span className={css.statusOn}>{isOnline}</span> :
        <span className={css.statusOff}>{isOnline}</span>}
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