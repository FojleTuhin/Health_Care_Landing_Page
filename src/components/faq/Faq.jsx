
const Faq = () => {
    return (
        <div>
            <button className="btn bg-[#FBFBFB] py-[10px] px-6 rounded-3xl text-[#020043] mb-4 ">Faq</button>
            <p className="text-4xl font-semibold mb-[30px] text-[#020043]">Frequntly Asked Question</p>
            <div className="space-y-3">
                {/* <div className="collapse collapse-arrow ">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-xl font-medium bg-[#FFFFF5] px-11"> What are your office hours? </div>
                    <div className="collapse-content  py-4">
                        <p>Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.</p>
                    </div>
                </div> */}
                <div className="collapse collapse-arrow ">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-xl font-medium  bg-[#FFFFF5] px-11"> What are your office hours?</div>
                    <div className="collapse-content px-11">
                        <p className="mt-4 opacity-[0.6] text-[#343268] text-[14px]">Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow ">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium  bg-[#FFFFF5] px-11">How can I schedule an appointment?</div>
                    <div className="collapse-content px-11">
                        <p className="mt-4 opacity-[0.6] text-[#343268] text-[14px]">Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow ">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium  bg-[#FFFFF5] px-11">Do you accept insurance?</div>
                    <div className="collapse-content px-11">
                        <p className="mt-4 opacity-[0.6] text-[#343268] text-[14px]">Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow ">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium  bg-[#FFFFF5] px-11">What should I bring to my appointment?</div>
                    <div className="collapse-content px-11">
                        <p className="mt-4 opacity-[0.6] text-[#343268] text-[14px]">Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow ">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium  bg-[#FFFFF5] px-11">Do you offer telemedicine appointments?</div>
                    <div className="collapse-content px-11">
                        <p className="mt-4 opacity-[0.6] text-[#343268] text-[14px]">Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Faq;