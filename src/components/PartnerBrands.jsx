import React from "react";

const PartnerBrands = () => {
  const brands = [
    {
      name: "Airbnb",
      logo: "https://i.ibb.co/8LfRyzNX/0a5230264e08804b4485ee62e42e9fb5586046d0-1.png",
      width: "110",
    },
    {
      name: "Booking.com",
      logo: "https://i.ibb.co/FLvYBsFw/1364e3b3243bc375bbaa6e6e8ab2f645d8b577b9.png",
      width: "140",
    },
    {
      name: "Tripadvisor",
      logo: "https://i.ibb.co/7ty0ms3Q/6b30d9a8d7f62d232bbedf2423c2c2e5fd4ba65c.png",
      width: "140",
    },
    {
      name: "Goibibo",
      logo: "https://i.ibb.co/tTjK9LWh/9b22a717ddf545f5b85ad193d0dcee3e90560d55.png",
      width: "110",
    },
    {
      name: "MakeMyTrip",
      logo: "https://i.ibb.co/prvS7LX3/8eaa9ddba4915c245a0b8a3d3cc099ccc8c5d417.png",
      width: "130",
    },
  ];

  return (
    <section className="bg-white border-t border-gray-200 py-8 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 flex flex-wrap items-center justify-center gap-12 md:gap-20">
        {brands.map((brand, index) => (
          <div
            key={index}
            className="flex items-center justify-center "
          >
            <img
              src={brand.logo}
              alt={brand.name}
              width={brand.width}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PartnerBrands;
