// import Statistics from './statistics';
import FriendsItem from './Item/FriendsItem';
import { List } from './Friends.styled.jsx';

export const Friends = ({ friendsData }) => {
  return (
    <List>
      {friendsData.map(friend => (
        <FriendsItem
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
          key={friend.id}
        />
      ))}
    </List>
  );
};
