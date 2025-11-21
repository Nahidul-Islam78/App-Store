import React from 'react';

import Footer from '../../Component/Footer/Footer';
import { Outlet } from 'react-router';
import Header from '../../component/header/Header';

const Root = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
