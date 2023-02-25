import React from "react";
import Headings from "./Headings";

const About = () => {
  return (
    <section id="about" className="container px-4 py-10 mx-auto">
      <Headings title="About Us" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
        <div className="py-4 ">
          <h2 className="pb-4 text-4xl">Location</h2>
          <p>1234 Maddison Str</p>
          <p>Protea Glen, Soweto</p>
        </div>
      </div>

      <div className="py-4 overflow-hidden">
        <h2 className="pb-4 overflow-hidden text-4xl">Hours</h2>
        <ul>
          <div className="overflow-hidden">
            <li>Open 7 days a week</li>
          </div>
          <div className="overflow-hidden">
            <li>Monday - Sunday</li>
          </div>
          <div className="overflow-hidden">
            <li>9am - 8pm</li>
          </div>
          <div className="overflow-hidden">
            <li>Sunday</li>
          </div>
          <div className="overflow-hidden">
            <li>11am - 6pm</li>
          </div>
        </ul>
      </div>
    </section>
  );
};

export default About;
