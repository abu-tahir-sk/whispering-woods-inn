import { User, Mail, Phone, FileText } from "lucide-react";
import { useState } from "react";

const images = [
  "https://i.ibb.co/FbN7BGsB/29c1649b295be99dfe133067c315b5de4470fe23.png",
  "https://i.ibb.co/Jj48NtnC/d55ea9b540e7a28fd60dd3611d1b7f690042c9fd.png",
  "https://i.ibb.co/nq6GMHYz/2513a49dfc110912e58efc44ae45bbfcc3648b2e.png",
  
];

const CommonQueries = () => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <section className="relative w-full bg-white pt-16 pb-12 overflow-hidden">
      {/* Background Text */}
      <h1 className="hidden lg:block lg:absolute top-0 right-8  text-[60px] md:text-[90px] font-bold text-[#71747124] tracking-[10px] opacity-50 select-none ">
        QUERIES
      </h1>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        {/* Image + Form */}
        <div className="relative flex flex-col lg:flex-row items-start  overflow-hidden shadow-lg">
          {/* Main Image */}
          <div className="relative w-full lg:w-2/3">
            <img
              src={selectedImage}
              alt="queries background"
              className="w-full h-[500px] object-cover"
            />

            {/* Optional dark overlay */}
            <div className="absolute inset-0 bg-black/10 "></div>

            {/* Arrows */}
            <div className="absolute inset-0 flex justify-between items-center px-4">
              <button
                onClick={() => {
                  const currentIndex = images.indexOf(selectedImage);
                  setSelectedImage(
                    currentIndex === 0
                      ? images[images.length - 1]
                      : images[currentIndex - 1]
                  );
                }}
                className="bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition"
              >
                ←
              </button>
              <button
                onClick={() => {
                  const currentIndex = images.indexOf(selectedImage);
                  setSelectedImage(
                    currentIndex === images.length - 1
                      ? images[0]
                      : images[currentIndex + 1]
                  );
                }}
                className="bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition"
              >
                →
              </button>
            </div>
          </div>

          {/* Overlapping Form */}
          <div className="lg:absolute lg:right-10 lg:top-1/2 lg:-translate-y-1/2 bg-[#FFFFFF] backdrop-blur-sm  shadow-xl p-8 w-full lg:w-[450px] mt-8 lg:mt-0 border border-gray-100">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6 text-center md:text-left font-garamond">
              Common Queries
            </h2>

            <form className="space-y-4">
              {/* Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center border rounded-lg px-3 py-2">
                  <User className="w-5 h-5 text-[#000000] mr-2" />
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full outline-none text-sm"
                  />
                </div>
                <div className="flex items-center border rounded-lg px-3 py-2">
                  <Mail className="w-5 h-5 text-[#000000] mr-2" />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full outline-none text-sm"
                  />
                </div>
              </div>

              {/* Phone & Subject */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center border rounded-lg px-3 py-2">
                  <Phone className="w-5 h-5 text-[#000000] mr-2" />
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="w-full outline-none text-sm"
                  />
                </div>
                <div className="flex items-center border rounded-lg px-3 py-2">
                  <FileText className="w-5 h-5 text-[#000000] mr-2" />
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full outline-none text-sm"
                  />
                </div>
              </div>

              {/* Message */}
              <textarea
                rows="3"
                placeholder="Message"
                className="w-full border rounded-lg px-3 py-2 outline-none text-sm resize-none"
              ></textarea>

              {/* Submit */}
              <button
                type="submit"
                className="bg-green-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-green-700 transition flex items-center gap-2 mx-auto md:mx-0"
              >
                Submit →
              </button>
            </form>
          </div>
           
        </div>
        <div className="hidden lg:flex flex-col absolute bottom-6 right-20 gap-2 z-10">
                <div className="flex space-x-2">
                  <span className="w-1.5 h-1.5 bg-[#108D18]"></span>
                  <span className="w-1.5 h-1.5 bg-[#108D18]"></span>
                  <span className="w-1.5 h-1.5 bg-[#108D18]"></span>
                  <span className="w-1.5 h-1.5 bg-[#108D18]"></span>
                  <span className="w-1.5 h-1.5 bg-[#108D18]"></span>
                  <span className="w-1.5 h-1.5 bg-[#108D18]"></span>
                  <span className="w-1.5 h-1.5 bg-[#108D18]"></span>
                  <span className="w-1.5 h-1.5 bg-[#108D18]"></span>
                  <span className="w-1.5 h-1.5 bg-[#108D18]"></span>
                  <span className="w-1.5 h-1.5 bg-[#108D18]"></span>
                </div>
                <div className="flex space-x-2">
                  <span className="w-1.5 h-1.5 bg-[#108D18]"></span>
                  <span className="w-1.5 h-1.5 bg-[#108D18]"></span>
                  <span className="w-1.5 h-1.5 bg-[#108D18]"></span>
                  <span className="w-1.5 h-1.5 bg-[#108D18]"></span>
                  <span className="w-1.5 h-1.5 bg-[#108D18]"></span>
                  <span className="w-1.5 h-1.5 bg-[#108D18]"></span>
                  <span className="w-1.5 h-1.5 bg-[#108D18]"></span>
                  <span className="w-1.5 h-1.5 bg-[#108D18]"></span>
                  <span className="w-1.5 h-1.5 bg-[#108D18]"></span>
                  <span className="w-1.5 h-1.5 bg-[#108D18]"></span>
                </div>
              </div>

        {/* Bottom Thumbnails */}
        <div className="hidden lg:flex justify-center gap-3 mt-6 flex-wrap absolute left-52 -bottom-8">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`thumbnail-${i}`}
              onClick={() => setSelectedImage(img)}
              className={`w-24 h-16 object-cover rounded-lg cursor-pointer border-2 transition-all ${
                selectedImage === img
                  ? "border-green-600 scale-105"
                  : "border-transparent"
              }`}
            />
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default CommonQueries;
