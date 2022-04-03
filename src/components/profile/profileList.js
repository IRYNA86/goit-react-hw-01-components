import Profile from 'components/profile/profile';

function ProfileList({ user }) {
    return (
  
        <div>
            <Profile
                src={user.avatar}
                username={user.username}
                tag={user.tag}
                location={user.location}
                followers={user.stats.followers}
                views={user.stats.views}
                likes={user.stats.likes}
            />
        </div>)}
        
export default ProfileList;