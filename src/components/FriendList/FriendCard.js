export const FriendCard = ({ friend }) => {
  return (
    <div>
      <span class="friend-status"></span>
      <img
        class="friend-avatar"
        src={friend.avatar}
        alt={friend.name}
        width="50"
      />
      <p class="friend-name">{friend.name}</p>
    </div>
  );
};
