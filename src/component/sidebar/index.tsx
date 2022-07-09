import React from "react";
import logo from "../../assets/icons/logo.svg";
import exchange from "../../assets/icons/exchange.svg";
import analytic from "../../assets/icons/analytics.svg";
import portfolio from "../../assets/icons/portfolio.svg";
import trade from "../../assets/icons/trade.svg";
import message from "../../assets/icons/message.svg";
import transaction from "../../assets/icons/transaction.svg";

const Sidebar = () => {
  return (
    <div className="w-60 bg-[#1F1E3E] py-8 h-screen overflow-scroll ">
      <div className="px-8">
        <div className=" flex items-center mb-4 ">
          <img src={logo} alt="logo" className="" />
          <span className="text-4xl text-white">ramp</span>
        </div>
        <div className="flex flex-col gap-4 border-b py-10">
          <div className="uppercase text-[#BCBCC6] text-sm ">Menu</div>
          <div className="flex flex-col gap-4">
            <div className=" gap-x-2 flex items-center">
              <div className="w-7 h-7 flex justify-left  items-center">
                <img src={exchange} alt="logo" className="" />
              </div>
              <span className="text-xl text-white ">Exchanger</span>
            </div>

            <div className=" gap-x-2.5 flex items-center">
              <div className="w-7 h-7 flex justify-left  items-center">
                <img src={analytic} alt="logo" className="" />
              </div>
              <span className="text-xl text-[#BCBCC6]  ">Analytic</span>
            </div>

            <div className=" gap-x-2 flex items-center">
              <div className="w-7 h-7 flex justify-left  items-center">
                <img src={portfolio} alt="logo" className="" />
              </div>
              <span className="text-xl text-[#BCBCC6]  ">Portfolio</span>
            </div>

            <div className=" gap-x-2 flex items-center">
              <div className="w-7 h-7 flex justify-left items-center">
                <img src={trade} alt="logo" className="" />
              </div>
              <span className="text-xl text-[#BCBCC6] ">Trade</span>
            </div>

            <div className=" gap-x-2 flex items-center">
              <div className="w-7 h-7 flex justify-left items-center">
                <img src={message} alt="logo" className="" />
              </div>
              <span className="text-xl text-[#BCBCC6] ">Message</span>
            </div>

            <div className=" gap-x-2 flex items-center">
              <div className="w-7 h-7 flex justify-left items-center">
                <img src={transaction} alt="logo" className="" />
              </div>
              <span className="text-xl text-[#BCBCC6] ">Transaction</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 py-10 ">
          <div className="uppercase text-[#BCBCC6] text-sm ">Others</div>
          <div className="flex flex-col gap-4">
            <div className=" gap-x-2 flex items-center">
              <div className="w-7 h-7 flex justify-left  items-center">
                <img src={exchange} alt="logo" className="" />
              </div>
              <span className="text-xl text-white ">Settings</span>
            </div>

            <div className=" gap-x-2.5 flex items-center">
              <div className="w-7 h-7 flex justify-left  items-center">
                <img src={analytic} alt="logo" className="" />
              </div>
              <span className="text-xl text-[#BCBCC6]  ">Help</span>
            </div>

            <div className=" gap-x-2 flex items-center">
              <div className="w-7 h-7 flex justify-left  items-center">
                <img src={portfolio} alt="logo" className="" />
              </div>
              <span className="text-xl text-[#BCBCC6]  ">About us</span>
            </div>
          </div>
        </div>
        <div className=""></div>
      </div>

      <div className="px-2 flex flex-col justify-center items-center my-4">
        <div className=" bg-[#2B85FF] rounded py-12 px-4 text-white flex flex-col justify-center items-center ">
          <div className="text-center font-bold text-sm ">Go Premium now!</div>
          <div className="text-center font-medium text-xs my-2 ">
            Upgrade to Pro for Unlimited features
          </div>
          <button className="font-bold text-sm py-3 px-8 rounded-3xl bg-[#2564C2] mt-8 ">
            Upgrade now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
