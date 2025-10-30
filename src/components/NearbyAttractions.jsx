
import { FaSearchPlus } from "react-icons/fa";
import attit from "../assets/image/vcxb-removebg-preview.png"
import Attraction from "./Attraction";

const attractions = [
  {
    id: 1,
    title: "Uttarayan Complex",
    image:
      "https://i.ibb.co/tMbDXdnx/bfaff1675034781a9918b9bda40487cc2cd026d1.png",
    distance: "3.5 km away",
    desc: "The Uttarayan Complex was the residence of Rabindranath Tagore. This historic area houses several buildings like Udayan, Konark, Shyamali, and Punashcha.",
  },
  {
    id: 2,
    title: "Rabindra Bhavana",
    image:
      "https://i.ibb.co/Ndqg9FY1/cbc333ac1217a8988f6711dfc5520123cc2fe731.png",
    distance: "3.5 km away",
    desc: "Rabindra Bhavana is a museum dedicated to the life and works of Rabindranath Tagore. It preserves his manuscripts, letters, and awards including the Nobel Prize medal.",
  },
  {
    id: 3,
    title: "Kankalitala Temple",
    image:
      "https://i.ibb.co/zWSPJmm6/fc528735e08794bac7cab24b27c4ecc2bf82c139.png",
    distance: "3.5 km away",
    desc: "Kankalitala Temple, one of the sacred Shakti Peethas, is located near Santiniketan. Surrounded by serene nature, it attracts both devotees and tourists for its tranquility.",
  },
];

const NearbyAttractions = () => {
  return (
    <section className="relative pb-16 pt-10 lg:pb-56 overflow-visible  h-full">
     
      <div className="py-6">
        <Attraction/>
      </div>
      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12 max-w-6xl mx-auto lg:px-6 overflow-visible ">
        {attractions.map((item) => (
          <div
            key={item.id}
            className="relative group rounded-3xl overflow-visible"
          >
            {/* Image */}
            <div className="overflow-hidden rounded-3xl shadow-lg relative">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[300px] sm:h-[340px] md:h-[360px] object-cover rounded-3xl transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bottom-0  rounded-3xl   flex items-center ">
                <div className="bg-[#922211] p-2 absolute bottom-24">
                  <FaSearchPlus className="text-white   " />
                </div>
              </div>
            </div>

            {/* Floating white content card */}
            <div className="static lg:absolute lg:-bottom-[200px] left-1/2 lg:-translate-x-1/2 w-full lg:w-[92%] bg-white rounded-tr-[64px] shadow-xl overflow-hidden transition-all duration-300 group-hover:-translate-y-1 min-h-[260px]">
              {/* Top green curved SVG */}
              <svg
                className="absolute top-0 left-0 w-full h-[80px] sm:h-[90px] hidden lg:flex"
                viewBox="0 0 400 120"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <path d="M0,0 L250,0 L180,80 L0,20 Z" fill="#81C985" />
                <path d="M250,0 L60,0 L180,80 Z" fill="#3CB043" opacity="0.9" />
              </svg>

              {/* Bottom green curved SVG */}
              <svg
                className="absolute bottom-0 right-0 w-[150px] h-[150px]"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 100 L100 100 L100 0 Q100 60 0 100 Z"
                  fill="#3CB043"
                />
              </svg>

              {/* Distance badge */}
              <div className="absolute top-4 right-4 bg-[#FFF3F3] text-[#b54b4b] text-xs font-medium px-3 py-1 rounded-full shadow-sm z-10">
                {item.distance}
              </div>

              {/* Card content */}
              <div className="relative z-10 p-6 mt-10">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  {item.title}
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                  {item.desc}
                </p>
                <a
                  href="#"
                  className="text-green-600 hover:text-green-700 font-medium inline-flex items-center text-sm"
                >
                  Get Directions →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      
    </section>
  );
};

export default NearbyAttractions;
