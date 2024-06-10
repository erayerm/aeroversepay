import HorizontalCard from "./HorizontalCard"

const contents = [
    {
        icon: "trans-icon-1.png",
        title: "Seamless Experience",
        text: "Manage your digital transactions"
    },
    {
        icon: "trans-icon-1.png",
        title: "Seamless Experience",
        text: "Manage your digital transactions with ease"
    },
    {
        icon: "trans-icon-1.png",
        title: "Digital Currency Department",
        text: "Manage your digital transactions with ease"
    },
    {
        icon: "trans-icon-1.png",
        title: "Seamless Experience",
        text: "Manage your digital transactions"
    }
]

export default function FeaturesBenefits() {

    return (
        <div className="max-w-[924px] mx-auto">
            <h1 className="text-[70px] font-extralight text-center pb-[35px]">FEATURES & <span className="text-[#84D1FF] font-black">BENEFITS</span></h1>
            <div className="flex justify-between items-center gap-[102px]">
                <div className="flex-1">
                    <img className="w-full" src="trans-pic-1.png" />
                </div>
                <div className="flex-1 flex flex-col gap-[35px]">
                    {contents.map((item, index) => {
                        return <HorizontalCard key={index} content={item} />
                    })}
                </div>
            </div>
        </div>
    )
}