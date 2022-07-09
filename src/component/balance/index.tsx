import React from 'react'
import menu from "../../assets/icons/menu.svg";
import up from "../../assets/icons/up.svg";
import down from "../../assets/icons/down.svg";


const Balance = () => {
  return (
    <div className="py-4 bg-dark-opacity px-4 rounded w-[368px]">
      <div className="flex justify-between border-b py-3 border-color-bottom  items-center">
        <h3 className="font-bold text-lg text-white">Total Balance </h3>
        <div className="">
          <img src={menu} alt="" className="" />
        </div>
      </div>

      <div className="border-b border-color-bottom py-2  my-4">
        <div className=" text-[#BCBCC6] text-xs ">My Balance</div>
        <div className="flex  py-2 items-center">
          <div className="font-semibold text-base text-white">$823,232.76</div>

          <div className="font-semibold text-xs text-[#BCBCC6] ">
            /23.4345345534 BTC
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <div className="flex flex-col gap-1 bg-[#1F1E3E] py-4 px-6  w-[142px] rounded">
          <div className=" text-[#BCBCC6] text-xs ">Income</div>
          <div className="font-semibold text-base text-white">$2,312.21</div>
          <div className="flex">
            <img src={up} alt="" className="" />
            <div className="text-white text-sm text-[#4FDFB1] ">+12.23%</div>
          </div>
        </div>

        <div className="flex flex-col gap-1 bg-[#1F1E3E] py-4 px-6 w-[142px] rounded ">
          <div className=" text-[#BCBCC6] text-xs ">Income</div>
          <div className="font-semibold text-base text-white">$2,312.21</div>
          <div className="flex">
            <img src={down} alt="" className="" />
            <div className="text-white text-sm text-[#B5496F] ">+12.23%</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Balance