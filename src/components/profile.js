import PropTypes from 'prop-types';

const Profile = (props) => {
  ///Деструктаризация, чтоб не писать props каждый раз. Или можно это сделать вм есто слова props
  const { src, username, tag, location, followers, views, likes } = props
  
  return (<div class="profile">
    <div class="description">
      <img
        src={src}
        alt={username}
        class="avatar" width='200'
      />
      <p class="name">{username}</p>
      <p class="tag">{tag}</p>
      <p class="location">{location}</p>
    </div>

    <ul class="stats">
      <li>
        <span class="label">Followers</span>
        <span class="quantity">{followers}</span>
      </li>
      <li>
        <span class="label">Views</span>
        <span class="quantity">{views}</span>
      </li>
      <li>
        <span class="label">Likes</span>
        <span class="quantity">{likes}</span>
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