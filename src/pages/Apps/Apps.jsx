import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import App from '../../component/App/App';
import NotFoundApp from '../../component/NotFoundApp/NotFoundApp';

const Apps = () => {
  const data = useLoaderData();
  const [apps, setApps] = useState(data)
  const handelSearchControl= (e) => {
    const searchValue = e.target.value;
    
    const searChValueUpper = searchValue.toUpperCase();
    const matchApp = data.filter(app =>
      app.title.toUpperCase().includes(searChValueUpper)
    );
    setApps(matchApp);
    if (searchValue.length === 0) {
      setApps(data)
    };
  }
  return (
    <div className=" p-10 md:p-20 py-20 bg-[#f5f5f5]">
      <p className="text-5xl font-bold inter-font text-center mb-4">
        Our All Applications
      </p>
      <p className="text-xl text-[#627382] text-center mb-10">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>
      <div className="flex flex-col gap-5 md:flex-row justify-between px-10">
        <div>
          <p className="inter-font text-2xl font-semibold">
            {apps.length === 0 ? 'No App Found' : `(${apps.length}) Apps Found`}
          </p>
        </div>
        <div>
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              onChange={handelSearchControl}
              type="search"
              required
              placeholder="Search"
            />
          </label>
        </div>
      </div>
      <div className="my-10 bg-[#f5f5f5] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {apps.length===0?<NotFoundApp></NotFoundApp>:apps.map(app => (
          <App app={app} key={app.id}></App>
        ))}
      </div>
    </div>
  );
};

export default Apps;