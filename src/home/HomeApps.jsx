import React from 'react';
import { Link, useLoaderData } from 'react-router';
import HomeApp from './HomeApp';


const HomeApps = () => {
  const data = useLoaderData();
  
  return (
    <div className="p-10 md:p-20 bg-[#f5f5f5]">
      <p className="inter-font font-bold text-7xl text-center">Trending Apps</p>
      <p className="md:text-center mt-4 inter-font text-xl text-[#627382]   ">
        Explore All Trending Apps on the Market developed by us
      </p>
      <div className="my-10 bg-[#f5f5f5] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {data.map(app => (
          <HomeApp key={app.id} app={app}></HomeApp>
        ))}
      </div>
      <div className="flex justify-center items-center">
        <Link to="Apps">
          <p className="btn bg-gradient-to-l text-center from-[#9f62f2] to-[#632ee3] text-[#ffffff] font-semibold inter-font ">
            Show All
          </p>
        </Link>
      </div>
    </div>
  );
};

export default HomeApps;