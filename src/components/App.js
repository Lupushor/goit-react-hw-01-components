import { Profile } from './Profile/Profile';
import { Statistics } from './Statistic/Statistics';

import data from 'data/data.json';
import user from 'data/user.json';
import { FriendList } from './FriendList/FriendList';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';
import { TransactionHistory } from './Transactions/TransactionHistory';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';

export const App = () => {
  return (
    <Layout>
      <GlobalStyle />
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Layout>
  );
};
