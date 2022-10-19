// import Statistics from './statistics';
import PropTypes from 'prop-types';
import FriendsItem from './Item/FriendsItem';
import { List } from './Friends.styled';

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

FriendsItem.propTypes = {
  friendsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
