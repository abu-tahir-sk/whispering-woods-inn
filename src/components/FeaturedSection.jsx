
import roomOverviewImg from '../assets/image/date-taken.png'; 
import deluxeRoomImg from '../assets/image/date-2.png';
import executiveSuiteImg from '../assets/image/date-3.png';
import Featured from './Featured';

const FeaturedSection = () => {
  
  const primaryBg = '#f7ede3'; 

  // --- Component Structure ---
  return (
    <section 
      className={`relative py-[60px] text-center overflow-visible  bg-[#F9ECDA]`}
    
    >
      
      {/* 1. Large Faded Background Text */}
      <div>
        <Featured/>
      </div>
     

      {/* 3. Content Grid */}
      <div className="relative z-10 flex flex-col lg:flex-row justify-center items-stretch gap-7 max-w-7xl mx-auto px-16">
        
        {/* === A. Room Overview Box (Left - Dark Text) === */}
        <div className="flex-1 lg:max-w-[calc(33.333%-14px)] flex flex-col bg-transparent">
          <div className="relative overflow-hidden mb-4 bg-white p-3">
            <img 
              src={roomOverviewImg} 
              alt="Room Overview" 
              className="w-full h-full object-cover " 
            />
            <div className="absolute top-4 left-4 bg-white/60 text-gray-700 px-3 py-1 text-xs font-bold rounded-full">
              Room Overview
            </div>
          </div>
          <div className="bg-[#27282B] text-gray-300 p-6 flex flex-col justify-between flex-grow min-h-[250px]"> 
            <p className="text-sm leading-relaxed mb-6 font-serif">
              Our rooms are thoughtfully designed to offer the perfect blend of comfort, style, and convenience. Each room features elegant decor, cozy furnishings, and modern amenities to ensure a relaxing stay. Whether you're here for business or leisure, our serene ambiance and personalized service make every moment memorable.
            </p>
         <div>
               <a href="#" className={`text-[${primaryBg}] text-sm  tracking-wider hover:underline self-start`}>
              READ MORE →
            </a>
         </div>
          </div>
        </div>

        {/* === B. Deluxe Room Box (Middle - White Background) === */}
        <div className="flex-1 lg:max-w-[calc(33.333%-14px)] flex flex-col">
          <div className="relative overflow-hidden">
            <img 
              src={deluxeRoomImg} 
              alt="Deluxe Room" 
              className="w-full h-auto object-cover" 
            />
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <h4 className="text-xl font-garamond font-bold text-black mb-2 font-serif">
              Deluxe Room
            </h4>
            <p className="text-sm leading-relaxed text-[#000000] mb-6 flex-grow font-serif">
              Our Deluxe Rooms are designed to offer the ideal combination of modern comfort and timeless style. Each room features a cozy king or queen-sized bed.
            </p>
            {/* No button or link here, maintaining the visual gap */}
          </div>
        </div>

        {/* === C. Executive Suite Box (Right - White Background) === */}
        <div className="flex-1 lg:max-w-[calc(33.333%-14px)] flex flex-col">
          <div className="relative overflow-hidden">
            <img 
              src={executiveSuiteImg} 
              alt="Executive Suite" 
              className="w-full h-auto object-cover" 
            />
          </div>
          <div className="p-6 flex flex-col flex-grow relative">
            <h4 className="text-xl font-garamond font-bold text-[#000000] mb-2">
              Executive Suite
            </h4>
            <p className="text-sm leading-relaxed text-[#000000] mb-6 flex-grow font-serif">
              Experience the perfect blend of elegance and functionality in our Executive Suite, designed for business travelers and luxury seekers alike
            </p>
            <a 
              href="#" 
              className="static md:absolute md:-left-8 md:bottom-4  mt-auto inline-block self-start px-6 py-3 border border-[#CC9447] rounded-2xl text-[#010000] font-bold text-sm bg-[#E4CFB2] hover:bg-gray-50 transition-colors duration-200"
            >
              Let's Talk →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;