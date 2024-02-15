
import twostar from "../../public/assets/twostar.svg";
import roundcut from "../../public/assets/cutround.svg";
const ProssessToDesign = () => {
  return (
    <div className="w-full mt-2 xl:px-40 xl:pt-14">
      <div className="flex px-6 xl:px-10 py-11 text-[18px] xl:text-4xl xl:tracking-wider  gap-x-3 xl:gap-x-8">
        <p>My process to design</p>
        <img src={twostar} alt="" className="xl:h-10 aspect-square" />
      </div>
      <div className="px-8 pt-3 xl:pt-14 flex gap-x-7 h-full">
        <div className="h-full flex flex-col items-center justify-center gap-y-1">
          <div className="border-[1px] h-6 xl:h-14 flex items-center justify-center aspect-square rounded-full">
            <p className="text-[8px] xl:text-xl">1</p>
          </div>
          <div className="h-[140px] xl:h-[300px] w-[1px] bg-gray-400 rounded-full " />
        </div>
        <div className="h-full xl:px-9">
          <img src={roundcut} alt="" className="xl:h-14" />
          <div className="mt-3 xl:mt-6 space-y-2 xl:space-y-5">
            <p className="text-xs xl:text-2xl xl:tracking-tighter">
              Step 1: Product design Research
            </p>
            <p className="text-[9px] xl:text-base xl:tracking-[1.4px] xl:leading-7 xl:w-[60%]">
              This initial step involves a systematic and thorough exploration
              of the market landscape, user needs, and existing solutions.
            </p>
            <div className="h-6 xl:h-12 rounded-full w-fit bg-gradient-to-r from-[#FFD49C]  to-[#7A87FB] p-[2px] mt-1">
              <div className="flex h-full w-full items-center justify-center bg-gray-800 back px-2.5  xl:px-6 rounded-full border-[3px] border-[#292929]">
                <p className="text-[8px] tracking-wide xl:text-base">
                  See Examples
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-8 pt-2 xl:pt-6 flex gap-x-7 h-full">
        <div className="h-full flex flex-col items-center justify-center gap-y-1">
          <div className="border-[1px] h-6 xl:h-14 flex items-center justify-center aspect-square rounded-full">
            <p className="text-[8px] xl:text-xl">2</p>
          </div>
          <div className="h-[80px] xl:h-[210px] w-[1px] bg-gray-400 rounded-full " />
        </div>
        <div className="h-full xl:px-9">
          <img src={roundcut} alt="" className="xl:h-14 rotate-90" />
          <div className="mt-3 xl:mt-8 space-y-2 xl:space-y-0">
            <p className="text-xs xl:text-2xl xl:tracking-tighter">
              Step 2: UI design in figma
            </p>
            <p className="text-[9px] xl:text-base xl:tracking-[1.4px] xl:leading-7 xl:w-[60%]">
              This initial step involves a systematic and thorough exploration
              of the market landscape, user needs, and existing solutions.
            </p>
          </div>
        </div>
      </div>
      <div className="px-8 pt-3 xl:pt-5 flex gap-x-7 h-full">
        <div className="h-full flex flex-col items-center justify-center gap-y-1">
          <div className="border-[1px] h-6 xl:h-14 flex items-center justify-center aspect-square rounded-full">
            <p className="text-[8px] xl:text-xl">3</p>
          </div>
          <div className="h-[90px] xl:h-[210px] w-[1px] bg-gray-400 rounded-full " />
        </div>
        <div className="h-full xl:px-9">
          <img src={roundcut} alt="" className="xl:h-14 rotate-180" />
          <div className="mt-3 xl:mt-6 space-y-2 xl:space-y-1">
            <p className="text-xs xl:text-2xl xl:tracking-tighter">
              Step 1: No-code develop in webflow
            </p>
            <p className="text-[9px] xl:text-base xl:tracking-[1.4px] xl:leading-7 xl:w-[60%]">
              This initial step involves a systematic and thorough exploration
              of the market landscape, user needs, and existing solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProssessToDesign;
