import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="mt-40 px-4 md:px-8 lg:px-[70px] py-32">
            <div className="">
                <img src="https://i.ibb.co/pRQQ2Xp/logo-light.png" alt="" />
            </div>
            <div className="mt-[33px] md:flex md:justify-between ">
                <div className="text-[16px] opacity-[0.8] text-[#FFFFF5]">
                    <p>123 Main Street Anytown, USA</p>
                    <p>Postal Code: 12345</p>

                    <br />
                    <br />
                    <p>Support: support@oyolloo.com</p>
                    <p>(Available : 10:00am to 07:00pm)</p>
                </div>
                <div className="text-[14px] font-semibold opacity-[0.8] text-[#FFFFF5] mt-10 md:mt-0">
                    <ul>Home</ul>
                    <ul>About</ul>
                    <ul>Success page</ul>
                    <ul>Term & condition</ul>
                </div>
                <div className="text-[14px] font-semibold opacity-[0.8] text-[#FFFFF5] mt-10 md:mt-0">
                    <ul>Services</ul>
                    <ul>Scheduling</ul>
                    <ul>Contact Us</ul>
                    <ul>Patient Portal</ul>
                </div>
                <div className="mt-10 md:mt-0">
                    <p className="text-[14px] font-semibold  text-[#FFFFF5] mb-3">Follow Us</p>
                    <div className="flex gap-4 text-[20px] text-white">
                        <FaFacebook /> <FaInstagram /> <FaLinkedin /> <FaYoutube/>
                    </div>

                    <br /><br /><br />
                    <p className="text-[14px] font-semibold opacity-[0.8] text-[#FFFFF5]">@docplus 2024</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;