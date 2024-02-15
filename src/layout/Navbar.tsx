import React from "react";
import logo from "../../public/assets/logo.svg";
import home from "../../public/assets/home.svg";
import menu from "../../public/assets/menu.svg";
import user from "../../public/assets/user.svg";
const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center h-20 px-6  xl:px-44 xl:my-8 my-1">
      <div className="flex items-center gap-x-2 xl:gap-x-4">
        <img src={logo} alt="" className="xl:h-11" />
        <p className="text-xl max-md:tracking-tighter xl:text-2xl">znisa</p>
      </div>
      <div className="h-11  rounded-full bg-gradient-to-r from-[#FFD49C]  to-[#7A87FB] p-[2px]">
        <div className="flex h-full w-full items-center justify-center bg-gray-800 back px-1 rounded-full border-[3px] border-[#292929] text-base">
          <img src={menu} alt="" className="md:hidden px-2" />
          <ul className=" gap-x-5 hidden md:flex  justify-between items-center">
            <li className="bg-[#292929] px-4 py-1.5 rounded-2xl">
              <img src={home} alt="" />
            </li>
            <li className="px-3.5">
              <p>About</p>
            </li>
            <li className="px-3.5">
              <p>Projects</p>
            </li>
            <li className="px-3.5">
              <p>Contact me</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="hidden md:flex text-black">
        <div className="h-12  rounded-full bg-gradient-to-r from-[#FFD49C]  to-[#7A87FB] p-[2px]">
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-r from-[#7A87FB]  to-[#FFD49C] back px-4 rounded-full  text-base">
            <p>Hire me</p>
          </div>
        </div>
        <div className="h-12  rounded-full bg-gradient-to-r from-[#FFD49C]  to-[#7A87FB] p-[2px]">
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-r from-[#7A87FB]  to-[#FFD49C] back px-3 rounded-full  text-base">
            <img src={user} alt="" className="h-5" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
