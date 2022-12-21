import React, {useState} from "react";
import { BiSearch } from "react-icons/bi";
import { FaFacebook, FaInstagram, FaPinterest, FaRegUser, FaTwitter, FaYoutube } from "react-icons/fa";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [logo, setLogo] = useState(false)

    const handleNav = () => {
        setNav(!nav)
        setLogo(!logo)
    }


  return (
    <div>
      <div className="flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white">
        <h1 className={logo ? 'hidden' : 'block'}>TRAVEL.</h1>
        <ul className="hidden md:flex">
          <li>Home</li>
          <li>Travel</li>
          <li>Book</li>
          <li>Destinations</li>
          <li>View</li>
        </ul>
        <div className="hidden md:flex">
          <BiSearch className="cursor-pointer" size={20} />
          <FaRegUser className="ml-4 cursor-pointer" size={20} />
        </div>

        {/* ==========================HAMBURGER========================= */}

        <div onClick={handleNav} className="block md:hidden z-10 absolute right-4 top-7">
            {nav ? <AiOutlineClose size={25} className="text-black"/> : <HiOutlineMenuAlt4 size={25} />}
        </div>

        {/* ===========================MOBILE MENU DROPDOWN================== */}

        <div className={nav ? 'absolute left-0 top-0 w-full text-black bg-gray-100/90 px-4 py-7 flex flex-col md:hidden' : 'text-black absolute left-[-100%] md:hidden'}>
          <h1>TRAVEL.</h1>
          <ul className="">
            <li className=" border-b-2">Home</li>
            <li className=" border-b-2">Destinations</li>
            <li className=" border-b-2">Travel</li>
            <li className=" border-b-2">Views</li>
            <li className=" border-b-2">Book</li>
          </ul>
          <div className="flex flex-col">
            <button className="my-6">Search</button>
            <button>Account</button>
          </div>
          <div className="flex justify-between my-6">
            <FaFacebook className="icon"/>
            <FaTwitter className="icon"/>
            <FaInstagram className="icon"/>
            <FaPinterest className="icon"/>
            <FaYoutube className="icon"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
