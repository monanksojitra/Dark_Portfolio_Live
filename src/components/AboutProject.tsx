
import twostar from "../../public/assets/twostar.svg";
import fram from "../../public/assets/fram.png";

const AboutProject = () => {
  return (
    <div className="py-7 xl:py-20 xl:mt-20 xl:pl-40 xl:relative">
      <div className="flex px-6 py-3 text-[18px] gap-x-3 xl:gap-x-5 xl:text-[40px]">
        <p>Have idea about project?</p>
        <img src={twostar} alt="" className="xl:h-12" />
      </div>
      <div className="py-2 px-7">
        <p className="text-[9px] xl:text-base xl:w-[35%]">
          Write anything here something about yourself to showcase what actually
          you doing or targeting etc.
        </p>
        <div className="h-6 xl:h-10 my-4 w-fit rounded-full bg-gradient-to-r from-[#FFD49C]  to-[#7A87FB] p-[2px]">
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-r from-[#7A87FB]  to-[#FFD49C] px-2 xl:px-5 back rounded-full ">
            <p className="text-[9px] text-black xl:text-base">
              Send us a message
            </p>
          </div>
        </div>
      </div>
      <div className="hidden xl:block xl:absolute right-52 top-16">
        <img src={fram} alt="" />
      </div>
    </div>
  );
};

export default AboutProject;
