import  { useState } from "react";
import hotel from "../assets/image/vcxb-removebg-preview.png"
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";

const hotels = [
  { img: "https://i.ibb.co/HLXymKhW/2967db11540adf9fbdce17c6d703094cc2d5dad3.png" },
  { img: "https://i.ibb.co/6RF3S6Lz/5ff7fd5542d437cfc1e123fb179713fdca1d17e5.png" },
  { img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c" },
  { img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267" },
  { img: "https://i.ibb.co/TDrnG3Xd/63ebcfb1be9bf614f77bdfb695f721b8be9b14ae.png" },
  { img: "https://images.unsplash.com/photo-1566073771259-6a8506099945" },
];

const HotelSlider = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev >= hotels.length - 3 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? hotels.length - 3 : prev - 1));
  };

  return (
    <section className="w-full py-16 bg-white flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-10 px-6 md:px-12">
      {/* LEFT TEXT SECTION */}
      <div className="lg:w-[18%] text-center lg:text-left">
        <img className="w-[67px] mx-auto lg:mx-0" src={hotel} alt=""  />
        <div className="flex justify-center lg:justify-start mb-2">
          
          <span className="text-[#000000] tracking-[0.3em] font-semibold text-sm">
            HOTELS
          </span>
        </div>
        <h2 className="text-3xl font-semibold font-garamond text-[#000000] mb-4">
          Clicks around our hotels
        </h2>
        <p className="text-[#000000] leading-relaxed mb-6 text-[14px]">
          Located on the main State Highway, within 10 mins of the University,
          Railway Station, and other major connections.
        </p>
      </div>

      {/* RIGHT SLIDER SECTION */}
      <div className="relative w-full lg:w-[80%] overflow-hidden">
        {/* Arrow Buttons (visible on all screen sizes) */}
        <button
          onClick={prevSlide}
          className="absolute -left-1 top-1/2 -translate-y-1/2  text-white rounded-full p-1 shadow-md bg-white hover:bg-green-600 transition z-10"
        >
          <HiArrowLongLeft  className="text-3xl bg-green-600 rounded-full p-1" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white text-white rounded-full p-1 shadow-md hover:bg-green-600 transition z-10"
        >
          <HiArrowLongRight className="text-3xl bg-green-600 rounded-full p-1" />
        </button>

        {/* 🔹 Image Container */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${current * (100 / 3)}%)`,
          }}
        >
          {hotels.map((hotel, i) => (
            <div
              key={i}
              className="min-w-[100%] sm:min-w-[50%] md:min-w-[33.333%] px-1"
            >
              <img
                src={hotel.img}
                alt={`Hotel ${i + 1}`}
                className="w-full h-[280px] sm:h-[320px] md:h-[360px] lg:h-[400px] object-cover  shadow-md"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HotelSlider;
