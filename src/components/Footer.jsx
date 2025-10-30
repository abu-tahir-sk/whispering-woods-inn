import {
  Facebook,
  Instagram,
  Linkedin,
  X,
  Phone,
  Mail,
} from "lucide-react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const Footer = () => {
  return (
    <div className="relative">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-[url('https://i.ibb.co/vxJ8kFxK/b70e0bb4ebd62a1b2927a072ed7a7b7115bb9d84-1.jpg')] bg-cover bg-center opacity-90"
      ></div>

      {/* Footer Section */}
      <footer className="text-white">
        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto py-12 px-6 md:px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Left Section */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="flex items-center">
              <img
                src="https://i.ibb.co/4Z7X79kt/logo.png"
                alt="Whispering Woods Logo"
                className="mb-2"
              />
            </div>

            {/* Description */}
            <p className="text-[14px] text-[#FFFFFF] leading-relaxed">
              Whispering Woods Inn, located beside the State Highway near
              Kamarpara, is a resort amidst nature. The resort offers 30 rooms
              spread over 3 buildings separated by green lawns.
            </p>

            {/* Social Links */}
            <div className="mt-6">
              <h4 className="font-semibold text-lg mb-3 relative text-white inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-10 after:h-[2px] after:bg-red-700 after:rounded-full before:content-[''] before:absolute before:left-10 before:bottom-0 before:w-4 before:h-[2px] before:bg-white before:rounded-full">
                Social Link
              </h4>

              <div className="flex gap-4 mt-2">
                <a
                  href="#"
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-[#FFFFFF] text-[#108D18] hover:bg-green-600 transition"
                >
                  <Facebook size={16} />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-[#FFFFFF] text-[#108D18] hover:bg-green-600 transition"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-[#FFFFFF] text-[#108D18] hover:bg-green-600 transition"
                >
                  <X size={16} />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-[#FFFFFF] text-[#108D18] hover:bg-green-600 transition"
                >
                  <Linkedin size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h4 className="font-semibold relative text-lg text-white mb-4 inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-10 after:h-[2px] after:bg-red-700 after:rounded-full before:content-[''] before:absolute before:left-10 before:bottom-0 before:w-4 before:h-[2px] before:bg-white before:rounded-full">
              Quick Links
            </h4>

            <ul className="space-y-3 text-sm text-gray-100 mt-2">
              {["Home", "About Us", "Rooms", "Gallery", "Contact Us", "Services"].map(
                (item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 group transition"
                  >
                    <MdOutlineKeyboardDoubleArrowRight 
                      size={14}
                      className="text-white group-hover:translate-x-1 transition-transform duration-200"
                    />
                    <a href="#" className="group-hover:text-green-300 transition">
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Legal */}
          <div className="lg:col-span-1">
            <h4 className="font-semibold mb-4 relative text-lg text-white inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-10 after:h-[2px] after:bg-red-700 after:rounded-full before:content-[''] before:absolute before:left-10 before:bottom-0 before:w-4 before:h-[2px] before:bg-white before:rounded-full">
              Legal
            </h4>

            <ul className="space-y-3 text-sm text-gray-100 mt-2">
              {["Terms of Use", "Privacy Policy", "Site Map", "FAQ", "Help"].map(
                (item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 group transition"
                  >
                    <MdOutlineKeyboardDoubleArrowRight 
                      size={14}
                      className="text-white group-hover:translate-x-1 transition-transform duration-200"
                    />
                    <a href="#" className="group-hover:text-green-300 transition">
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold text-lg mb-4 relative text-white inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-10 after:h-[2px] after:bg-red-700 after:rounded-full before:content-[''] before:absolute before:left-10 before:bottom-0 before:w-4 before:h-[2px] before:bg-white before:rounded-full">
              Contact Information
            </h4>
            <p className="text-sm text-gray-100 mb-2">Have a question?</p>
            <div className="flex items-center gap-2 mb-2">
              <Phone size={16} />
              <p className="text-sm">94761 04546</p>
            </div>
            <div className="flex items-center gap-2 mb-4">
              <Mail size={16} />
              <p className="text-sm">whisperinghotel@gmail.com</p>
            </div>

            {/* Google Map */}
            <div className="rounded-lg overflow-hidden">
              <iframe
                title="Whispering Woods Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.732458534829!2d88.3693193147912!3d22.632629185151987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89c93598cd45b%3A0x6a55678dce2b932c!2sWhispering%20Woods%20Inn!5e0!3m2!1sen!2sin!4v1709281100542!5m2!1sen!2sin"
                width="100%"
                height="140"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="relative bg-red-800 text-center py-3 text-sm">
          <p className="text-white">
            Copyright © 2025, All Rights Reserved by{" "}
            <span className="font-semibold underline underline-offset-2">Whispering Woods</span>. Design &
            Developed by{" "}
            <span className="text-orange-300 underline underline-offset-2">Insu Creation Pvt. Ltd.</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
