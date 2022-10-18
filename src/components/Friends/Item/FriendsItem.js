import PropTypes from 'prop-types';

import { Item, Status, Img, Name } from '../Friends.styled';

const isOnlineColor = variant => {
  switch (variant) {
    case false:
      return 'red';
    case true:
      return 'green';
    default:
      throw new Error(`Unsupported variant prop value - ${variant}`);
  }
};

const FriendsItem = ({ avatar, name, isOnline }) => {
  return (
    <Item>
      <Status
        varint={isOnline}
        style={{ backgroundColor: isOnlineColor(isOnline) }}
      ></Status>
      <Img src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </Item>
  );
};

export default FriendsItem;

FriendsItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
