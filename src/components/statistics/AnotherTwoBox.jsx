
const AnotherTwoBox = ({heading, subheading, img}) => {
    return (
        <div className='mt-5'>
            <div className=" border-[0.5px] rounded-3xl bg-[#FFFFF5] border-[#02004333] p-5">
                <p className="text-[#020043] font-semibold text-[40px]">500+</p>
                <p className="text-[#343268] text-[14px]">Board-certified doctors.</p>

                <div className="flex justify-end">
                <img className="w-[90px] h-[71px]" src='https://i.ibb.co/zVNcL0v/contract-1-1.png' alt="" />
                </div>

            </div>
        </div>
    );
};

export default AnotherTwoBox;