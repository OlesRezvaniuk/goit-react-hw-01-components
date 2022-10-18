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

const Profile = ({ name, tag, location, avatar, followers, views, likes }) => {
  return (
    <Card>
      <Description>
        <Img src={avatar} alt="User avatar" />
        <Name>{name}</Name>
        <Tag>{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <CardList>
        <CardItemFirst>
          <Label>Followers</Label>
          <Quantity>{followers}</Quantity>
        </CardItemFirst>
        <CardItem>
          <Label>Views</Label>
          <Quantity>{views}</Quantity>
        </CardItem>
        <CardItemLast>
          <Label>Likes</Label>
          <Quantity>{likes}</Quantity>
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
