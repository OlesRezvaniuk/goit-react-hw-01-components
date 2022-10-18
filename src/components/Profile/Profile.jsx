import PropTypes from 'prop-types';
import {
  Card,
  Description,
  Img,
  Name,
  Tag,
  Location,
  CardList,
  CardItem,
  CardItemFirst,
  CardItemLast,
  Label,
  Quantity,
} from './Profile.styled';

const Profile = ({ userData }) => {
  return (
    <Card>
      <Description>
        <Img src={userData.avatar} alt="User avatar" />
        <Name>{userData.name}</Name>
        <Tag>{userData.tag}</Tag>
        <Location>{userData.location}</Location>
      </Description>

      <CardList>
        <CardItemFirst>
          <Label>Followers</Label>
          <Quantity>{userData.followers}</Quantity>
        </CardItemFirst>
        <CardItem>
          <Label>Views</Label>
          <Quantity>{userData.views}</Quantity>
        </CardItem>
        <CardItemLast>
          <Label>Likes</Label>
          <Quantity>{userData.likes}</Quantity>
        </CardItemLast>
      </CardList>
    </Card>
  );
};

export default Profile;

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
