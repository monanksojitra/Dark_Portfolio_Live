import React from "react";
import gridechain from "../../public/assets/gridechainphone.png";
import gridechaindesktop from "../../public/assets/gridechain.png";
const Hero = () => {
  return (
    <div className="relative xl:px-36">
      <img src={gridechain} alt="" className="md:hidden mt-6" />
      <img
        src={gridechaindesktop}
        alt=""
        className="hidden md:block scale-125 mt-24"
      />
      <div className="absolute top-[80px] xl:top-16 right-0 left-0 space-y-2 xl:space-y-1 flex flex-col items-center mx-auto   bg-contain bg-no-repeat overflow-hidden content-center">
        <p className="text-lg xl:text-4xl xl:tracking-tighter">
          I design and build clean websites
        </p>
        <p className="w-[70%] text-[9px] xl:text-base xl:w-[30%] text-center xl:pt-5 xl:pb-3">
          Write anything here something about yourself to showcase what actually
          you doing or targeting etc.
        </p>
        <div className="h-6 xl:h-11 rounded-full bg-gradient-to-r from-[#FFD49C]  to-[#7A87FB] p-[2px]">
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-r from-[#7A87FB]  to-[#FFD49C] px-3 xl:px-7 back rounded-full ">
            <p className="text-[9px] text-black xl:text-base">Hire me</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
