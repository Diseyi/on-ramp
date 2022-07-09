import React from "react";
import Balance from "../../component/balance";
import CoinInfo from "../../component/coin";
import ExchangeCoin from "../../component/exchange-coin";
import Graph from "../../component/graph";
import Header from "../../component/header";
import MarketTable from "../../component/market-table";
import PickIcon from "../../component/pickicon";
import Sidebar from "../../component/sidebar";

const Dashboard = () => {
  return (
    <div className="flex bg-[#181736]  ">
      <div className=" w-60">
        <Sidebar />
      </div>

      <div className=" px-8 py-2 w-full h-screen overflow-scroll ">
        <Header />
        <CoinInfo />
        <div className="my-2 flex gap-3 w-full">
          <div className="flex-1 space-y-6">
            <div className="flex px-6 bg-[#1F1E3E] w-full gap-6 py-4 rounded">
              <PickIcon />
              <Graph />
            </div>
            <MarketTable />
          </div>
          <div className="space-y-6 ">
            <Balance />
            <ExchangeCoin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
