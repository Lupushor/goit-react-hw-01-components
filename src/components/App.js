import { ProfileCard } from './Profile';
import { Statistics } from './Statistic/Statistics';

import data from '../data.json';
import { FriendList } from './FriendList/FriendList';
import friends from '../friends.json';
import transactions from '../transactions.json';
import { TransactionHistory } from './Transactions/TransactionHistory';

export const App = () => {
  return (
    <>
      <ProfileCard />
      <Statistics title="Upload stats" stats={data} />
      {/* <Statistics stats={data} /> */}
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
