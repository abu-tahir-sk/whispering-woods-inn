import phone from "../assets/image/phone.png";
import { TfiEmail } from "react-icons/tfi";
import { HiOutlineMenuAlt4 } from "react-icons/hi";


const Navbar = () => {
  
  return (
    <nav className="flex flex-col md:flex-row items-center justify-between shadow-sm bg-white px-4 md:px-6 py-2 w-[95%] mx-auto gap-3 md:gap-0">
      {/* Left Section */}
      <div className="flex items-center gap-3 flex-wrap justify-center md:justify-start">
        {/* Menu */}
        <div className="flex items-center justify-center gap-2 cursor-pointer">
          <HiOutlineMenuAlt4 className="text-[26px] pb-1 text-gray-700" />
          <span className="font-medium text-[15px] border-r-2 pr-3 border-gray-400">
            Menu
          </span>
        </div>

        {/* Email */}
        <div className="flex items-center gap-2  px-3 py-1 rounded-full ">
          <TfiEmail className="text-gray-700 text-[16px]" />
          <span className="text-sm text-gray-700 whitespace-nowrap">
            whisperinghotel@gmail.com
          </span>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-3 flex-wrap justify-center md:justify-end">
        {/* Phone */}
        <div className="flex items-center gap-2  px-3 py-1 rounded-full ">
          <img className="w-[20px] h-[20px]" src={phone} alt="phone" />
          <span className="text-sm text-gray-700 whitespace-nowrap">
            94761 04546
          </span>
        </div>

        {/* Button */}
        <button className="btn btn-sm md:btn-md px-3 md:px-4 bg-[#108D18] hover:bg-[#0a6811] text-white text-[13px] md:text-[14px] rounded-none ">
          Reserve Your Stay
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
