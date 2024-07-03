import Banner from "../components/banner/Banner";
import Navbar from "../components/navbar/Navbar";

const Home = () => {
    return (
        <div className="px-4 md:px-8 lg:px-[70px] inter">
            <Navbar/>
            <Banner/>
        </div>
    );
};

export default Home;