import styled from 'styled-components';

export const StatisticsInfo = styled.section`
  display: flex;
  background-color: rgb(203, 215, 213);
  place-content: center;
  -webkit-box-pack: center;
  padding: 30px;
  flex-direction: column;
  align-items: center;
  max-width: 300px;

  margin-top: 10px;
`;

export const StatList = styled.ul`
  display: flex;

  width: 230px;
  -webkit-box-pack: center;
  justify-content: center;
  box-shadow: 0px 9px 10px 4px rgba(0, 0, 0, 0.3);
`;

export const StatItem = styled.li`
  display: flex;
  flex-wrap: wrap;
  width: 100px;
  -webkit-box-pack: center;
  justify-content: center;
  padding: 5px;
  color: white;
  border: 1px solid #ededed;
`;
