import React from 'react';
import { ProfileApp } from 'components/profile/ProfileApp';
import { StatisticsApp } from 'components/statistics/StatisticsApp';
import { FriendsApp } from 'components/friends/FriendsApp';
import { TransactionsApp } from './transaction/TransactionsApp';

export const App = () => {
  return (
    <>
      <ProfileApp />
      <StatisticsApp />
      <FriendsApp />
      <TransactionsApp />
    </>
  );
};
