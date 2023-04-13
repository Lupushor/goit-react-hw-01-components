import PropTypes from 'prop-types';
import { FriendCard } from './FriendCard';

export const FriendList = ({ friends }) => {
  return (
    <section className="fried-list">
      <ul>
        {friends.map(friend => (
          <li key={friend.id}>
            <FriendCard friend={friend} />
          </li>
        ))}
      </ul>
    </section>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
