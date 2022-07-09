import React from "react";
import candlesticks from "../../assets/icons/candlesticks.svg";
import magnet from "../../assets/icons/magnet.svg";

const Graph = () => {
  return (
    <div className=" w-full ">
      <div className="flex gap-8">
        <div className="flex items-center gap-4 ">
          <div className="flex items-center gap-2 ">
            <div className="text-[#C4C4C4] text-xs">1m</div>
            <div className="text-[#C4C4C4] text-xs">30m</div>
            <div className="flex text-[#C4C4C4] items-center text-xs">
              1h <img src={magnet} alt="" className="w-3 h-3" />
            </div>
          </div>
          <div className="flex gap-2">
            <div className="w-6 h-6">
              <img src={magnet} alt="" className="" />
            </div>
            <div className="w-6 h-6">
              <img src={magnet} alt="" className="" />
            </div>
            <div className="w-6 h-6">
              <img src={magnet} alt="" className="" />
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <div className=" items-center flex">
            <div className="w-6 h-6">
              <img src={magnet} alt="" className="" />
            </div>
            <div className="text-[#C4C4C4] text-xs">Indicators</div>
          </div>
          <div className=" items-center flex">
            <div className="w-6 h-6">
              <img src={magnet} alt="" className="" />
            </div>
            <div className="text-[#C4C4C4] text-xs">Compare</div>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="w-6 h-6">
            <img src={magnet} alt="" className="" />
          </div>
          <div className="w-6 h-6">
            <img src={magnet} alt="" className="" />
          </div>
          <div className="w-6 h-6">
            <img src={magnet} alt="" className="" />
          </div>
        </div>
      </div>
      <div className="  text-xs text-[#C4C4C4] font-bold py-2">
        Volume <span className="text-[#27AE60]"> $223K</span>{" "}
      </div>
      <div className="flex items-center gap-16">
        <div className="flex text-xs text-[#C4C4C4] font-semibold gap-4 items-center">
          <div className="">DEFT/ETH</div>
          <div className="w-1 h-1 border rounded-full"></div>
          <div className="">1h</div>
          <div className="w-1 h-1 border rounded-full"></div>
          <div className="">Uniswap</div>
        </div>
        <div className="flex gap-4">
          <div className="text-xs font-semibold flex space-x-1 ">
            <span className="text-[#C4C4C4]">O</span>
            <span className=" text-[#27AE60] ">0.0682</span>
          </div>
          <div className="text-xs font-semibold flex space-x-1 ">
            <span className="text-[#C4C4C4]">H</span>
            <span className=" text-[#FF5757] ">0.0682</span>
          </div>
          <div className="text-xs font-semibold flex space-x-1 ">
            <span className="text-[#C4C4C4]">L</span>
            <span className=" text-[#FF5757] ">0.0682</span>
          </div>
          <div className="text-xs font-semibold flex space-x-1 ">
            <span className="text-[#C4C4C4]">C</span>
            <span className=" text-[#FF5757] ">0.0682</span>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="flex  gap-4 flex-col">
          <div className="flex  items-center justify-center gap-4 w-full">
            <div className="flex-1  border-b border-gray-500"></div>
            <div className="text-xs text-[#C4C4C4] font-semibold ">
              $0.06642
            </div>
          </div>
          <div className="flex  items-center justify-center gap-4 w-full">
            <div className="flex-1  border-b border-gray-500"></div>
            <div className="text-xs text-[#C4C4C4] font-semibold ">
              $0.06642
            </div>
          </div>
          <div className="flex  items-center justify-center gap-4 w-full">
            <div className="flex-1  border-b border-gray-500"></div>
            <div className="text-xs text-[#C4C4C4] font-semibold ">
              $0.06642
            </div>
          </div>
          <div className="flex  items-center justify-center gap-4 w-full">
            <div className="flex-1  border-b border-gray-500"></div>
            <div className="text-xs text-[#C4C4C4] font-semibold ">
              $0.06642
            </div>
          </div>
          <div className="flex  items-center justify-center gap-4 w-full">
            <div className="flex-1  border-b border-gray-500"></div>
            <div className="text-xs text-[#C4C4C4] font-semibold ">
              $0.06642
            </div>
          </div>
          <div className="flex  items-center justify-center gap-4 w-full">
            <div className="flex-1  border-b border-gray-500"></div>
            <div className="text-xs text-[#C4C4C4] font-semibold ">
              $0.06642
            </div>
          </div>
          <div className="flex  items-center justify-center gap-4 w-full">
            <div className="flex-1  border-b border-gray-500"></div>
            <div className="text-xs text-[#C4C4C4] font-semibold ">
              $0.06642
            </div>
          </div>
          <div className="flex  items-center justify-center gap-4 w-full">
            <div className="flex-1  border-b border-gray-500"></div>
            <div className="text-xs text-[#C4C4C4] font-semibold ">
              $0.06642
            </div>
          </div>
          <div className="flex  items-center justify-center gap-4 w-full">
            <div className="flex-1  border-b border-gray-500"></div>
            <div className="text-xs text-[#C4C4C4] font-semibold ">
              $0.06642
            </div>
          </div>
          <div className="flex  items-center justify-center gap-4 w-full">
            <div className="flex-1  border-b border-gray-500"></div>
            <div className="text-xs text-[#C4C4C4] font-semibold ">
              $0.06642
            </div>
          </div>
          <div className="flex  items-center justify-center gap-4 w-full">
            <div className="flex-1  border-b border-gray-500"></div>
            <div className="text-xs text-[#C4C4C4] font-semibold ">
              $0.06642
            </div>
          </div>
          <div className="flex  items-center justify-center gap-4 w-full">
            <div className="flex-1  border-b border-gray-500"></div>
            <div className="text-xs text-[#C4C4C4] font-semibold ">
              $0.06642
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-10">
          <img src={candlesticks} alt="" className="" />
        </div>
      </div>
      <div className="flex text-[#C4C4C4] justify-between pr-10">
        <div className="">08:00</div>
        <div className="">08:00</div>
        <div className="">08:00</div>
        <div className="">08:00</div>
        <div className="">08:00</div>
        <div className="">08:00</div>
        <div className="">08:00</div>
        <div className="">08:00</div>
        <div className="">08:00</div>
      </div>
    </div>
  );
};

export default Graph;
