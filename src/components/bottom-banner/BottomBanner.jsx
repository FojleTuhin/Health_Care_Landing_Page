import { MdOutlineArrowOutward } from "react-icons/md";

const BottomBanner = () => {
    return (
        <div>
            <div className="relative">
                <img className="rounded-2xl md:rounded-[32px]" src="https://i.ibb.co/FqfMQgN/Rectangle-32.png" alt="" />
                <div className="absolute inset-0 rounded-2xl md:rounded-[32px] px-4 md:px-[60px] flex justify-between"
                    style={{
                        background: 'radial-gradient(648.07% 142.88% at 98.23% 78.35%, #020043 0%, rgba(2, 0, 67, 0.30) 100%)',
                    }}
                >

                    <div>
                        <p className="text-[#FFFFF5] md:text-[40px] md:mb-6 font-semibold md:mt-[107px] mt-3">Get Your <br />First Appointment <br />at 50% Off!</p>

                        <div className="flex gap-[22px]">
                            <button className="btn text-[16px] mb-4 md:mb-0 bg-[#FFC637] rounded-xl py-3 pl-6 pr-4 mt-5 font-medium">Appointment <MdOutlineArrowOutward className="text-[#020043] " /></button>

                            <button className=" flex text-[16px] mb-4 md:mb-0 bg-none rounded-xl py-3 pl-2 pr-2 md:pl-6 md:pr-4 mt-5 font-medium border gap-2 items-center border-[#FFFFF5] text-[#FFFFF5]">learn more <MdOutlineArrowOutward className=" " /></button>

                        </div>
                    </div>
                    <div>
                        <img className="md:mt-[60px] mt-4 w-[40px] md:w-[124px]" src="https://i.ibb.co/pRQQ2Xp/logo-light.png" alt="" />

                    </div>

                </div>
            </div>
        </div>
    );
};

export default BottomBanner;