import React, {useEffect} from "react";
import { AiOutlineSearch } from "react-icons/ai";
import beachVid from "../assets/beachVid.mp4";

import AOS from 'aos';
import 'aos/dist/aos.css'

const Hero = () => {
  useEffect(() => {
    AOS.init({duration: 3000})
  }, []);

  return (
    <div className="w-full h-screen relative">
      <video
        className="w-full h-full object-cover"
        src={beachVid}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute w-full h-full top-0 left-0 bg-gray-900/30"></div>
      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4">
        <h1 className="mb-4">First Class Travel</h1>
        <h3>Top 1% Locations Worldwide</h3>
        <form  data-aos="fade-left" className="flex justify-between items-center mt-4 max-w-[700px] mx-auto w-full border p-0.5 rounded-md text-black bg-gray-100/80">
          <div>
            <input className="bg-transparent w-full sm:w-[400px] font-[Poppins] focus:outline-none pl-4" type="text" placeholder="Search Destinations"/>
          </div>
          <div>
            <button>
                <AiOutlineSearch size={25} className='icon' style={{color: '#ffffff'}}/>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Hero;
