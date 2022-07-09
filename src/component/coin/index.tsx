import React from "react";
import tether from "../../assets/icons/tether.svg";
import btc from "../../assets/icons/btc.svg";
import ethereum from "../../assets/icons/ethereum.svg";
import graph from "../../assets/icons/graph.svg";
import pinkgraph from "../../assets/icons/pinkgraph.svg";

const CoinInfo = () => {
  return (
    <div className="flex justify-between my-4  items-center">
      <div className="bg-[#1F1E3E] flex items-center rounded gap-6 px-6 py-7 w-[368px] ">
        <div className="flex items-center gap-4 ">
          <div className="w-8 h-8">
            <img src={tether} alt="crypo coin" className="" />
          </div>
          <div className="text-[#BCBCC6]">
            <div className="text-base font-bold ">USDT</div>
            <div className="text-sm">Tether</div>
          </div>
        </div>
        <div className="">
          <img src={graph} alt="" className="" />
        </div>
        <div className="">
          <div className="font-semibold text-xl text-[#BCBCC6] ">$546.78</div>
          <div className="text-[#4FDFB1] text-sm ">+56.9%</div>
        </div>
      </div>

      <div className="bg-[#1F1E3E] flex items-center rounded gap-6 px-6 py-7 w-[368px] ">
        <div className="flex items-center gap-4 ">
          <div className="w-8 h-8">
            <img src={ethereum} alt="crypo coin" className="" />
          </div>
          <div className="text-[#BCBCC6]">
            <div className="text-base font-bold ">USDT</div>
            <div className="text-sm">Tether</div>
          </div>
        </div>
        <div className="">
          <img src={pinkgraph} alt="" className="" />
        </div>
        <div className="">
          <div className="font-semibold text-xl text-[#BCBCC6] ">$546.78</div>
          <div className="text-[#4FDFB1] text-sm ">+56.9%</div>
        </div>
      </div>

      <div className="bg-[#1F1E3E] flex items-center rounded gap-6 px-6 py-7 w-[368px] ">
        <div className="flex items-center gap-4 ">
          <div className="w-8 h-8">
            <img src={btc} alt="crypo coin" className="" />
          </div>
          <div className="text-[#BCBCC6]">
            <div className="text-base font-bold ">USDT</div>
            <div className="text-sm">Tether</div>
          </div>
        </div>
        <div className="">
          <img src={graph} alt="" className="" />
        </div>
        <div className="">
          <div className="font-semibold text-xl text-[#BCBCC6] ">$546.78</div>
          <div className="text-[#4FDFB1] text-sm ">+56.9%</div>
        </div>
      </div>
    </div>
  );
};

export default CoinInfo;
