
import twitter from "../../public/assets/twitter.svg";
import indta from "../../public/assets/insta.svg";
import fb from "../../public/assets/fb.svg";
import web from "../../public/assets/web.svg";
import logo from "../../public/assets/logo.svg";

import user from "../../public/assets/user.svg";
const Footer = () => {
  return (
    <div className="w-full px-12 py-10 space-y-4 xl:flex justify-between items-center xl:px-40 xl:mt-20">
      <div className="h-10 xl:h-14 xl:order-1 rounded-full xl:w-fit bg-gradient-to-r from-[#FFD49C]  to-[#7A87FB] p-[2px]">
        <div className="flex h-full w-full  items-center justify-center bg-[#1C1C1C] back  rounded-full">
          <ul className="flex items-center justify-between w-full xl:gap-x-16  px-3">
            <li className="h-7 xl:h-8 px-3 xl:px-4  rounded-full flex items-center justify-center bg-[#292929]">
              <img src={twitter} alt="" className="xl:h-7" />
            </li>
            <li className="h-7 xl:h-8 px-3 xl:px-4  rounded-full flex items-center justify-center bg-[#292929]">
              <img src={web} alt="" className="xl:h-7" />
            </li>
            <li className="h-7 xl:h-8 px-3 xl:px-4  rounded-full flex items-center justify-center bg-[#292929]">
              <img src={indta} alt="" className="xl:h-7" />
            </li>
            <li className="h-7 xl:h-8 px-3 xl:px-4  rounded-full flex items-center justify-center bg-[#292929]">
              <img src={fb} alt="" className="xl:h-7" />
            </li>
          </ul>
        </div>
      </div>
      <div className="flex gap-x-2 px-1 items-center">
        <img src={logo} alt="" className="xl:h-12" />
        <p className="text-xl tracking-tight xl:text-2xl">znisa</p>
      </div>
      <div className="hidden xl:order-2 md:flex text-black">
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
export default Footer;
