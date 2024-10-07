import HomeSearch from "../../../components/HomeSearch/HomeSearch";
import Banner from "../banner/Banner";


const Home = () => {
    return (
        <div>
            <Banner/>
            <HomeSearch/>
            {/* latest property */}
            <div className="layout-container">
                <h1 className="md:text-4xl text-2xl font-bold">Latest Property</h1>

            </div>
        </div>
    );
};

export default Home;