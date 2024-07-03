import AnotherTwoBox from "./AnotherTwoBox";



const statistics = () => {
    return (
        <div className="flex mt-10 gap-5 mb-20">

            <div className="w-[20%]">
                <div className=" border-[0.5px] rounded-3xl bg-white border-[#02004333] p-5 h-[335px] ">

                    <p className="text-[#020043] font-semibold text-[40px]">90%</p>
                    <p className="opacity-[0.8] mb-6 mt-2 text-[#020043]">Patient satisfaction rate, reflecting our commitment.</p>
                    <img className="h-[130px] w-[130px] mx-auto items-end" src='https://i.ibb.co/NWjf8ND/Group-12.png' alt="" />

                </div>

            </div>
            <div className="w-[60%]">
                <div>
                    <p className="text-center text-5xl font-semibold text-[#020043]">Comprehensive Care <br /> for Every Patient</p>
                </div>
                <div className="grid grid-cols-3 gap-5">
                    <AnotherTwoBox></AnotherTwoBox>
                    <div>
                        
                    </div>
                    <AnotherTwoBox></AnotherTwoBox>
                    


                </div>

            </div>
            <div className="w-[20%]">
                <div className=" border-[0.5px] rounded-3xl bg-white border-[#02004333] p-5 h-[335px] ">

                    <p className="text-[#020043] font-semibold text-[40px]">50+</p>
                    <p className="opacity-[0.8] mb-[45px] mt-2 text-[#020043]">Free lession video 
                    for patient.</p>
                    <img className="h-[130px] w-[130px] mx-auto items-end" src='https://i.ibb.co/hVbgKyx/Group.png' alt="" />

                </div>

            </div>
        </div>
    );
};

export default statistics;