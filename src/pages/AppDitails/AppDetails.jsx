import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import downloadIcon from '../../assets/assets/icon-downloads.png'
import ratingIcon from '../../assets/assets/icon-ratings.png'
import reviewsIcon from '../../assets/assets/icon-review.png'
import RatingChart from '../../component/Chart/RatingChart';
import { addApp, getInstalAppList } from '../../utility/appIdDb';
import { toast } from 'react-toastify';
const AppDetails = () => {
  
  const {id} = useParams();
  const idInt = parseInt(id);
  const data = useLoaderData();
  const appData = data.find(App => App.id === idInt);
  const {
    image,
    ratingAvg,
    downloads,
    title,
    companyName,
    reviews,
    description,
    ratings,
    size,
    
  } = appData;

  const [instalText, setInstalText] = useState(` Install Now (${size})`);
  const [isDisable, setIsDisable] = useState(false);
  const handelInstalClicked = () => {
    setInstalText('Installed');
    setIsDisable(true);
    addApp(id);
    toast.success('Complete Installed!');
  }
  const installAppsSTR = getInstalAppList();
  const apps = installAppsSTR.includes(id);
  
  useEffect(() => {
    if (apps) {
      setInstalText('Installed');
      setIsDisable(true);
     }
 },[])
 

  return (
    <div className="md:p-20 p-10 bg-[#f5f5f5] ">
      <div className="flex flex-col md:flex-row justify-baseline gap-10">
        <div className="h-[330px] w-[300px] bg-[#ffffff] flex  justify-center items-center rounded-lg ">
          <img className="h-40 w-40" src={image} alt="" />
        </div>
        <div>
          <p className="inter-font font-bold text-3xl">{title}</p>
          <p className="text-xl inter-font text-[#627382]">
            Developed by{' '}
            <span className="bg-gradient-to-l from-[#9f62f2] to-[#632ee3] text-transparent bg-clip-text ">
              {companyName}
            </span>
          </p>
          <p className="border-t-2 my-7 border-[#001931] opacity-[0.2]"></p>
          <div className="flex flex-col md:flex-row items-center justify-baseline gap-6">
            <div>
              <img src={downloadIcon} alt="" />
              <p className="inter-font my-2">Downloads</p>
              <p className="font-extrabold text-4xl inter-font ">{downloads}</p>
            </div>
            <div>
              <img src={ratingIcon} alt="" />
              <p className="inter-font my-2">Average Ratings</p>
              <p className="font-extrabold text-4xl inter-font ">{ratingAvg}</p>
            </div>
            <div>
              <img src={reviewsIcon} alt="" />
              <p className="inter-font my-2">Total Reviews</p>
              <p className="font-extrabold text-4xl inter-font ">{reviews}</p>
            </div>
          </div>
          <button className="btn  btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl bg-[#00d390] text-[#ffffff] mt-7" onClick={handelInstalClicked} disabled={isDisable}>
            {instalText}
          </button>
        </div>
      </div>
      <p className="border-t-2 my-7 border-[#001931] opacity-[0.2]"></p>
      <div>
        <p className="inter-font text-2xl font-semibold">Ratings</p>
        <div>
          <RatingChart ratings={ratings}></RatingChart>
        </div>
      </div>
      <div className='pt-4'>
        <p className="inter-font text-2xl font-semibold">Description</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;