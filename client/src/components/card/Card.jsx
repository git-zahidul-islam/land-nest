import { FaBed } from "react-icons/fa6";
import { MdBathtub } from "react-icons/md";
import { PiMapPinSimpleAreaLight } from "react-icons/pi";

const Card = () => {
    return (
        <div className="space-y-3">
            <div className="h-[270px]">
                <img className="w-full h-full object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqKRaaTyYgMvh4aFalvKtAf7Dku5lBImUDLQ&s" alt="card images"/>
            </div>
            <div>
                <h2 className="md:text-3xl text-xl font-bold text-black/85">Villa on Hollywood Boulevasrd</h2>
                <p className="text-base">Location is here</p>
                <p className="text-lg">Villa</p>
            </div>
            <div className="flex justify-between items-center">
                <p className="font-semibold text-xl">7,80,000 $</p>
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-3">
                        <FaBed className="text-[#1DB2FF]" size={26}/>
                        <p>4</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <MdBathtub className="text-[#1DB2FF]" size={26}/>
                        <p>4</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <PiMapPinSimpleAreaLight className="text-[#1DB2FF]" size={26}/>
                        <p>3</p>
                    </div>
                </div>
            </div>
            <p className="text-gray-400/50">Added: 10/07/2024</p>
        </div>
    );
};

export default Card;