

const FeaturesSection = () => {
  const features = [
    {
      icon: 'https://i.ibb.co/S7Q4RXGR/cef75784b60bf40d7d430a7acd28ff68af6fce7b.png',
      title: "Five stars luxury resort",
      desc: "Large swimming pool",
    },
    {
      icon: 'https://i.ibb.co/b5qLS3qz/952115d7b4d23867276de1241db5962ec8083b69.png',
      title: "Well trained manpower",
      desc: "Experience a unique stay.",
    },
    {
      icon: "https://i.ibb.co/xtYsy2y9/9ff5fec5520ffae0ac4a457fbcad2cff8d058881.png",
      title: "Fine dining restaurants",
      desc: "Dedicated meal courses.",
    },
    {
      icon: "https://i.ibb.co/HTySXt8b/ee077ffc2ba386bd7d5c6e1c3e6873a0d7c924c5.png",
      title: "Large swimming pool",
      desc: "Discover a medley of flavours.",
    },
  ];

  return (
    
      <div className="w-11/12 lg:container mx-auto px-6">
        

        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="flex items-center bg-white shadow-md rounded-sm p-2 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Icon */}
              <div className="flex-shrink-0  mr-4 w-8"> <img src={item.icon} alt="icon" /></div>

              {/* Text */}
              <div>
                <h3 className="text-[14px] font-bold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-[12px] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
   
  );
};

export default FeaturesSection;
