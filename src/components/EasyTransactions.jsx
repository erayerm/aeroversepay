const contents = [
    {
        icon: "trans-icon-1.png",
        title: "Seamless Experience",
        text: "Manage your digital transactions with ease"
    },
    {
        icon: "trans-icon-1.png",
        title: "Seamless Experience",
        text: "Manage your digital transactions with ease"
    },
    {
        icon: "trans-icon-1.png",
        title: "Seamless Experience",
        text: "Manage your digital transactions with ease"
    }
]

export default function EasyTransactions() {

    return (
        <div className="max-w-[924px] mx-auto">
            <h1 className="text-[70px] font-extralight text-center pb-[35px]">EASY <span className="text-[#84D1FF] font-black">TRANSACTIONS</span></h1>
            <div className="mx-[76px] py-[50px] px-[60px] flex gap-[30px] border-2 rounded-2xl items-center">
                <div className="flex flex-col gap-[35px]">
                    {contents.map((item, index) => {
                        return <div key={index} className="flex gap-[38px] items-center">
                            <div className="w-[55px] h-[40px]"><img src={item.icon} /></div>
                            <div className="max-w-[223px] flex flex-col gap-[10px]">
                                <p className="font-bold text-[20px]">{item.title}</p>
                                <p className="font-extralight text-[14px]">{item.text}</p>
                            </div>
                        </div>
                    })}
                </div>
                <div>
                    <img className="w-full" src="trans-pic-1.png" />
                </div>
            </div>
        </div>
    )
}