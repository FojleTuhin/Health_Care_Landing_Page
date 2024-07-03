import Banner from "../components/banner/Banner";
import BottomBanner from "../components/bottom-banner/BottomBanner";
import Faq from "../components/faq/Faq";
import Footer from "../components/footer/Footer";
import Mission from "../components/mission/Mission";
import Navbar from "../components/navbar/Navbar";
import Service from "../components/service/Service";
import Statistics from "../components/statistics/Statistics";
import Testimonial from "../components/testimonial/Testimonial";
import Vactor from "../components/vactor";

const Home = () => {
    return (
        <div className="inter">
            <div className="relative">

                <div className="absolute top-[84px] z-0">
                    <Vactor></Vactor>
                </div>

                <div className="px-4 md:px-8 lg:px-[70px] inter relative z-10">
                    <Navbar />
                    <Banner />
                    <Statistics />
                    <Mission />
                    <Service />
                    <Testimonial />
                    <Faq />
                </div>

            </div>



            <div className="relative">
                <div className="absolute top-[14px] z-0">
                    <Vactor></Vactor>
                </div>
                <div className="inter relative z-10">
                    <div className="px-4 md:px-8 lg:px-[70px] ">
                        <BottomBanner />
                    </div>
                    <div className="bg-[#020043]">
                        <Footer />
                    </div>
                </div>

            </div>





        </div>
    );
};

export default Home;