import PropTypes from 'prop-types';
import css from 'components/profile/profile.module.css';

const Profile = ({avatar, username, tag, location, stats}) => {
  ///Деструктаризация, чтоб не писать props каждый раз. Или можно это сделать вместо слова props
  // const { avatar, username, tag, location, stats } = user
  
  return (<div className={css.profile}>
    <div className={css.description}>
      <img
        src={avatar}
        alt={username}
        className={css.avatar} width='200'
      />
      <p className={css.name}>{username}</p>
      <p className={css.tag}>{tag}</p>
      <p className={css.location}>{location}</p>
    </div>

    <ul className={css.stats}>
      <li className={css.stats_label}>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}>{stats.followers}</span>
      </li>
      <li className={css.stats_label}>
        <span className={css.label}>Views</span>
        <span className={css.quantity}>{stats.views}</span>
      </li>
      <li className={css.stats_label}>
        <span className={css.label}>Likes</span>
        <span className={css.quantity}>{stats.likes}</span>
      </li>
      </ul>
      
  </div>);
  
}

Profile.propTypes = {
  src: PropTypes.string,
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
}
export default Profile