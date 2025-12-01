import React from 'react';

import Footer from '../../Component/Footer/Footer';
import { Outlet } from 'react-router';
import Header from '../../component/header/Header';
import { ToastContainer } from 'react-toastify';

const Root = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      ></ToastContainer>
    </div>
  );
};

export default Root;
