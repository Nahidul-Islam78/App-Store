import React from 'react';

const Trusted = () => {
  return (
    <div className=" bg-gradient-to-l from-[#9f62f2] to-[#632ee3] flex flex-col items-center justify-center py-20 ">
      <div>
        <p className="inter-font text-5xl font-bold text-[#ffffff] pb-10">
          Trusted by Millions, Built for You
        </p>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between  gap-20 md:gap-46">
        <div>
          <p className="inter-font text-[#ffffff] opacity-[0.8] text-center">
            Total Downloads
          </p>
          <p className="inter-font text-6xl font-extrabold text-[#ffffff] my-4">
            29.6M
          </p>
          <p className="inter-font text-[#ffffff] opacity-[0.8]">
            21% more than last month
          </p>
        </div>
        <div>
          <p className="inter-font text-[#ffffff] opacity-[0.8] text-center">
            Total Reviews
          </p>
          <p className="inter-font text-6xl font-extrabold text-[#ffffff] my-4">
            906K
          </p>
          <p className="inter-font text-[#ffffff] opacity-[0.8]">
            46% more than last month
          </p>
        </div>
        <div>
          <p className="inter-font text-[#ffffff] opacity-[0.8] text-center">
            Active Apps
          </p>
          <p className="inter-font text-6xl font-extrabold text-[#ffffff] my-4">
            132+
          </p>
          <p className="inter-font text-[#ffffff] opacity-[0.8]">
            31 more will Launch
          </p>
        </div>
      </div>
    </div>
  );
};

export default Trusted;