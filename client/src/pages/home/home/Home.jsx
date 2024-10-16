import { lazy, Suspense } from "react";
import HomeSearch from "../../../components/HomeSearch/HomeSearch";
import Banner from "../banner/Banner";

// lazy loading
const Card = lazy(()=> import('../../../components/card/Card'));


const Home = () => {
    return (
        <div>
            <Banner/>
                        
        </div>
    );
};

export default Home;