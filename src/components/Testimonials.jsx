import { useState, useEffect } from "react";
import { Star } from "lucide-react";
import { HiOutlineArrowLongRight, HiArrowLongLeft } from "react-icons/hi2";
import Testimonial from "./Testimonial";

const testimonials = [
  {
    name: "Supriya Bandopadhyay",
    rating: 4.9,
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "Second consecutive year at destination during Ganesh music fest. My objective to stay at different place instead of traditional stay. Hotel service has improved a lot, overall experience is awesome this year.",
  },
  {
    name: "Deblina Bhattacharyya",
    rating: 4.9,
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    text: "Our weekend stay was absolutely magical! The rooms were clean and comfy, and the vibe of the garden from the balcony was fresh and rejuvenating. The resort is a perfect blend of nature and luxury.",
  },
  {
    name: "Rohit Sharma",
    rating: 5.0,
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    text: "Amazing place! Great hospitality, spacious rooms, and delicious food. The entire family enjoyed the stay. Will definitely visit again next year.",
  },
  {
    name: "Priya Sinha",
    rating: 4.8,
    image: "https://randomuser.me/api/portraits/women/23.jpg",
    text: "Everything was perfect! Staff were friendly, rooms were clean and comfortable. Highly recommend for a relaxing getaway.",
  },
];

const Testimonials = () => {
  const [slide, setSlide] = useState(0);
  const [cardsPerSlide, setCardsPerSlide] = useState(1);

  //  Responsive — show 2 on md+, otherwise 1
  useEffect(() => {
    const handleResize = () => {
      setCardsPerSlide(window.innerWidth >= 768 ? 2 : 1);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  //  We’ll duplicate data for looping
  const visibleTestimonials = [...testimonials, ...testimonials];
  const total = testimonials.length;

  //  Move 1 card per click, loop correctly
  const nextSlide = () => {
    setSlide((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setSlide((prev) => (prev - 1 + total) % total);
  };

  return (
    <section className="relative bg-gradient-to-r from-[#fff] to-[#fff] py-16 px-6 lg:px-20 overflow-hidden">
      <div className="">
        <Testimonial />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Carousel wrapper */}
        <div className="overflow-hidden w-full">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${(slide * 100) / cardsPerSlide}%)`,
              width: `${(visibleTestimonials.length / cardsPerSlide) * 100}%`,
            }}
          >
            {visibleTestimonials.map((t, i) => (
              <div
                key={i}
                className={`flex justify-center p-4 ${
                  cardsPerSlide === 2 ? "md:w-1/2" : "w-full"
                }`}
              >
                <div className="bg-white shadow rounded-tl-[54px] px-8 py-8 w-full relative overflow-visible">
                  {/* Top-right Quote */}
                  <div className="absolute -top-12 right-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      fill="#108D18"
                      className="w-[78px] h-[52px] absolute top-4 right-4 opacity-80"
                    >
                      <path d="M448 288c0 128-104 224-224 224v-64c70.7 0 128-57.3 128-128h-64V32c0-17.7 14.3-32 32-32h128v288zM224 288c0 128-104 224-224 224v-64c70.7 0 128-57.3 128-128H64V32c0-17.7 14.3-32 32-32h128v288z" />
                    </svg>
                  </div>

                  {/* Profile + Text */}
                  <div className="space-y-4 md:flex gap-4 mb-5 ">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-14 h-14 rounded-full object-cover"
                    />
                    <div className="text-center md:text-left">
                      <div className="relative border border-gray-300 rounded-xl py-5 px-3 mb-6 bg-white">
                        <p className="text-gray-700 text-sm leading-relaxed text-left">
                          {t.text}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-3 py-2">
                    <p className="text-sm text-gray-500">({t.rating})</p>
                    <div className="flex text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} fill="gold" stroke="none" />
                      ))}
                    </div>
                  </div>

                  {/* Name */}
                  <h4 className="font-semibold text-[#7B1B0C] text-sm flex items-center justify-start gap-1">
                    <span className="bg-[#7B1B0C] text-white px-3 py-2 rounded-br-[80px] text-[12px]">
                      {t.name}
                    </span>
                  </h4>

                  {/* Decorative corner shape */}
                  <svg
                    className="absolute bottom-0 right-0 w-40 h-40 text-green-600"
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="green"
                      d="M50,200 C150,180 150,100 200,50 L200,200 Z"
                    ></path>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Arrow Buttons */}
        <div className="flex justify-center gap-6 mt-10">
          <button
            onClick={prevSlide}
            className="btn btn-circle bg-[#7B1B0C] text-white border-none hover:bg-[#5a1209] shadow-md hover:shadow-lg transition-all duration-300"
          >
            <HiArrowLongLeft size={22} />
          </button>

          <button
            onClick={nextSlide}
            className="btn btn-circle bg-[#7B1B0C] text-white border-none hover:bg-[#5a1209] shadow-md hover:shadow-lg transition-all duration-300"
          >
            <HiOutlineArrowLongRight size={22} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
