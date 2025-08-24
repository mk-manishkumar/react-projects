import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoSearchOutline } from "react-icons/io5";


const Navbar = () => {
  return (
    <div className="flex item-center justify-between mx-3 h-16">
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-2">
          <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
            <RxHamburgerMenu size={20} />
          </div>
          <img className="w-12" src="https://images.icon-icons.com/2642/PNG/512/google_mail_gmail_logo_icon_159346.png" alt="gmail_logo" />
          <h1 className="text-2xl font-medium text-gray-500">Gmail</h1>
        </div>
      </div>
      <div className="md:block hidden w-[50%] mr-60">
        <div className="flex items-center bg-[#eaf1fb] px-2 py-3 rounded-full">
          <IoSearchOutline size={24} className="text-gray-700" />
          <input type="text" className="rounded-full bg-transparent w-full px-1 outline-none" placeholder="Search Mail" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
