import React from 'react';
import Error from '../../assets/assets/error-404.png'
import Header from '../../component/header/Header';
import Footer from '../../Component/Footer/Footer';
import { Link } from 'react-router';

const ErrorPage = () => {
  return (
    <div>
      <Header></Header>
      <div className=" flex flex-col items-center p-10 md:p-20 bg-[#f5f5f5]">
        <div>
          <img src={Error} alt="" />
        </div>
        <div>
          <p className="inter-font font-bold text-7xl text-center my-4 ">
            Oops, page not found!
          </p>
          <p className="inter-font text-xl text-[#627382] text-center mb-4">
            The page you are looking for is not available.
          </p>

          <div className="flex justify-center items-center">
            <Link to="">
              <p className="btn bg-gradient-to-l text-center from-[#9f62f2] to-[#632ee3] text-[#ffffff] font-semibold inter-font ">
                Go Back!
              </p>
            </Link>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ErrorPage;