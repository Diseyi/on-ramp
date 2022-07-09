import React from "react";
import bitcoin from "../../assets/icons/bitcoin.svg";
import arrowdown from "../../assets/icons/arrowdown.svg";

const ExchangeCoin = () => {
  return (
    <div className=" py-4 bg-[#1F1E3E] px-4 rounded w-[368px] ">
      <div className="flex items-center justify-center border-b py-3 border-gray-500 ">
        <button className=" text-[#BCBCC6] text-base font-medium px-5 py-3 ">
          Buy
        </button>
        <button className=" text-[#BCBCC6] text-base font-medium px-5 py-3 ">
          Sell
        </button>
        <button className=" text-[#BCBCC6] text-base font-medium px-5 py-3 ">
          Send
        </button>
        <button className=" text-base  rounded text-[#D6D6DB] font-semibold bg-[#353759] px-5 py-3 ">
          Exchange
        </button>
      </div>

      <div className="flex gap-2 flex-col">
        <div className="border rounded-xl py-2 px-4 border-gray-500 my-4">
          <div className=" text-[#BCBCC6] text-xs ">Bitcoin price</div>
          <div className="flex justify-between py-3 items-center">
            <div className="flex gap-2 items-center">
              <img src={bitcoin} alt="" className="w-6 h-6" />
              <div className="font-semibold text-base text-white">Bitcoin</div>
            </div>
            <div className="flex gap-1 items-center">
              <div className="font-semibold text-xs text-[#BCBCC6] ">BTC</div>
              <img src={arrowdown} alt="" className="" />
            </div>
          </div>
        </div>

        <div className="border rounded-xl py-2 px-4 border-gray-500 my-4">
          <div className=" text-[#BCBCC6] text-xs ">You amount</div>
          <div className="flex justify-between py-3 items-center">
            <div className="font-semibold text-base text-white">
              $443,943.00
            </div>
            <div className="flex gap-1 items-center">
              <div className="font-semibold text-xs text-[#BCBCC6] ">USD</div>
              <img src={arrowdown} alt="" className="" />
            </div>
          </div>
        </div>

        <div className="border rounded-xl py-2 px-4 border-gray-500 my-4">
          <div className=" text-[#BCBCC6] text-xs ">You receive</div>
          <div className="flex justify-between py-3 items-center">
            <div className="font-semibold text-base text-white">3.943.00</div>
            <div className="flex gap-1 items-center">
              <div className="font-semibold text-xs text-[#BCBCC6] ">BTC</div>
              <img src={arrowdown} alt="" className="" />
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <button className="bg-[#2B85FF] block w-full py-3 font-semibold text-base text-white rounded my-1  ">Exchange USD</button>
      </div>
    </div>
  );
};

export default ExchangeCoin;
