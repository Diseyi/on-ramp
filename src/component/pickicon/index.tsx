import React from "react";
import zoom from "../../assets/icons/zoom.svg";
import candlesticks from "../../assets/icons/candlesticks.svg";
import dangle from "../../assets/icons/dangle.svg";
import eye from "../../assets/icons/eye.svg";
import line from "../../assets/icons/line.svg";
import lock from "../../assets/icons/lock.svg";
import magnet from "../../assets/icons/magnet.svg";
import mark from "../../assets/icons/mark.svg";
import pencilLock from "../../assets/icons/pencil-lock.svg";
import plus from "../../assets/icons/plus.svg";
import text from "../../assets/icons/text.svg";
import switchw from "../../assets/icons/switch.svg";
import straightSwitch from "../../assets/icons/straight-switch.svg";
import ruler from "../../assets/icons/ruler.svg";

const PickIcon = () => {
  return (
    <div className=" bg-[#1F1E3E] flex gap-4 w-5 flex-col ">
      <div className="">
        <img src={plus} alt="" className="" />
      </div>

      <div className="">
        <img src={line} alt="" className="" />
      </div>

      <div className="">
        <img src={straightSwitch} alt="" className="" />
      </div>

      <div className="">
        <img src={mark} alt="" className="" />
      </div>

      <div className="">
        <img src={dangle} alt="" className="" />
      </div>

      <div className="">
        <img src={switchw} alt="" className="" />
      </div>

      <div className="">
        <img src={text} alt="" className="" />
      </div>

      <div className="">
        <img src={magnet} alt="" className="" />
      </div>

      <div className="">
        <img src={ruler} alt="" className="" />
      </div>

      <div className="">
        <img src={zoom} alt="" className="" />
      </div>

      <div className="">
        <img src={pencilLock} alt="" className="" />
      </div>

      <div className="">
        <img src={lock} alt="" className="" />
      </div>

      <div className="">
        <img src={eye} alt="" className="" />
      </div>
    </div>
  );
};

export default PickIcon;
