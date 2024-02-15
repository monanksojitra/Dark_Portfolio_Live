
import twostar from "../../public/assets/twostar.svg";
import twocoma from "../../public/assets/twocoma.svg";

const ClientTestimonials = () => {
  const listdata = [1, 2, 3, 4];
  return (
    <div className="w-full xl:mx-auto xl:w-[80%] xl:mt-12">
      <div className="flex px-6 pt-14 text-[18px] xl:px-12 xl:text-4xl  gap-x-3 xl:gap-x-9">
        <p className="xl:tracking-wider">Client testimonials</p>
        <img src={twostar} alt="" className="xl:h-10" />
      </div>

      <div className="w-full my-11 space-y-5 xl:space-y-0 xl:mt-28 xl:flex flex-wrap xl:gap-y-10">
        {listdata.map((item) => (
          <div
            className="bg-gradient-to-tl via-[#FFD49C] from-50% xl:w-[35%]  from-[#7A87FB] to-transparent mx-5 h-40 xl:h-full  rounded-3xl"
            key={item}
          >
            <div className="bg-[#151515] h-full rounded-3xl translate-x-[1px] translate-y-[1px]">
              <div className="flex items-center justify-between w-full px-6 pt-7">
                <div className=" flex items-center justify-center gap-x-2 xl:gap-x-5">
                  <img
                    src="https://xsgames.co/randomusers/avatar.php?g=male"
                    alt=""
                    className="rounded-full h-10 aspect-square xl:h-12 "
                  />
                  <div className="text-white space-y-2 xl:space-y-0">
                    <p className="text-sm tracking-tight xl:text-xl">
                      Client Name
                    </p>
                    <p className="text-[9px] tracking-wider xl:text-xs">
                      Product designer
                    </p>
                  </div>
                </div>
                <img src={twocoma} alt="" className="xl:h-8" />
              </div>
              <div className="flex items-center justify-start p-5">
                <p className="text-xs leading-4 xl:text-sm">
                  s simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the{" "}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientTestimonials;
