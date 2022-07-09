import React from "react";
import candlesticks from "../../assets/icons/candlesticks.svg";
import settings from "../../assets/icons/settings.svg";
import indicator from "../../assets/icons/indicator.svg";
import circleplus from "../../assets/icons/circleplus.svg";
import marketCap from "../../assets/icons/market-cap.svg";
import stairs from "../../assets/icons/stairs.svg";
import spread from "../../assets/icons/spread.svg";
import candle from "../../assets/icons/candle.svg";
import camera from "../../assets/icons/camera.svg";
import arrowdown from "../../assets/icons/arrowdown.svg";

const Graph = () => {
  return (
    <div className=" w-full ">
      <div className="flex gap-8">
        <div className="flex items-center gap-4 ">
          <div className="flex items-center gap-2 ">
            <div className="text-[#C4C4C4] text-xs">1m</div>
            <div className="text-[#C4C4C4] text-xs">30m</div>
            <div className="flex text-[#FDDB92] gap-1 items-center text-xs">
              1h <img src={arrowdown} alt="" className="w-2 h-2" />
            </div>
          </div>
          <div className="flex gap-2">
            <div className="w-6 h-6">
              <img src={candle} alt="" className="" />
            </div>
            <div className="w-6 h-6">
              <img src={marketCap} alt="" className="" />
            </div>
            <div className="w-6 h-6">
              <img src={stairs} alt="" className="" />
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <div className=" items-center flex">
            <div className="w-6 h-6">
              <img src={indicator} alt="" className="" />
            </div>
            <div className="text-[#C4C4C4] text-xs">Indicators</div>
          </div>
          <div className=" items-center flex">
            <div className="w-6 h-6">
              <img src={circleplus} alt="" className="" />
            </div>
            <div className="text-[#C4C4C4] text-xs">Compare</div>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="w-6 h-6">
            <img src={spread} alt="" className="" />
          </div>
          <div className="w-6 h-6">
            <img src={camera} alt="" className="" />
          </div>
          <div className="w-6 h-6">
            <img src={settings} alt="" className="" />
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
            <div className="flex-1  border-b border-color"></div>
            <div className="text-xs text-[#C4C4C4] font-semibold ">
              $0.06642
            </div>
          </div>
          <div className="flex  items-center justify-center gap-4 w-full">
            <div className="flex-1  border-b border-color"></div>
            <div className="text-xs text-[#C4C4C4] font-semibold ">
              $0.06642
            </div>
          </div>
          <div className="flex  items-center justify-center gap-4 w-full">
            <div className="flex-1  border-b border-color"></div>
            <div className="text-xs text-[#C4C4C4] font-semibold ">
              $0.06642
            </div>
          </div>
          <div className="flex  items-center justify-center gap-4 w-full">
            <div className="flex-1  border-b border-color"></div>
            <div className="text-xs text-[#C4C4C4] font-semibold ">
              $0.06642
            </div>
          </div>
          <div className="flex  items-center justify-center gap-4 w-full">
            <div className="flex-1  border-b border-color"></div>
            <div className="text-xs text-[#C4C4C4] font-semibold ">
              $0.06642
            </div>
          </div>
          <div className="flex  items-center justify-center gap-4 w-full">
            <div className="flex-1  border-b border-color"></div>
            <div className="text-xs text-[#C4C4C4] font-semibold ">
              $0.06642
            </div>
          </div>
          <div className="flex  items-center justify-center gap-4 w-full">
            <div className="flex-1  border-b border-color"></div>
            <div className="text-xs text-[#C4C4C4] font-semibold ">
              $0.06642
            </div>
          </div>
          <div className="flex  items-center justify-center gap-4 w-full">
            <div className="flex-1  border-b border-color"></div>
            <div className="text-xs text-[#C4C4C4] font-semibold ">
              $0.06642
            </div>
          </div>
          <div className="flex  items-center justify-center gap-4 w-full">
            <div className="flex-1  border-b border-color"></div>
            <div className="text-xs text-[#C4C4C4] font-semibold ">
              $0.06642
            </div>
          </div>
          <div className="flex  items-center justify-center gap-4 w-full">
            <div className="flex-1  border-b border-color"></div>
            <div className="text-xs text-[#C4C4C4] font-semibold ">
              $0.06642
            </div>
          </div>
          <div className="flex  items-center justify-center gap-4 w-full">
            <div className="flex-1  border-b border-color"></div>
            <div className="text-xs text-[#C4C4C4] font-semibold ">
              $0.06642
            </div>
          </div>
          <div className="flex  items-center justify-center gap-4 w-full">
            <div className="flex-1  border-b border-color"></div>
            <div className="text-xs text-[#C4C4C4] font-semibold ">
              $0.06642
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-10">
          <img src={candlesticks} alt="" className="" />
        </div>
      </div>
      <div className="flex text-[#C4C4C4] justify-between pr-20">
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
