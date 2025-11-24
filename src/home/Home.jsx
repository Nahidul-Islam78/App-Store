import React from 'react';
import Banner from './Banner';
import Trusted from './Trusted';
import HomeApps from './HomeApps';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Trusted></Trusted>
      <HomeApps></HomeApps>
    </div>
  );
};

export default Home;