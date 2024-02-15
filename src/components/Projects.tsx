import React from "react";
import twostar from "../../public/assets/twostar.svg";
const Projects = () => {
  const projectData = [
    { id: 1, titel: "project 1" },
    { id: 2, titel: "project 2" },
    { id: 3, titel: "project 3" },
  ];
  return (
    <div className="w-full space-y-3.5 xl:space-y-0 xl:px-20 xl:py-9">
      <div className="flex px-6 xl:px-[120px] xl:tracking-wider py-6 text-[18px] xl:text-4xl xl:pb-40 gap-x-2 xl:gap-x-9">
        <p>Some Featured projects</p>
        <img src={twostar} alt="" className="xl:h-10" />
      </div>
      <div className="xl:space-y-10 space-y-3">
        {projectData.map((item) => (
          <div className="bg-[#151515] pt-6 mx-6  xl:mx-24 xl:flex items-center">
            <div className=" h-[320px] xl:h-[550px] bg-gradient-to-r from-[#FFD49C]  to-[#7A87FB] xl:w-[50%] xl:ml-24"></div>
            <div className="flex h-20 items-center px-5 gap-x-3 xl:flex-col xl:px-28 xl:items-start xl:gap-y-6">
              <div className="h-8 xl:h-16 aspect-square rounded-full border-[2px] flex items-center justify-center">
                <p className="text-[10px] xl:text-2xl ">{item.id}</p>
              </div>
              <p className="xl:text-4xl xl:font-bold xl:tracking-wider">
                {" "}
                {item.titel}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
