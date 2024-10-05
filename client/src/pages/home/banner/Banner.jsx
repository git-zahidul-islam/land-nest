import { useEffect, useState } from "react";

const images = [
  {
    src: "https://img.freepik.com/premium-photo/modern-apartment-building-exterior-sunrise-perspective-view-modern-apartment-building-exterio_636537-279673.jpg?w=900",
  },
  {
    src: "https://img.freepik.com/free-photo/analog-landscape-city-with-buildings_23-2149661456.jpg?t=st=1728036926~exp=1728040526~hmac=d04c41219b974fd0b6538c957d45c6ff7518028031ccd08146a9bdd6e3917d83&w=900",
  },
  {
    src: "https://img.freepik.com/free-photo/3d-rendering-house-model_23-2150799725.jpg?t=st=1728041452~exp=1728045052~hmac=791f57ada1789729513b7b5fc362a9a111ab2d0d6f1df7a08d3880eb13d8e2e2&w=740",
  },
];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="md:pb-[60px]">
      <div className="md:relative md:flex justify-center">
        <div className="relative w-full md:h-[550px] h-[280px] overflow-hidden">
          <div
            className="transition-opacity duration-700 ease-in-out"
            style={{ opacity: 1 }}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  src={image.src}
                  alt={`Slide ${index + 1}`}
                  className="w-full md:h-[550px] h-[280px] object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* property details */}
        <div className="md:absolute -bottom-[60px] md:mt-0 mt-1 rounded-xl bg-white border border-gray-800/30 md:w-[70%] w-[90%] mx-auto md:p-6 p-4 shadow-md">
          <div className="flex justify-between md:flex-row flex-col md:space-y-0 space-y-3 md:relative">

            <p className="md:absolute text-center -top-10 bg-[#1DB2FF] rounded-3xl py-1 px-5 text-sm font-medium text-white">Feature</p>

            <div className="md:space-y-5 space-y-2">
              <h5 className="md:text-2xl text-lg font-semibold text-black/80">
                property name here || title
              </h5>
              <p className="text-black/45 text-sm">Added: 02/03/2024</p>
            </div>
            <div className="md:space-y-5 space-y-2">
              <h5 className="md:text-2xl text-lg font-semibold text-black/80">
                Price
              </h5>
              <p className="text-black/45 text-sm">22,000$</p>
            </div>
            <div className="md:space-y-5 space-y-2">
              <h5 className="md:text-2xl text-lg font-semibold text-black/80">
                Areas
              </h5>
              <p className="text-black/45 text-sm">12,000 Sqr</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
