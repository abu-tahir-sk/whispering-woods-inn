import { useState } from "react";

const blogs = [
  {
    id: 1,
    title: "Discover the Serenity of Hotel Resort Bolpur",
    desc: "Escape the hustle and bustle of city life at Hotel Resort Bolepur. Nestled amidst lush greenery, our resort offers a peaceful retreat where you can relax and rejuvenate. Enjoy nature walks, scenic views, and a calm environment perfect for a weekend getaway.",
    author: "Arun Sarma",
    auth_img:
      "https://i.ibb.co/4R0MLg8v/b23aea796bf04d1c9df5c2845ca3ceeba018991c.png",
    date: "12 Jul 2025",
    img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Luxurious Stays at Hotel Resort Bolpur",
    desc: "Escape the hustle and bustle of city life at Hotel Resort Bolepur. Nestled amidst lush greenery, our resort offers a peaceful retreat where you can relax and rejuvenate. Enjoy nature walks, scenic views, and a calm environment perfect for a weekend getaway.",
    author: "Manali Bosh",
    auth_img:
      "https://i.ibb.co/Mw8p5TK/dff39e342f90496fd16c285721d000d613c70721.png",
    date: "15 Jul 2025",
    img: "https://i.ibb.co/xqBT3jpk/6e3bc241b7b023df91c25f2fd7e87ca25ae610d6.jpg",
  },
  {
    id: 3,
    title: "Exquisite Dining at Bolpur Resort",
    desc: "Escape the hustle and bustle of city life at Hotel Resort Bolepur. Nestled amidst lush greenery, our resort offers a peaceful retreat where you can relax and rejuvenate. Enjoy nature walks, scenic views, and a calm environment perfect for a weekend getaway.",
    author: "Nikita Josgi",
    auth_img:
      "https://i.ibb.co/7JxJr9YC/a75734efd611b770b14375e6093728683dfef728.png",
    date: "19 Jul 2025",
    img: "https://i.ibb.co/zWMrnYj3/d252d41f583ea74cf363fc111260647da8663e57.jpg",
  },
  {
    id: 4,
    title: "A Perfect Getaway Amidst Nature",
    desc: "Escape the hustle and bustle of city life at Hotel Resort Bolepur. Nestled amidst lush greenery, our resort offers a peaceful retreat where you can relax and rejuvenate. Enjoy nature walks, scenic views, and a calm environment perfect for a weekend getaway.",
    author: "Ravi Mehta",
    auth_img:
      "https://i.ibb.co/Mw8p5TK/dff39e342f90496fd16c285721d000d613c70721.png",
    date: "21 Jul 2025",
    img: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title: "Explore Bolpur’s Hidden Gems",
    desc: "Discover beautiful landscapes and cultural treasures around Bolpur. From local handicrafts to nature trails, every corner has a story to tell.",
    author: "Sree Das",
    auth_img:
      "https://i.ibb.co/4R0MLg8v/b23aea796bf04d1c9df5c2845ca3ceeba018991c.png",
    date: "25 Jul 2025",
    img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    title: "Unwind with Comfort and Style",
    desc: "Rejuvenate your senses with our resort’s cozy ambiance and world-class facilities. Whether business or leisure, your stay will be a memorable one.",
    author: "Priya Nair",
    auth_img:
      "https://i.ibb.co/7JxJr9YC/a75734efd611b770b14375e6093728683dfef728.png",
    date: "29 Jul 2025",
    img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
  },
];

const BlogSection = () => {
  const [visible, setVisible] = useState(3);

  const showMore = () => {
    setVisible((prev) => prev + 3);
  };

  return (
    <section className="bg-[#F2FAF1] pb-16 pt-20  px-6 md:px-12 relative overflow-hidden">
      {/* Background Text */}
      <h1 className="absolute inset-0 text-[8rem] font-extrabold text-[#108D181C] opacity-70 tracking-widest text-center hidden md:block pb-8">
        BLOGS
      </h1>

      <div className="relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-garamond  mb-12">
          Latest News
        </h2>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {blogs.slice(0, visible).map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-tl-[48px] shadow-lg overflow-hidden transition hover:shadow-2xl rounded-br-[48px]"
            >
              <div className="p-4">
                <img
                  src={blog.img}
                  alt={blog.title}
                  className="w-full h-56 object-cover rounded-tl-[48px] rounded-br-[48px]"
                />
              </div>

              <div className="p-6 text-left">
                <div className="flex justify-between items-center">
                  <button className="bg-green-700 text-white text-[11px] font-medium px-4 py-1 rounded-tr-full rounded-bl-full font-garamond">
                    Hotel Resort
                  </button>
                  <img
                    className="w-[16px]"
                    src="https://i.ibb.co/VcVX13sq/619b184ae8758a4a6f03236af5723ea9d23673a8.png"
                    alt=""
                  />
                </div>

                <h3 className="text-[17px] font-bold font-garamond  my-2">
                  {blog.title}
                </h3>
            <div className="border-b-2 text-gray-300 mb-3"></div>
                <p className="text-[8px] text-gray-600 mb-6">{blog.desc}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={blog.auth_img}
                      alt={blog.author}
                      className="w-8 h-8 rounded-full"
                    />
                    <div>
                      <p className="text-[11px] font-bold text-gray-800">
                        {blog.author}
                      </p>
                      <p className="text-[7px] text-gray-500">{blog.date}</p>
                    </div>
                  </div>
                  <button className="bg-red-700 text-white text-[12px] font-medium px-4 py-2 rounded-tl-3xl rounded-br-3xl hover:bg-red-800 transition">
                    Read Full Article
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        {visible < blogs.length && (
          <button
            onClick={showMore}
            className="mt-10 text-[25px] font-garamond font-bold text-gray-800 hover:text-red-700 transition"
          >
            Load More »
          </button>
        )}
      </div>
    </section>
  );
};

export default BlogSection;
