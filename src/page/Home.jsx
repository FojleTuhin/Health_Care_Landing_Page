import Banner from "../components/banner/Banner";
import Mission from "../components/mission/Mission";
import Navbar from "../components/navbar/Navbar";
import Statistics from "../components/statistics/Statistics";

const Home = () => {
    return (
        <div className="px-4 md:px-8 lg:px-[70px] inter">
            <Navbar/>
            <Banner/>
            <Statistics/>
            <Mission/>
        </div>
    );
};

export default Home;