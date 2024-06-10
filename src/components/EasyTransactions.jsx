import HorizontalCard from "./HorizontalCard"

const contents = [
    {
        icon: "trans-icon-1.png",
        title: "Seamless Experience",
        text: "Manage your digital transactions with ease"
    },
    {
        icon: "trans-icon-2.png",
        title: "Direct Bank Transfers",
        text: "Exchange your crypto instantly"
    },
    {
        icon: "trans-icon-3.png",
        title: "Transparent Fees",
        text: "Fixed transaction fees with no hidden charges"
    }
]

export default function EasyTransactions() {

    return (
        <div className="max-w-[924px] mx-auto">
            <h1 className="text-[70px] font-extralight text-center pb-[35px]">EASY <span className="text-[#84D1FF] font-black">TRANSACTIONS</span></h1>
            <div className="mx-[76px] py-[50px] px-[60px] flex gap-[30px] border-2 rounded-2xl items-center">
                <div className="flex flex-col gap-[35px]">
                    {contents.map((item, index) => {
                        return <HorizontalCard key={index} content={item} />
                    })}
                </div>
                <div>
                    <img className="w-full" src="trans-pic-1.png" />
                </div>
            </div>
        </div>
    )
}