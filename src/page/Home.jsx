import Banner from "../components/banner/Banner";
import Mission from "../components/mission/Mission";
import Navbar from "../components/navbar/Navbar";
import Service from "../components/service/Service";
import Statistics from "../components/statistics/Statistics";
import Testimonial from "../components/testimonial/Testimonial";

const Home = () => {
    return (
        <div className="px-4 md:px-8 lg:px-[70px] inter">
            <Navbar/>
            <Banner/>
            <Statistics/>
            <Mission/>
            <Service/>
            <Testimonial/>
        </div>
    );
};

export default Home;