
import Banner from "./Banner";
import FeaturedSection from "./FeaturedSection";
import FeaturesSection from "./FeaturesSection";
import WhisperingWoodsSection from "./WhisperingWoodsSection";
import { HiArrowLongRight } from "react-icons/hi2";
import { HiArrowLongLeft } from "react-icons/hi2";
import NearbyAttractions from "./NearbyAttractions";
import AmenitiesSection from "./AmenitiesSection";
import EventsSection from "./EventsSection";
import HotelSlider from "./HotelSlider";
import WhyChooseUs from "./WhyChooseUs";
import CommonQueries from "./CommonQueries";
import FAQSection from "./FAQSection";
import Testimonials from "./Testimonials";
import BlogSection from "./BlogSection";
import PartnerBrands from "./PartnerBrands";

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="">
        <WhisperingWoodsSection />
       
      </div>
       <div className="py-8 flex lg:hidden">
        <FeaturesSection></FeaturesSection>
      </div>
     <div className="pt-12 ">
        <FeaturedSection/>
      </div>
       <div className="shadow bg-white">
        <NearbyAttractions/>
        <div className="flex justify-center items-center gap-3 py-6">
        <div className="p-3 rounded-full text-2xl bg-[#FDFAFA] drop-shadow-md">
          <HiArrowLongRight/>
        </div>
        <div className="p-3 rounded-full text-2xl bg-[#FDFAFA] drop-shadow-md">
          <HiArrowLongLeft />
        </div>
        </div>
      </div>
     <div>
        <AmenitiesSection/>
      </div>
       <div>
        <EventsSection/>
      </div>
     <div>
        <HotelSlider/>
      </div>
     <div>
        <WhyChooseUs/>
      </div> 
        <div>
        <CommonQueries/>
      </div>
       <div>
        <FAQSection/>
      </div>
     <div>
        <Testimonials/>
      </div>
       <div>
        <BlogSection/>
      </div>
      <div>
        <PartnerBrands/>
      </div> 
    </div>
  );
};

export default HomePage;
