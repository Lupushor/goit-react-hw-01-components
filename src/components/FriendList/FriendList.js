import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import {
  FriendListStyle,
  FriendListStyleUl,
  FriendListStyleLi,
} from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendListStyle className="fried-list">
      <FriendListStyleUl>
        {friends.map(({ id, avatar, name, isOnline }) => (
          <FriendListStyleLi key={id}>
            <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
          </FriendListStyleLi>
        ))}
      </FriendListStyleUl>
    </FriendListStyle>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
