import React from 'react';
import Profile from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { Friends } from 'components/Friends/Friends';
import { Transactions } from './Transaction/Transactions';
import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import trans from '../data/transactions.json';

export const App = () => {
  return (
    <>
      <Profile
        name={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics statData={data} />
      <Friends friendsData={friends} />
      <Transactions transData={trans} />
    </>
  );
};
