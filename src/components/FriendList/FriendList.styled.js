import styled from 'styled-components';

export const FriendListStyle = styled.div`
  display: flex;
  -webkit-box-pack: center;
  /* padding: 15px; */
  flex-direction: column;
  max-width: 300px;
  margin-top: 10px;
`;

export const FriendListItemStyle = styled.div`
  display: flex;
  align-items: center;
  margin: 5px;
`;

export const FriendListStyleUl = styled.ul``;

export const FriendListStyleLi = styled.li`
  display: flex;

  width: 100%;

  border: 1px solid rgb(237, 237, 237);
  box-shadow: 0px 3px 2px 1px rgba(0, 0, 0, 0.2);
  margin-bottom: 8px;
  padding-left: 10px;
`;

export const FriendListStyleStatus = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 20px;
  background-color: ${p => (p.isOnline ? 'green' : 'red')};
`;
