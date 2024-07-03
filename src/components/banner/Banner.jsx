
const Banner = () => {
    return (
    
        <div className="relative">
            <img className="rounded-2xl md:rounded-[48px]" src="https://i.ibb.co/XxKgHFQ/Rectangle-5.png" alt="" />
            <div className="absolute inset-0 rounded-2xl md:rounded-[48px]"
                style={{
                    background: 'linear-gradient(179deg, rgba(0, 193, 157, 0.00) -25.42%, rgba(2, 0, 67, 0.47) 107.11%)',
                }}
            ></div>
        </div>
    );
};

export default Banner;