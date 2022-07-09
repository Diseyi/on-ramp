import React from "react";
import notification from "../../assets/icons/notification.svg";
import profile from "../../assets/icons/profile.svg";

const Header = () => {
  return (
    <div className=" py-3 bg-transparent flex justify-between items-center ">
      <div className="">
        <h1 className="text-white font-bold text-2xl">On-ramp Exchanger</h1>
      </div>
      <div className="flex items-center gap-4">
        <div className=" w-[394px] relative bg-[#1F1E3E]  ">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-[#BCBCC6] "
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            id="search"
            className="block p-3 pl-10 w-full text-base text-[#BCBCC6]rounded bg-[#1F1E3E]  focus:ring-blue-500 focus:border-blue-500 "
            placeholder="Search for tokens available"
          />
        </div>
        <div className="flex gap-3 items-center">
          <div className="w-7 h-7 flex justify-center items-center">
            <img src={notification} alt="notification icon" className="" />
          </div>
          <div className="w-7 h-7 flex justify-center items-center">
            <img src={profile} alt="profile icon" className="" />
          </div>
          <div className="">
            <h2 className="text-white text-xl font-semibold">Rasheed 👑</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
