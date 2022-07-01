import { Profile } from './Profile/Profile';
import user from './FieldsJSON/user.json';
import { Statistics } from './Statistics/Statistics';
import data from './FieldsJSON/data.json';
import { FriendList } from './FriendList/FriendList';
import friends from './FieldsJSON/friends.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from './FieldsJSON/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
