

const Attraction = () => {
      return (
               <div className="relative  text-center py-8">
      <h2
        className="
      text-[1rem]         
      md:text-[3rem]    
      lg:text-[4rem]     
      xl:text-[5rem]   
      font-extrabold 
      text-[#63625F1F]  
      tracking-[1rem] 
      lg:tracking-[2rem]
       xl:tracking-[3rem] 
      opacity-50
    "
      >
          ATTRACTIONS
      </h2>

     
       <div className="absolute inset-0 
      flex flex-col items-center justify-center 
      text-2xl sm:text-3xl md:text-4xl 
       text-[#000000]">
        <h2 className="text-[20px] tracking-[4px] font-normal text-[#000000] uppercase mb-1 font-sans">
         EXPLORE
        </h2>
        <h3 className="text-4xl  text-[#000000] font-semibold font-garamond">
          Nearby Attractions
        </h3>
      </div>
    </div>
      );
};

export default Attraction;