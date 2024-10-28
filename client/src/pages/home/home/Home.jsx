import { lazy, Suspense } from "react";
const Banner = lazy(() => import('../banner/Banner'));
const BestListing = lazy(() => import('../bestListing/BestListing'));


const Home = () => {
    return (
        <div>
            <Suspense fallback={<div className="h-full w-full bg-green-400 transition-all animate-bounce duration-700"></div>}>
                <Banner/>
            </Suspense>
            <Suspense fallback={<div className="h-full w-full bg-green-400 transition-all animate-bounce duration-700"></div>}>
                <BestListing/>         
            </Suspense>
            {/* give another section */}
        </div>
    );
};

export default Home;