import PropTypes from 'prop-types';
import {
  ProfileInfo,
  ProfileDescription,
  Avatar,
  Name,
  Tag,
  Location,
  Stats,
  StatsInfo,
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <ProfileInfo>
      <ProfileDescription>
        <Avatar src={avatar} alt={username} />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </ProfileDescription>

      <Stats>
        <StatsInfo>
          <span class="label">Followers</span>
          <span class="quantity">{followers}</span>
        </StatsInfo>
        <StatsInfo>
          <span class="label">Views</span>
          <span class="quantity">{views}</span>
        </StatsInfo>
        <StatsInfo>
          <span class="label">Likes</span>
          <span class="quantity">{likes}</span>
        </StatsInfo>
      </Stats>
    </ProfileInfo>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
