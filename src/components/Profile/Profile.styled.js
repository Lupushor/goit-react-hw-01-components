import styled from 'styled-components';

export const ProfileInfo = styled.div`
  display: flex;
  background-color: rgb(203, 215, 213);
  place-content: center;
  -webkit-box-pack: center;
  padding: 30px;
  flex-direction: column;
  align-items: center;
  max-width: 300px;
`;

export const ProfileDescription = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;

  background-color: #fff;
  width: 230px;
  padding: 15px;
  box-shadow: 0px 5px 10px 4px rgba(0, 0, 0, 0.31);
`;

export const Avatar = styled.img`
  width: 100px;
  border-radius: 50%;
  border: 1px solid #e7e7e8;
`;

export const Name = styled.p`
  padding-top: 5px;
  font-weight: 700;
  font-size: 24px;
`;

export const Tag = styled.p`
  margin: 5px;
`;

export const Location = styled.p`
  margin: 5px;
`;
export const Stats = styled.ul`
  display: flex;
  background-color: #e7e7e8;

  width: 230px;
  -webkit-box-pack: center;
  justify-content: center;
  box-shadow: 0px 9px 10px 4px rgba(0, 0, 0, 0.3);
`;

export const StatsInfo = styled.li`
  display: flex;
  flex-wrap: wrap;
  width: 100px;
  -webkit-box-pack: center;
  justify-content: center;
  padding: 5px;
  border: 1px solid #ededed;
`;
