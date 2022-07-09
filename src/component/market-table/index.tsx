import React from "react";
import filter from "../../assets/icons/filter.svg";
import download from "../../assets/icons/download.svg";
import binance from "../../assets/icons/binance.svg";
import tether from "../../assets/icons/tether.svg";
import ethereum from "../../assets/icons/ethereum.svg";
import bitcoin from "../../assets/icons/bitcoin.svg";
import select from "../../assets/icons/select.svg";
import graph from "../../assets/icons/graph.svg";

const MarketTable = () => {
  return (
    <div className="bg-[#1F1E3E] py-4 px-4  ">
      <div className="flex justify-between border-b py-3 border-gray-500  items-center">
        <h3 className="font-bold text-lg text-white">Explore market </h3>
        <div className="flex items-center gap-2 ">
          <img src={filter} alt="" className="" />
          <img src={download} alt="" className="" />
        </div>
      </div>

      <div className="w-full py-4">
        <table className="w-full">
          <thead className="w-full bg-[#282849] ">
            <tr className="text-left ">
              <th className="py-2">
                <input type="checkbox" name="" id="" disabled />
              </th>

              <th className="py-2">
                <div className="flex gap-1">
                  <span className="text-[#4A4F74] text-xs font-semibold uppercase ">
                    Token name
                  </span>
                  <img src={select} alt="" className="" />
                </div>
              </th>

              <th className="py-2">
                <div className="flex gap-1">
                  <span className="text-[#4A4F74] text-xs font-semibold uppercase ">
                    Price
                  </span>
                  <img src={select} alt="" className="" />
                </div>
              </th>

              <th className="py-2">
                <div className="flex gap-1">
                  <span className="text-[#4A4F74] text-xs font-semibold uppercase ">
                    TODAY'S CHANGE
                  </span>
                  <img src={select} alt="" className="" />
                </div>
              </th>

              <th className="py-2">
                <div className="flex gap-1">
                  <span className="text-[#4A4F74] text-xs font-semibold uppercase ">
                    MARKET CAP
                  </span>
                  <img src={select} alt="" className="" />
                </div>
              </th>

              <th className="py-2">
                <div className="flex gap-1">
                  <span className="text-[#4A4F74] text-xs font-semibold uppercase ">
                    24H VOLUME
                  </span>
                  <img src={select} alt="" className="" />
                </div>
              </th>

              <th className="py-2">
                <div className="flex gap-1">
                  <span className="text-[#4A4F74] text-xs font-semibold uppercase ">
                    action
                  </span>
                  <img src={select} alt="" className="" />
                </div>
              </th>
            </tr>
          </thead>

          <tbody className="">
            <tr className="">
              <td className="py-2">
                <input type="checkbox" name="" id="" disabled />
              </td>

              <td className="flex items-center py-2 gap-2">
                <img src={bitcoin} alt="" className="w-8 h-8" />
                <div className="text-white font-semibold text-sm">Bitcoin</div>
              </td>

              <td className=" py-2 gap-2 text-white font-semibold text-sm">
                $823,232.87
              </td>

              <td className="flex items-center py-2 gap-2">
                <img src={graph} alt="" className="w-8 h-8" />
                <div className="text-[#4FDFB1] font-semibold text-sm">
                  +56.9%
                </div>
              </td>

              <td className=" py-2 gap-2 text-white font-semibold text-sm">
                $9,232.76
              </td>

              <td className=" py-2 gap-2 text-white font-semibold text-sm">
                $56,02.99
              </td>

              <td className="py-2">
                <button className="py-1 px-3 rounded bg-[#1C2751] text-[#2356A8] ">
                  Trade
                </button>
              </td>
            </tr>

            <tr className="">
              <td className="py-2">
                <input type="checkbox" name="" id="" disabled />
              </td>

              <td className="flex items-center py-2 gap-2">
                <img src={ethereum} alt="" className="w-8 h-8" />
                <div className="text-white font-semibold text-sm">Ethereum</div>
              </td>

              <td className=" py-2 gap-2 text-white font-semibold text-sm">
                $453,432.45
              </td>

              <td className="flex items-center py-2 gap-2">
                <img src={graph} alt="" className="w-8 h-8" />
                <div className="text-[#4FDFB1] font-semibold text-sm">
                  +56.9%
                </div>
              </td>

              <td className=" py-2 gap-2 text-white font-semibold text-sm">
                $9,232.76
              </td>

              <td className=" py-2 gap-2 text-white font-semibold text-sm">
                $56,02.99
              </td>

              <td className="py-2">
                <button className="py-1 px-3 rounded bg-[#1C2751] text-[#2356A8] ">
                  Trade
                </button>
              </td>
            </tr>

            <tr className="">
              <td className="py-2">
                <input type="checkbox" name="" id="" disabled />
              </td>

              <td className="flex items-center py-2 gap-2">
                <img src={tether} alt="" className="w-8 h-8" />
                <div className="text-white font-semibold text-sm">Tether</div>
              </td>

              <td className=" py-2 gap-2 text-white font-semibold text-sm">
                $823,232.87
              </td>

              <td className="flex items-center py-2 gap-2">
                <img src={graph} alt="" className="w-8 h-8" />
                <div className="text-[#4FDFB1] font-semibold text-sm">
                  +56.9%
                </div>
              </td>

              <td className=" py-2 gap-2 text-white font-semibold text-sm">
                $9,232.76
              </td>

              <td className=" py-2 gap-2 text-white font-semibold text-sm">
                $56,02.99
              </td>

              <td className="py-2">
                <button className="py-1 px-3 rounded bg-[#1C2751] text-[#2356A8] ">
                  Trade
                </button>
              </td>
            </tr>

            <tr className="">
              <td className="py-2">
                <input type="checkbox" name="" id="" disabled />
              </td>

              <td className="flex items-center py-2 gap-2">
                <img src={binance} alt="" className="w-8 h-8" />
                <div className="text-white font-semibold text-sm">
                  Binanance
                </div>
              </td>

              <td className=" py-2 gap-2 text-white font-semibold text-sm">
                $823,232.87
              </td>

              <td className="flex items-center py-2 gap-2">
                <img src={graph} alt="" className="w-8 h-8" />
                <div className="text-[#4FDFB1] font-semibold text-sm">
                  +56.9%
                </div>
              </td>

              <td className=" py-2 gap-2 text-white font-semibold text-sm">
                $9,232.76
              </td>

              <td className=" py-2 gap-2 text-white font-semibold text-sm">
                $56,02.99
              </td>

              <td className="py-2">
                <button className="py-1 px-3 rounded bg-[#1C2751] text-[#2356A8] ">
                  Trade
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MarketTable;
