import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Questions from "./Questions";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const itemRefs = useRef([]);

  const faqs = [
    {
      title: "Hotel/Guest Policies",
      content: `
      No alcoholic drinks consumption is allowed in the common area/premises.
      Unmarried couples/students are not allowed for room booking.
      All guests must produce valid ID cards e.g. Voter ID, Aadhar card, PAN card.
      Double bed room allows 2 adults and 1/2 children (below 7 years).
      Extra occupancy subject to room/bed size & extra charges applicable.
      `,
    },
    {
      title: "Cancellation and Refund Policy",
      content:
        "Refunds are processed within 7 working days. Cancellation charges may apply based on booking policy.",
    },
    {
      title: "Do you offer pool service?",
      content: "Yes, we provide access to our pool area between 7 AM and 8 PM.",
    },
    {
      title: "What's the closure time?",
      content: "The main gates close at 11:00 PM for guest security.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    if (openIndex !== null && itemRefs.current[openIndex]) {
      itemRefs.current[openIndex].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [openIndex]);

  return (
    <section className="relative bg-[#F9ECDA] py-16 px-4 sm:px-6 lg:px-20 overflow-hidden">
      <div className="py-6 md:py-2">
        <Questions />
      </div>
      {/* Left Side Dots */}
<div className="absolute lg:left-13 bottom-4 -translate-y-1/2 hidden lg:grid grid-cols-2 grid-rows-10 gap-2">
  {Array.from({ length: 20 }).map((_, i) => (
    <div
      key={i}
      className="w-2 h-2 bg-red-600 opacity-80 rounded-full"
    ></div>
  ))}
</div>

      <div className="pb-6">
        <div className="relative flex flex-col lg:flex-row justify-between bg-[#FFFFFF] rounded drop-shadow-md p-6 md:p-10 gap-8 md:w-11/12 mx-auto">
          
          {/* ✅ Left Side FAQ List */}
          <div className="w-full lg:w-2/3 h-[300px] overflow-y-auto space-y-4 pr-2">
            {faqs.map((faq, index) => (
              <div
                key={index}
                ref={(el) => (itemRefs.current[index] = el)}
                className="border rounded-lg overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className={`flex justify-between items-center w-full text-left px-4 py-3 font-medium transition-colors ${
                    openIndex === index
                      ? "bg-[#922211] text-white"
                      : "bg-[#656565] text-white hover:bg-[#922211]"
                  }`}
                >
                  {faq.title}
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </button>

                <div
                  className={`transition-all duration-500 ease-in-out ${
                    openIndex === index
                      ? "max-h-40 opacity-100 px-4 py-3 overflow-y-auto"
                      : "max-h-0 opacity-0 px-4 py-0 overflow-hidden"
                  } bg-white text-gray-700 text-sm`}
                  style={{ scrollbarWidth: "thin" }}
                >
                  {faq.content}
                </div>
              </div>
            ))}
          </div>

          {/* ✅ Right Side Overlapping Images */}
         <div className="md:absolute -right-8 w-full lg:w-1/3">
           <div className="h-[300px] flex justify-center items-center relative">
            <div className="relative w-[85%] sm:w-[70%] md:w-[80%] lg:w-[350px]">
              <img
                src="https://i.ibb.co/27MxRddx/950e5958842879166782c6a881617b633d5460c4.png"
                alt="Hallway"
                className="w-full h-[220px] object-cover shadow-md"
              />
              <img
                src="https://i.ibb.co/pBWM8wRh/d45da2295349496a406d30662b95b5647f0b2ca5.jpg"
                alt="Lobby"
                className="w-[60%] h-[140px] object-cover shadow-lg absolute -bottom-8 right-20 border-4 border-white"
              />
            </div>
          </div>
         </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
