import { Calendar, Gift, Users, PenTool } from "lucide-react";
import EventBg from "./EventBg";

const events = [
  {
    title: "Wedding Anniversaries & Birthday",
    img: "https://i.ibb.co/Txrvn1zB/82aa8c8c213f17ee6e8520c5f7c7f283efe1cc2e.png",
    icon: <Gift className="w-5 h-5 text-white" />,
  },
  {
    title: "Festivals and Occasions",
    img: "https://i.ibb.co/Ngg4r8Z1/930fb2269abe3faaa36da35d1c38ca36f8af8234-1.png",
    icon: <Calendar className="w-5 h-5 text-white" />,
  },
  {
    title: "Corporate Events and Meetings",
    img: "https://i.ibb.co/TDrnG3Xd/63ebcfb1be9bf614f77bdfb695f721b8be9b14ae.png",
    icon: <Users className="w-5 h-5 text-white" />,
  },
  {
    title: "Plan Your Event With Us",
    img: "https://i.ibb.co/9H6n0NJ3/5872071ed7a4cef14eb14b14dcc8ad6bd44166ac.jpg",
    icon: <PenTool className="w-5 h-5 text-white" />,
  },
];

const EventsSection = () => (
  <section className="relative pt-16 bg-white">
    {/* Faded background text */}
    <div>
      <EventBg/>
    </div>
    {/* Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:grid-rows-2 gap-3 max-w-6xl mx-auto h-full ">
      {events.map((event, i) => (
        <div key={i} className="relative overflow-hidden rounded shadow-md group">
          {/* Image */}
          <img
            src={event.img}
            alt={event.title}
            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Red bottom potak */}
          <div className="absolute bottom-0 left-0 w-[50%] h-[70%]  bg-[#922211E8]/80 backdrop clip-path-polygon"></div>

          {/* Icon + Text inside red area */}
          <div className="absolute bottom-4 left-4 flex flex-col  gap-2 text-white z-10">
            <div className=" p-2 rounded-full">{event.icon}</div>
            <h3 className="font-medium text-sm md:text-base leading-snug max-w-[140px]">
              {event.title}
            </h3>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default EventsSection;
