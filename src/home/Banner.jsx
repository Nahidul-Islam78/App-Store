import React from 'react';
import HeroImage from '../assets/assets/hero.png'
import GooglePlay from '../assets/assets/google-play.png'
import AppStore from '../assets/assets/app-store.png'

const Banner = () => {
  return (
    <div className="bg-[#f5f5f5] flex flex-col justify-center items-center pt-20 px-2">
      <div>
        <p className="md:text-center inter-font font-bold text-7xl ">
          We Build{' '}
        </p>
        <p className="inter-font font-bold text-7xl ">
          <span className="bg-gradient-to-l from-[#9f62f2] to-[#632ee3] text-transparent bg-clip-text ">
            Productive
          </span>{' '}
          Apps
        </p>
      </div>
      <div>
        <p className="md:text-center mt-4 inter-font text-xl text-[#627382]  ">
          AtHERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. <br />
          Our goal is to turn your ideas into digital experiences that truly
          make an impact.
        </p>
      </div>
      <div className="my-10">
        <button className="inter-font text-xl font-semibold mr-4 btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl bg-[#f5f5f5] border-[#d2d2d2]">
          <span>
            <img src={GooglePlay} alt="" />
          </span>
          <a href="https://play.google.com/store/apps">Google Play</a>
        </button>
        <button className=" inter-font text-xl font-semibold  btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl bg-[#f5f5f5] border-[#d2d2d2]">
          <span>
            <img src={AppStore} alt="" />
          </span>
          <a href="https://www.apple.com/ca/app-store/"> App Store</a>
        </button>
      </div>
      <div>
        <img src={HeroImage} alt="" />
      </div>
    </div>
  );
};

export default Banner;