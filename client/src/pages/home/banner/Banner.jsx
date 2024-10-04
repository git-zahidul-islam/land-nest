import { useEffect, useState } from "react";
import "react-multi-carousel/lib/styles.css";

const images = [
  {
    src: "https://img.freepik.com/premium-photo/modern-apartment-building-exterior-sunrise-perspective-view-modern-apartment-building-exterio_636537-279673.jpg?w=900",
    text: "Welcome to Our Beautiful Apartment",
  },
  {
    src: "https://img.freepik.com/free-photo/analog-landscape-city-with-buildings_23-2149661456.jpg?t=st=1728036926~exp=1728040526~hmac=d04c41219b974fd0b6538c957d45c6ff7518028031ccd08146a9bdd6e3917d83&w=900",
    text: "Explore the City Life",
  },
  {
    src: "https://img.freepik.com/free-photo/3d-rendering-house-model_23-2150799725.jpg?t=st=1728041452~exp=1728045052~hmac=791f57ada1789729513b7b5fc362a9a111ab2d0d6f1df7a08d3880eb13d8e2e2&w=740",
    text: "Discover Your Dream Home",
  },
];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative w-full h-[450px] overflow-hidden">
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
              className="w-full h-[450px] object-cover"
            />
            <div className="absolute top-0 left-0 right-0 flex justify-center items-center h-full bg-black bg-opacity-40">
              <h1 className="text-white text-3xl md:text-5xl font-bold px-4">
                {image.text}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
