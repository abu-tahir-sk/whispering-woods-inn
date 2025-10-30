// src/components/AmenitiesSection.jsx


import AmenityCard from './AmenityCard';
import { amenitiesData } from '../data/amenitiesData'; // Define your data separately
import Amenitie from './Amenitie';

const AmenitiesSection = () => {
  return (
    <section className="py-12 bg-[#F2FAF1]"> {/* Adjust background color */}
        <div className='py-6'>
          <Amenitie/>
        </div>
      <div className="container mx-auto px-4">
      
        
        {/* Amenities Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 xl:gap-8 justify-items-center px-4">
          {amenitiesData.map((amenity, index) => (
            <AmenityCard key={index} {...amenity} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;