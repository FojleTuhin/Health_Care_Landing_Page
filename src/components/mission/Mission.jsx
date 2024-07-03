import { MdOutlineArrowOutward } from "react-icons/md";

const Mission = () => {
    return (
        <div className=" mt-40 gap-5 md:flex  bg-[url('https://i.ibb.co/GRWPbLX/Rectangle-24.png')] bg-no-repeat bg-right-top ">
            <div className="md:w-[40%] p-5 md:p-0">
                <button className="btn bg-[#FFFFF5] py-[11px] px-6 rounded-3xl text-[#020043] mb-4 mt-80 md:mt-0">Who we are</button>

                <p className="text-4xl font-semibold text-[#4D4C7B] mb-4">We Help To Get <br /> Soultions</p>
                <p className="text-[#4D4C7B] text-[16px]">We are proud to be a trusted healthcare provider in our community, and we look forward to serving you and your family with excellence, integrity, and compassion. Your health is our priority, and we are here for you every step of the way. We believe in treating each patient with dignity, respect, and empathy, ensuring that they receive the attention and care they deserve.</p>

                <button className="btn text-[16px] bg-[#FFC637] rounded-xl py-3 pl-6 pr-4 mt-16 font-medium">Learn more <MdOutlineArrowOutward className="text-[#020043] " /></button>

            </div>
            <div className="md:w-[60%] flex items-end">

                <div className="py-[47px] pl-[30px] pr-5 rounded-[32px] bg-[#343268] w-[380px] h-[210px]">
                    <p className="font-medium text-[26px] text-[#FFFFFF] mb-5">Our mission is simple</p>
                    <p className="text-[#FFFFFFCC] text-[16px]">To provide high-quality healthcare services that are accessible, personalized, and patient-centered.</p>

                </div>



            </div>
        </div>
    );
};

export default Mission;