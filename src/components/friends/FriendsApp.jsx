// import Statistics from './statistics';
import Friends from './friends';
import friend from './friends.json';
import { List } from './friends.styled';

export const FriendsApp = () => {
  return (
    <List>
      {friend.map(friend => (
        <Friends
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
          key={friend.id}
        />
      ))}
    </List>
  );
};
