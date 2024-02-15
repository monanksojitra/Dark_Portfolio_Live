import React from "react";
import start from "../../public/assets/start.svg";

const Skilles = () => {
  return (
    <div className="border-t-[1px] xl:mt-14 w-full  border-b-[1px] border-white h-14 xl:h-16 flex items-center justify-center overflow-hidden z-50">
      <ul className="flex items-center gap-x-8 xl:gap-x-28 xl:w-[75%] xl:mx-auto text-sm xl:text-xl overflow-x-scroll overflow-hidden no-scrollbar">
        <li className="flex items-center justify-center">
          <p>Framer</p>
        </li>
        <li className=" aspect-square">
          <img src={start} alt="" className=" size-5" />
        </li>
        <li className="flex items-center justify-center">
          <p>Webflow</p>
        </li>
        <li className=" aspect-square">
          <img src={start} alt="" className=" size-5" />
        </li>
        <li className="flex items-center  justify-center">
          <p>Figma</p>
        </li>
        <li className=" aspect-square">
          <img src={start} alt="" className=" size-5" />
        </li>
        <li className=" items-center gap xl:flex ">
          <p>Figma</p>
        </li>
        <li className=" aspect-square">
          <img src={start} alt="" className=" size-5 hidden xl:flex" />
        </li>
      </ul>
    </div>
  );
};

export default Skilles;
