import PropTypes from 'prop-types';
import {
  FriendListItemStyle,
  FriendListStyleStatus,
} from './FriendList.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendListItemStyle>
      <FriendListStyleStatus isOnline={isOnline}></FriendListStyleStatus>
      <img class="friend-avatar" src={avatar} alt={name} width="50" />
      <p class="friend-name">{name}</p>
    </FriendListItemStyle>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
