import { lazy, Suspense } from "react";
import HomeSearch from "../../../components/HomeSearch/HomeSearch";
import Banner from "../banner/Banner";

// lazy loading
const Card = lazy(()=> import('../../../components/card/Card'));


const Home = () => {
    return (
        <div>
            <Banner/>
            <HomeSearch/>
            {/* latest property */}
            <div className="layout-container space-y-8">
                <h1 className="md:text-4xl text-2xl font-bold">Latest Property</h1>
                <div className="flex md:flex-row flex-col items-center justify-between gap-5">
                    <Suspense fallback={<div className="h-full w-full bg-slate-300 animate-bounce transition-all"></div>}>
                        <Card/>
                    </Suspense>
                    <Suspense fallback={<div className="h-full w-full bg-slate-300 animate-bounce transition-all"></div>}>
                        <Card/>
                    </Suspense>
                    <Suspense fallback={<div className="h-full w-full bg-slate-300 animate-bounce transition-all"></div>}>
                        <Card/>
                    </Suspense>
                </div>
            </div>
        </div>
    );
};

export default Home;