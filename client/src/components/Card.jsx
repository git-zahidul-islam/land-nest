import { FaBed } from "react-icons/fa6";
import { MdBathtub } from "react-icons/md";
import { PiMapPinSimpleAreaLight } from "react-icons/pi";

const Card = () => {
  return (
    <div className="">
      <div className="h-[270px] overflow-hidden">
        <img
          className="w-full h-full object-cover rounded-t-md hover:scale-110 transition-all duration-700"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqKRaaTyYgMvh4aFalvKtAf7Dku5lBImUDLQ&s"
          alt="card images"
        />
      </div>
      <div className="bg-[#e7f6fd] space-y-3 p-3">
        <div className="space-y-1">
          <h2 className="md:text-2xl text-xl font-bold text-black/85">
            Villa on Hollywood Boulevasrd
          </h2>
          <p className="text-base">Location is here</p>
          <p className="text-lg">Villa</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="font-semibold md:text-xl text-lg">7,80,000$</p>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-3">
              <FaBed className="text-[#1DB2FF] md:text-2xl text-xl" />
              <p>4</p>
            </div>
            <div className="flex items-center gap-3">
              <MdBathtub className="text-[#1DB2FF] md:text-2xl text-xl" />
              <p>4</p>
            </div>
            <div className="flex items-center gap-3">
              <PiMapPinSimpleAreaLight className="text-[#1DB2FF] md:text-2xl text-xl" />
              <p>3</p>
            </div>
          </div>
        </div>
        <p className="text-gray-400/90">Added: 10/07/2024</p>
      </div>
    </div>
  );
};

export default Card;
