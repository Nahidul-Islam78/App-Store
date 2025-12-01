import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import { getInstalAppList, removeApp } from '../../utility/appIdDb';
import downloadIcon from '../../assets/assets/icon-downloads.png';
import ratingIcon from '../../assets/assets/icon-ratings.png';
import { toast } from 'react-toastify';


const InstallApps = () => {
  const data = useLoaderData();
  const installAppsSTR = getInstalAppList();
  const installApps = installAppsSTR.map(id => parseInt(id));
  const apps = data.filter(app =>installApps.includes(app.id));
  const [sort, setSort] = useState('');
  const [installApp, setInstallApp] = useState(apps);
  
  const handelSort = type => {
    setSort(type);
    if (type === 'Size') {
      const sortBySize = [...apps].sort(
        (a, b) => a.size - b.size
      );
      setInstallApp(sortBySize);
    }
    
  };
  const handelUnInstalBtn = (id) => {
    removeApp(id);
    const newInstallApps = installApp.filter(app => !(id === app.id));
    setInstallApp(newInstallApps);
    toast.success('Complete Uninstalled!');


  }
  return (
    <div className="p-20 bg-[#f5f5f5]">
      <div>
        <p className="inter-font font-bold text-7xl text-center mb-4">
          Your Installed Apps
        </p>
        <p className="inter-font text-xl text-[#627382] text-center mb-10">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <p className="text-2xl font-semibold inter-font">
            {apps.length} Apps Found
          </p>
        </div>
        <div>
          <div className="dropdown dropdown-start">
            <div
              tabIndex={0}
              role="button"
              className="btn m-1 inter-font text-[#627382] border-2 border-[#d2d2d2] bg-[#f5f5f5] rounded-sm mb-4 "
            >
              sort by {sort ? sort : ''}⬇️
            </div>
            <ul
              tabIndex="-1"
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li>
                <a
                  onClick={() => {
                    handelSort('Size');
                  }}
                >
                  Size
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {installApp.map(app => (
        <div key={app.id} className="p-4 bg-[#ffffff] mb-5 rounded-sm">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row justify-baseline gap-4 ">
              <div className="bg-[#d9d9d9] h-20 w-20 rounded-lg ">
                <img src={app.image} alt="" />
              </div>
              <div>
                <p className="text-xl font-medium inter-font">{app.title}</p>
                <div className="flex items-center justify-baseline gap-4">
                  <div className="flex justify-baseline items-center">
                    <img className="h-4 w-4 mr-1" src={downloadIcon} alt="" />
                    <p className="text-[#00d390] font-medium">
                      {app.downloads}
                    </p>
                  </div>
                  <div className="flex justify-baseline items-center">
                    <img className="h-4 w-4  mr-1" src={ratingIcon} alt="" />
                    <p className="text-[#ff8811] font-medium">
                      {app.ratingAvg}
                    </p>
                  </div>
                  <div>
                    <p className="inter-font text-[#627382]">{app.size}MB</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <button
                className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl bg-[#00d390] text-[#ffffff] mt-7 "
                onClick={() => handelUnInstalBtn(app.id)}
              >
                Uninstall
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InstallApps;
