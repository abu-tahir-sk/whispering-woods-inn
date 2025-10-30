




const AmenityCard = ({ name, icon: IconComponent }) => {
  return (
    <div className="w-full max-w-xs text-center cursor-pointer transition duration-300 hover:scale-[1.03]">
      <div className="hexagon relative w-full pt-[80%] flex flex-col items-center justify-center p-4"> 
        
        {/* Absolute position for content over the hexagon background */}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center pt-8 pb-4"> 
            
          {/* Icon Section (Small Hexagon) */}
          <div className="icon-hexagon mb-4 flex items-center justify-center -mt-8"> 
            <IconComponent className="text-4xl text-[#108D18]" />
          </div>

          {/* Text Section */}
          <p className="text-sm  text-[#000000] px-3 leading-tight">
            {name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AmenityCard;