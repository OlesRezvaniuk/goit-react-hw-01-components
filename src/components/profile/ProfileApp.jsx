import Profile from './profile';
import user from './user.json';

export const ProfileApp = () => {
  return (
    <Profile
      name={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      followers={user.stats.followers}
      views={user.stats.views}
      likes={user.stats.likes}
    />
  );
};
