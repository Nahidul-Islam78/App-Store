import React from 'react';
import downloadIcon from '../../assets/assets/icon-downloads.png';
import ratingIcon from '../../assets/assets/icon-ratings.png';
import { Link } from 'react-router';
const App = ({ app }) => {
 
  const { image, ratingAvg, downloads, title, id } = app;
  return (
    <Link to={`/AppDetails/${id}`}>
      <div className="p-4  w-[300px] h-[400px] bg-[#ffffff] shadow-[0px_10px_20px_-12px_rgba(0,0,0,0.1) rounded-sm ] ">
        <div className="h-[260px] w-[260px] bg-[#d9d9d9] flex justify-center items-center rounded-lg ">
          <img className="h-40 w-40" src={image} alt="" />
        </div>
        <div>
          <p className="inter-font text-xl font-medium my-4">{title}</p>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center bg-[#f1f5e8] rounded-sm p-2">
            <img className="h-4 w-4 mr-1" src={downloadIcon} alt="" />
            <p className="text-[#00d390] font-medium">{downloads}</p>
          </div>
          <div className="flex items-center bg-[#fff0e1] rounded-sm p-2">
            <img className="h-4 w-4  mr-1" src={ratingIcon} alt="" />
            <p className="text-[#ff8811] font-medium">{ratingAvg}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default App;