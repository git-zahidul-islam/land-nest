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
    <div>
      <div className="md:flex justify-center">
        <div className="relative w-full md:h-[720px] h-[280px] overflow-hidden">
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
                  className="w-full md:h-[720px] h-[280px] object-cover rounded-bl-[30px] md:rounded-bl-[60px] rounded-br-[30px] md:rounded-br-[60px]"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Banner;
