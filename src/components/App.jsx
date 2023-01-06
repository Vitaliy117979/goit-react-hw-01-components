import user from '../path/user';
import stats from '../path/data';
import friends from '../path/friends'
import items from '../path/transactions'
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
export const App = () => {
  return (
    <>
      <Profile  user={user} />

      <Statistics    title={"Upload stats"} stats={stats} />

      <FriendList friends = {friends}/>

      <TransactionHistory items = {items}/>
    </>
  );
};
