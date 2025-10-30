import Slider from "react-slick";
import { HiArrowLongRight, HiArrowLongLeft } from "react-icons/hi2";
import banner1 from "../assets/image/banner.jpg";
import banner2 from "../assets/image/banner.jpg";
import banner3 from "../assets/image/banner.jpg";
import imgs from "../assets/image/imgs.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
  const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    pauseOnHover: false,
  };

  const slides = [
    {
      image: banner1,
      desc: "Whispering Woods Inn is an unique resort located in outskirts of Shantiniketan, an iconic tourist destination in Birbhum, West Bengal.",
    },
    {
      image: banner2,
      desc: "Relax and rejuvenate amidst lush greenery and scenic beauty.",
    },
    {
      image: banner3,
      desc: "Enjoy premium amenities while staying close to nature.",
    },
  ];

  return (
    <section className="relative w-full overflow-visible z-10">
      {/*  Banner Slider */}
      <div className="relative max-w-[100vw] overflow-x-hidden">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index}>
              <div
                className="relative h-[70vh] md:h-[100vh] bg-cover bg-center flex items-center justify-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/10"></div>

                {/* Circle Content */}
                <div
                  className="relative z-10 text-center text-black/80
                  rounded-full mx-auto flex flex-col justify- items-center
                  bg-white/90 backdrop shadow-lg border border-white/70
                  p-4 sm:p-6 transition-all duration-300
                  w-[70vw] max-w-[400px] aspect-square"
                >
                  <img
                    className="w-28 md:w-36 mx-auto py-6"
                    src={imgs}
                    alt="imgs"
                  />
                  <h1 className=" text-3xl md:text-3xl lg:text-4xl font-bold mb-2 leading-tight px-2  font-garamond">
                    A <span className="text-[#0a6811]"> Village Resort</span> In
                    The Lap Of Nature
                  </h1>
                  <p className="text-[10px] sm:text-sm md:text-[14px] py-4 text-black/60 px-4">
                    {slide.desc}
                  </p>
                  <button
                    className="bg-[#108D18] hover:bg-[#0a6811] text-white border-none
                    px-3 sm:px-5 md:px-6 py-1 sm:py-2 lg:py-2 rounded-full 
                    text-xs sm:text-sm md:text-base flex justify-center items-center gap-2 transition-all"
                  >
                    Get In Touch <HiArrowLongRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* ✅ Full Width Wave */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
        <svg
          className="block w-full h-20 md:h-28"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#F2FAF1"
            fillOpacity="1"
            d="M0,224L48,192C96,160,192,96,288,96C384,96,480,160,576,197.3C672,235,768,245,864,218.7C960,192,1056,128,1152,117.3C1248,107,1344,149,1392,170.7L1440,192L1440,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

// ✅ Next Arrow
function SampleNextArrow({ onClick }) {
  return (
    <div
      className="absolute right-5 top-1/2 transform -translate-y-1/2 text-white bg-black/60 p-2 rounded-full cursor-pointer hover:bg-[#0a6811] z-20"
      onClick={onClick}
    >
      <HiArrowLongRight size={28} />
    </div>
  );
}

// ✅ Prev Arrow
function SamplePrevArrow({ onClick }) {
  return (
    <div
      className="absolute left-5 top-1/2 transform -translate-y-1/2 text-white bg-black/60 p-2 rounded-full cursor-pointer hover:bg-[#0a6811] z-20"
      onClick={onClick}
    >
      <HiArrowLongLeft size={28} />
    </div>
  );
}

export default Banner;
