
import downloadIcon from '../assets/assets/icon-downloads.png'
import ratingIcon from '../assets/assets/icon-ratings.png'
const HomeApp = ({ app }) => {
 const { image, ratingAvg, downloads, title } = app;
  return (
    <div className="p-4  w-[300px] h-[400px] bg-[#ffffff] shadow-[0px_10px_20px_-12px_rgba(0,0,0,0.1) rounded-sm ] ">
      <div className="h-[260px] w-[260px] bg-[#d9d9d9] flex justify-center items-center rounded-lg ">
        <img className="h-40 w-40" src={image} alt="" />
      </div>
      <div>
        <p className="inter-font text-xl font-medium my-4">{title}</p>
      </div>
      <div className="flex justify-between items-center">
        <p className="flex items-center ">
          <img className="h-4 w-4 mr-1" src={downloadIcon} alt="" />
          <p>{downloads}</p>
        </p>
        <p className="flex items-center ">
          <img className="h-4 w-4  mr-1" src={ratingIcon} alt="" />
          <p>{ratingAvg}</p>
        </p>
      </div>
    </div>
  );
};

export default HomeApp;