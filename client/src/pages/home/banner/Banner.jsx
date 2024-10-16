import { useEffect, useState } from "react";

const images = [
  {
    src: "https://img.freepik.com/premium-photo/modern-apartment-building-exterior-sunrise-perspective-view-modern-apartment-building-exterio_636537-279673.jpg?w=900",
    text: "Modern Apartment Building",
  },
  {
    src: "https://img.freepik.com/free-photo/analog-landscape-city-with-buildings_23-2149661456.jpg?t=st=1728036926~exp=1728040526~hmac=d04c41219b974fd0b6538c957d45c6ff7518028031ccd08146a9bdd6e3917d83&w=900",
    text: "Cityscape with Buildings",
  },
  {
    src: "https://img.freepik.com/free-photo/3d-rendering-house-model_23-2150799725.jpg?t=st=1728041452~exp=1728045052~hmac=791f57ada1789729513b7b5fc362a9a111ab2d0d6f1df7a08d3880eb13d8e2e2&w=740",
    text: "3D House Model Rendering",
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
    <div>
      <div className="md:flex justify-center relative">
        <div className="relative w-full md:h-[720px] h-[420px] overflow-hidden">
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
                className="w-full md:h-[720px] h-[420px] object-cover rounded-bl-[10px] md:rounded-bl-[60px] rounded-br-[10px] md:rounded-br-[60px]"
              />
            </div>
          ))}
        </div>

        <section className="md:w-[80%] w-full mx-auto z-50 absolute md:top-1/2 top-[30%] md:rounded-s-2xl md:rounded-e-2xl md:px-0 px-5">
          <div className="flex items-center md:flex-row flex-col">
            <input
              className="md:text-lg text-base md:w-[40%] w-full md:rounded-s-2xl p-[11.5px] bg-opacity-80 bg-white"
              placeholder="search"
              type="search"
              name="search"
              id="search"
            />
            <select
              className="md:text-lg text-base md:w-[20%] w-full p-3 border-none outline-none bg-opacity-80 bg-white"
              name="propertyType"
              id="propertyType"
            >
              <option value="big villa">Big Villa</option>
              <option value="Small Villa">Small Villa</option>
            </select>
            <select
              className="md:text-lg text-base md:w-[20%] w-full p-3 border-none outline-none bg-opacity-80 bg-white"
              name="sellOrRent"
              id="sellOrRent"
            >
              <option value="sell">sell</option>
              <option value="rent">Rent</option>
            </select>
            <button
              className="md:text-lg text-base md:w-[20%] w-full text-white/90 md:rounded-e-2xl p-[11.5px] border-0 outline-none bg-[#6d5d28]"
              type="submit"
            >
              search
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Banner;
