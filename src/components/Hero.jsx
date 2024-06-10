
export default function Hero() {

    return (
        <div className="max-w-[924px] mx-auto py-[118px]">
            <div className="text-center flex flex-col items-center gap-4">
                <h1 className="text-[60px] font-extralight">Seamless <span className="text-[#84D1FF] font-black">Crypto Payments</span></h1>
                <h2 className="text-[36px] font-medium">for Private Jet Operators & Brokers</h2>
                <p className="text-[#7C7C7C] text-[20px] max-w-[590px]">Empower Your Aviation Business with The Ultimate Crypto Solution
                    We Handle Everything</p>
                <button className="text-[#15181F] bg-[#7EC6EF] text-[24px] px-[40px] py-[16px] rounded-lg my-[53px] font-bold">Contact Us</button>
            </div>
            <img className="w-full" src="main-pic.png" />
        </div>
    )
}