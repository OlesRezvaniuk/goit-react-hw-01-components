import React from 'react';
import Profile from './profile/Profile';
import { StatisticsApp } from 'components/statistics/StatisticsApp';
import { FriendsApp } from 'components/friends/FriendsApp';
import { TransactionsApp } from './transaction/TransactionsApp';
import user from '../data/user.json';
import data from './statistics/data.json';

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
      <StatisticsApp statData={data} />
      <FriendsApp />
      <TransactionsApp />
    </>
  );
};
