

import resortImage from "../assets/image/image.png";
import FeaturesSection from "./FeaturesSection";

const WhisperingWoodsSection = () => {
  return (
    <section className="relative bg-[#F2FAF1]  overflow-visible z-20 p-16">
   
      <div
        className="absolute top-[49%] left-4 -translate-y-1/2 flex items-center justify-center pointer-events-none z-0"
        style={{
          // Use translateX(-50%) to vertically center the text along the rotated axis
          transform: "rotate(-90deg) translateX(-40%) translateY(-0%)",
          transformOrigin: "left top",
        }}
      >
        <span className="text-5xl md:text-7xl font-extrabold text-[#108D1814] opacity-100 tracking-widest uppercase whitespace-nowrap overflow-visible z-10">
          WHISPERING
        </span>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">
          {/* Left Column: Text Content */}
          <div className="lg:w-1/2 order-2 lg:order-1 text-center lg:text-left">
            {/* Green Accent Dots (Top Left) */}
           
<div className="flex items-center justify-center my-6 py-6 space-x-1 mb-4  lg:justify-start">
      {/* Left arrow */}
      <div className="w-2 h-2 bg-green-700 rotate-45"></div>

      {/* Line + center diamond + line */}
      <div className="flex items-center mx-2">
        <div className="w-20 h-[2px] bg-green-700"></div>
        <div className="w-3 h-3 bg-green-700 rotate-45 mx-2"></div>
        <div className="w-20 h-[2px] bg-green-700"></div>
      </div>

      {/* Right arrow */}
      <div className="w-2 h-2 bg-green-700 rotate-45"></div>
    </div>
    
            {/* FONT: Using font-sans for better cross-browser consistency */}
            <h1 className="text-4xl md:text-5xl font-garamond font-bold text-gray-800 leading-tight mb-4">
              Whispering Woods Inn
            </h1>
            <h2 className="text-2xl md:text-3xl font-light text-gray-700 mb-8  inline-block pb-1">
              A village resort in the lap of Nature
              {/* Green Underline Accent */}
             
            </h2>

            <p className="text-gray-600 text-[14px] leading-relaxed mb-6">
              Whispering Woods Inn is an unique resort located in outskirts of
              Shantiniketan, an iconic tourist destination in Birbhum, West
              Bengal.
            </p>
            <p className="text-gray-600 text-[14px] leading-relaxed mb-6">
              We offer you the experience of living amidst nature. Take a deep
              breath in fresh
              
                air
              while walking down the mystical roads ('Ranga Matir Path') through
              the tribal village.
            </p>
            <p className="text-gray-600 text-[14px] leading-relaxed mb-8">
              To experience the nature and feel the vibes of Shantiniketan, plan
              your next weekend at Whispering Woods. Here we live everyday with
              simple motto - 'Live and care for Nature'.
            </p>

            {/* Google Reviews Button */}
            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-full sm:text-[14px] md:text[16px] shadow-lg transition duration-300">
              4.3/5(232)Google reviews
            </button>
          </div>

          {/* Right Column: Image and Image Borders */}
          <div className="lg:w-1/2 order-1 lg:order-2 flex justify-center lg:justify-end relative">
            {/* Main Image Container */}
            <div className="relative w-full max-w-lg lg:max-w-none">
              {/* Image with subtle shadow and border radius */}
              <img
                src={resortImage}
                alt="Whispering Woods Inn Resort"
                className="w-full h-96 md:h-[400px] lg:h-[450px] object-cover "
              />

              {/* Overlapping Green Border (top, right, bottom) */}
              <div
                className="absolute border-2 border-[#108D18] "
                style={{
                  top: "6rem",
                  right: "2rem",
                  bottom: "-2rem",
                  left: "-2rem",
                  
                }}
              ></div>

              {/* Green Accent Dots (The matrix of dots) */}
              {/* Positioned relative to the image container (max-w-lg) */}
              <div className="hidden md:flex flex-col absolute -bottom-16 right-8 gap-2 z-10">
                <div className="flex space-x-2">
                  <span className="w-1.5 h-1.5 bg-[#108D18]"></span>
                  <span className="w-1.5 h-1.5 bg-[#108D18]"></span>
                  <span className="w-1.5 h-1.5 bg-[#108D18]"></span>
                  <span className="w-1.5 h-1.5 bg-[#108D18]"></span>
                  <span className="w-1.5 h-1.5 bg-[#108D18]"></span>
                  <span className="w-1.5 h-1.5 bg-[#108D18]"></span>
                  <span className="w-1.5 h-1.5 bg-[#108D18]"></span>
                  <span className="w-1.5 h-1.5 bg-[#108D18]"></span>
                  <span className="w-1.5 h-1.5 bg-[#108D18]"></span>
                  <span className="w-1.5 h-1.5 bg-[#108D18]"></span>
                </div>
                <div className="flex space-x-2">
                  <span className="w-1.5 h-1.5 bg-[#108D18]"></span>
                  <span className="w-1.5 h-1.5 bg-[#108D18]"></span>
                  <span className="w-1.5 h-1.5 bg-[#108D18]"></span>
                  <span className="w-1.5 h-1.5 bg-[#108D18]"></span>
                  <span className="w-1.5 h-1.5 bg-[#108D18]"></span>
                  <span className="w-1.5 h-1.5 bg-[#108D18]"></span>
                  <span className="w-1.5 h-1.5 bg-[#108D18]"></span>
                  <span className="w-1.5 h-1.5 bg-[#108D18]"></span>
                  <span className="w-1.5 h-1.5 bg-[#108D18]"></span>
                  <span className="w-1.5 h-1.5 bg-[#108D18]"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex lg:absolute -bottom-6 pt-4">
        <FeaturesSection></FeaturesSection>
      </div>
    </section>
  );
};

export default WhisperingWoodsSection;
