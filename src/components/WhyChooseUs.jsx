import { ShieldCheck, Clock, Users, ThumbsUp, Briefcase, Headphones } from "lucide-react";
import Choose from "./Choose";

const features = [
  {
    icon: <ShieldCheck className="w-10 h-10 text-[#922211] mb-4" />,
    title: "Prime Location",
    desc: "Our resort is nestled in a picturesque setting, yet just minutes away from the city’s attractions.",
  },
  {
    icon: <Clock className="w-10 h-10 text-[#922211] mb-4" />,
    title: "Luxurious Rooms & Suites",
    desc: "Experience ultimate comfort with our modern, elegantly designed rooms and spacious suites.",
  },
  {
    icon: <Users className="w-10 h-10 text-[#922211] mb-4" />,
    title: "Recreational Facilities",
    desc: "Host weddings, corporate events, or seminars with our fully equipped venues and services.",
  },
  {
    icon: <ThumbsUp className="w-10 h-10 text-[#922211] mb-4" />,
    title: "Event & Conference Spaces",
    desc: "Host weddings, corporate events, or seminars with our fully equipped venues and services.",
  },
  {
    icon: <Briefcase className="w-10 h-10 text-[#922211] mb-4" />,
    title: "Value for Money",
    desc: "Premium services and amenities designed to give you the best experience at a reasonable cost.",
  },
  {
    icon: <Headphones className="w-10 h-10 text-[#922211] mb-4" />,
    title: "Guest Reviews & Awards",
    desc: "Premium services and amenities designed to give you the best experience at a reasonable cost.",
  },
];

const WhyChooseUs = () => (
  <section className="py-16 bg-white overflow-hidden">
    <div className="text-center  px-6">
    <Choose/>
    </div>

    {/* Grid of cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1px] px-6 md:px-12">
      {features.map((item, index) => (
        <div
          key={index}
          className="bg-white p-8 text-center hover:shadow-lg transition duration-300 shadow"
        >
          <div className="flex justify-center">{item.icon}</div>
          <h3 className="text-[24px] font-semibold font-garamond text-gray-800 mb-2">
            {item.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default WhyChooseUs;
