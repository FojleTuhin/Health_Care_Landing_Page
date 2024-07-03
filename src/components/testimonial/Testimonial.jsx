import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';



const Testimonial = () => {
    return (
        <div className="mt-40 mb-40">
            <button className="btn bg-[#FBFBFB] py-[10px] px-6 rounded-3xl text-[#020043] mb-4 ">Testimonial</button>
            <p className="text-4xl font-semibold mb-[30px]">What they say about us</p>
            <div>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                        
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide><div className="bg-[#FFFFF5] p-5 rounded-2xl md:w-[339px]">
                        <p className="text-[19px] font-semibold text-[#020043]">Expertise and Compassion Combined</p>
                        <p className="mt-3 text-xs text-[#4D4C7B]">I can't thank enough for their exceptional care. The doctors and staff showed incredible expertise and compassion throughout my treatment journey. I felt truly cared for every step of the way.</p>

                        <div className="mt-4 flex gap-3">
                            <img className="h-11 w-11" src="https://i.ibb.co/V9Sjwzz/Ellipse-10.png" alt="" />
                            <div>
                                <p><span className="text-xs font-semibold text-[#020043]">Sarah D</span><span className="text-xs font-medium text-[#020043]">,</span><span className="text-xs text-[#4D4C7B]"> IT Professional</span></p>
                                <div className="gap-[6px] flex">
                                    <img className="h-[14px] w-[14px]" src="https://i.ibb.co/HDFW56Q/fi-sr-star.png" alt="" />
                                    <img className="h-[14px] w-[14px]" src="https://i.ibb.co/HDFW56Q/fi-sr-star.png" alt="" />
                                    <img className="h-[14px] w-[14px]" src="https://i.ibb.co/HDFW56Q/fi-sr-star.png" alt="" />
                                    <img className="h-[14px] w-[14px]" src="https://i.ibb.co/HDFW56Q/fi-sr-star.png" alt="" />
                                    <img className="h-[14px] w-[14px]" src="https://i.ibb.co/HDFW56Q/fi-sr-star.png" alt="" />
                                </div>
                            </div>
                        </div>

                    </div></SwiperSlide>
                    <SwiperSlide><div className="bg-[#FFFFF5] p-5 rounded-2xl md:w-[339px]">
                        <p className="text-[19px] font-semibold text-[#020043]">A Partner in Health and
                        Wellness</p>
                        <p className="mt-3 text-xs text-[#4D4C7B]">My experience at [Healthcare Provider Name] was life-changing. The prompt and accurate diagnosis, coupled with the advanced treatments they provided, saved my life.</p>

                        <div className="mt-4 flex gap-3">
                            <img className="h-11 w-11" src="https://i.ibb.co/gVSZwDB/Ellipse-2.png" alt="" />
                            <div>
                                <p><span className="text-xs font-semibold text-[#020043]">Michael R</span><span className="text-xs font-medium text-[#020043]">,</span><span className="text-xs text-[#4D4C7B]"> Business Executive</span></p>
                                <div className="gap-[6px] flex">
                                    <img className="h-[14px] w-[14px]" src="https://i.ibb.co/HDFW56Q/fi-sr-star.png" alt="" />
                                    <img className="h-[14px] w-[14px]" src="https://i.ibb.co/HDFW56Q/fi-sr-star.png" alt="" />
                                    <img className="h-[14px] w-[14px]" src="https://i.ibb.co/HDFW56Q/fi-sr-star.png" alt="" />
                                    <img className="h-[14px] w-[14px]" src="https://i.ibb.co/HDFW56Q/fi-sr-star.png" alt="" />
                                   
                                </div>
                            </div>
                        </div>

                    </div></SwiperSlide>
                    <SwiperSlide><div className="bg-[#FFFFF5] p-5 rounded-2xl md:w-[339px]">
                        <p className="text-[19px] font-semibold text-[#020043]">A Partner in Health and
                        Wellness</p>
                        <p className="mt-3 text-xs text-[#4D4C7B]">As a busy professional, I appreciate the convenience and quality of care I receive at [Healthcare Provider Name]. From telemedicine consultations to routine check-ups, they've become my trusted partner in health and</p>

                        <div className="mt-4 flex gap-3">
                            <img className="h-11 w-11" src="https://i.ibb.co/nfjhCBJ/Ellipse-5.png" alt="" />
                            <div>
                                <p><span className="text-xs font-semibold text-[#020043]">David S</span><span className="text-xs font-medium text-[#020043]">,</span><span className="text-xs text-[#4D4C7B]"> Lawyer</span></p>
                                <div className="gap-[6px] flex">
                                    <img className="h-[14px] w-[14px]" src="https://i.ibb.co/HDFW56Q/fi-sr-star.png" alt="" />
                                    <img className="h-[14px] w-[14px]" src="https://i.ibb.co/HDFW56Q/fi-sr-star.png" alt="" />
                                    <img className="h-[14px] w-[14px]" src="https://i.ibb.co/HDFW56Q/fi-sr-star.png" alt="" />
                                    <img className="h-[14px] w-[14px]" src="https://i.ibb.co/HDFW56Q/fi-sr-star.png" alt="" />
                                    <img className="h-[14px] w-[14px]" src="https://i.ibb.co/HDFW56Q/fi-sr-star.png" alt="" />
                                </div>
                            </div>
                        </div>

                    </div></SwiperSlide>
                    <SwiperSlide><div className="bg-[#FFFFF5] p-5 rounded-2xl md:w-[339px]">
                        <p className="text-[19px] font-semibold text-[#020043]">Expertise and Compassion Combined</p>
                        <p className="mt-3 text-xs text-[#4D4C7B]">I can't thank enough for their exceptional care. The doctors and staff showed incredible expertise and compassion throughout my treatment journey. I felt truly cared for every step of the way.</p>

                        <div className="mt-4 flex gap-3">
                            <img className="h-11 w-11" src="https://i.ibb.co/V9Sjwzz/Ellipse-10.png" alt="" />
                            <div>
                                <p><span className="text-xs font-semibold text-[#020043]">Sarah D</span><span className="text-xs font-medium text-[#020043]">,</span><span className="text-xs text-[#4D4C7B]"> IT Professional</span></p>
                                <div className="gap-[6px] flex">
                                    <img className="h-[14px] w-[14px]" src="https://i.ibb.co/HDFW56Q/fi-sr-star.png" alt="" />
                                    <img className="h-[14px] w-[14px]" src="https://i.ibb.co/HDFW56Q/fi-sr-star.png" alt="" />
                                    <img className="h-[14px] w-[14px]" src="https://i.ibb.co/HDFW56Q/fi-sr-star.png" alt="" />
                                    <img className="h-[14px] w-[14px]" src="https://i.ibb.co/HDFW56Q/fi-sr-star.png" alt="" />
                                    <img className="h-[14px] w-[14px]" src="https://i.ibb.co/HDFW56Q/fi-sr-star.png" alt="" />
                                </div>
                            </div>
                        </div>

                    </div></SwiperSlide>



                    

                </Swiper>
            </div>

        </div>
    );
};

export default Testimonial;