import { GiGreenhouse } from "react-icons/gi";
import { CiShop } from "react-icons/ci";
import { MdOutlineHouse } from "react-icons/md";
import { LiaHouseDamageSolid } from "react-icons/lia";
import { MdOutlineApartment } from "react-icons/md";

import { lazy, Suspense } from "react";
const SectionTitle = lazy(()=> import('../../../components/SectionTitle'));
const Card = lazy(() => import('../../../components/Card'))


const BestListing = () => {
    return (
        <section className="md:my-20 my-10 md:w-[96%] w-full mx-auto">
            {/* --- section title --- */}
            <div className="text-center mb-10">
            <Suspense fallback={<div className="bg-green-400 animate-bounce duration-700 transition-all w-full h-full"></div>}>
                <SectionTitle heading={"Best Listings Available"}/>
            </Suspense>
            </div>

            {/* --- category is here ---*/}
            <div className="md:w-[80%] w-full mx-auto mb-8">
                <div className="flex justify-center items-center md:gap-12 gap-8 md:text-4xl text-3xl"> 
                <GiGreenhouse/>
                <CiShop/>
                <MdOutlineHouse/>
                <LiaHouseDamageSolid/>
                <MdOutlineApartment/>
                </div>
            </div>

            {/* --- all card show here ---*/}
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 md:gap-5 gap-2">
                <Suspense fallback={<div className="h-full w-full bg-green-400 transition-all animate-bounce duration-700"></div>}>
                    <Card/>
                </Suspense>
                <Suspense fallback={<div className="h-full w-full bg-green-400 transition-all animate-bounce duration-700"></div>}>
                    <Card/>
                </Suspense>
                <Suspense fallback={<div className="h-full w-full bg-green-400 transition-all animate-bounce duration-700"></div>}>
                    <Card/>
                </Suspense>
                <Suspense fallback={<div className="h-full w-full bg-green-400 transition-all animate-bounce duration-700"></div>}>
                    <Card/>
                </Suspense>
                <Suspense fallback={<div className="h-full w-full bg-green-400 transition-all animate-bounce duration-700"></div>}>
                    <Card/>
                </Suspense>
                <Suspense fallback={<div className="h-full w-full bg-green-400 transition-all animate-bounce duration-700"></div>}>
                    <Card/>
                </Suspense>
                <Suspense fallback={<div className="h-full w-full bg-green-400 transition-all animate-bounce duration-700"></div>}>
                    <Card/>
                </Suspense>
            </div>


        </section>
    );
};

export default BestListing;