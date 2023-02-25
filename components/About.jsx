import React from "react";
import Headings from "./Headings";
import { GrMapLocation } from "react-icons/gr";
import { BsClock } from "react-icons/bs";

const About = (props) => {
  return (
    <section id="about" className="container px-4 py-10 mx-auto">
      <Headings title="About Us" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
        <div className="">
          <div>
            <p>{props.desc}</p>
          </div>
          <h2 className="text-2xl pt-9 pb-4 flex items-center">
            <GrMapLocation className="mr-5" />
            Location
          </h2>
          <p>{props.street}</p>
          <p>{props.city}</p>
        </div>

        <div>
          <h2 className="text-2xl pb-5 flex items-center px-4">
            <BsClock className="mr-5" />
            Hours
          </h2>
          <div className="flex items-center justify-between w-[400px]">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4 font-medium">
                {/* <AiOutlineGift className="text-emerald-700 text-[22px]" /> */}
                Monday
              </div>
              <div className="flex items-center gap-4 font-medium">
                {/* <FiBookOpen className="text-emerald-700 text-[22px]" /> */}
                Tuesday
              </div>
              <div className="flex items-center gap-4 font-medium">
                {/* <BsGlobe2 className="text-emerald-700 text-[22px]" /> */}
                Wednesday
              </div>
              <div className="flex items-center gap-4 font-medium">
                {/* <TbPacman className="text-emerald-700 text-[22px]" /> */}
                Thursday
              </div>
              <div className="flex items-center gap-4 font-medium">
                {/* <IoLocationOutline className="text-emerald-700 text-[22px]" /> */}
                Friday
              </div>
            </div>
            <div className="flex flex-col gap-6 text-gray-600">
              <div>:</div>
              <div>:</div>
              <div>:</div>
              <div>:</div>
              <div>:</div>
            </div>
            <div className="flex flex-col gap-6 text-gray-600">
              <div>10am - 6pm</div>
              <div>10am - 6pm</div>
              <div>10am - 6pm</div>
              <div>10am - 6pm</div>
              <div>10am - 6pm</div>
            </div>
          </div>
          <div className="max-w-[800px]">
            <h2 className="font-bold mt-16 mb-10">{props.title}</h2>
            <p className="text-gray-600"> {props.description}</p>
            {/* <Button
              link="https://mbhoniprofilecard.netlify.app/"
              text="Hire Me"
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
