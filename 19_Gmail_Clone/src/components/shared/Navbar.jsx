import { RxHamburgerMenu } from "react-icons/rx";
import { IoSearchOutline } from "react-icons/io5";
import { CiCircleQuestion } from "react-icons/ci";
import { IoIosSettings } from "react-icons/io";
import { PiDotsNineLight } from "react-icons/pi";
import Avatar from "react-avatar"; 

const Navbar = () => {
  return (
    <div className="flex items-center justify-between mx-3 h-16">
      {" "}
      {/* ✅ fixed items-center */}
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
      <div className="hidden md:block">
        <div className="flex items-center gap-2">
          <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
            <CiCircleQuestion size={20} />
          </div>
          <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
            <IoIosSettings size={20} />
          </div>
          <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
            <PiDotsNineLight size={20} />
          </div>
          <div className="cursor-pointer">
            <Avatar
              src="https://pbs.twimg.com/profile_images/1906995199936454657/LyJgRcTy_400x400.jpg"
              size="40"
              round={true} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
