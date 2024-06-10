import HorizontalCard from "./HorizontalCard"

const contents = [
    {
        icon: "benefits-icon-1.png",
        title: "Zero Knowledge Required",
        text: "No prior crypto knowledge necessary"
    },
    {
        icon: "benefits-icon-2.png",
        title: "TSP Certificate",
        text: "Trust, Screen, and Protect our commitment to your business's security"
    },
    {
        icon: "benefits-icon-3.png",
        title: "Digital Currency Department",
        text: "A dedicated discrete vertical to manage your digital transactions"
    },
    {
        icon: "benefits-icon-4.png",
        title: "Full Compliance",
        text: "We handle all your regulatory requirements"
    }
]

export default function FeaturesBenefits() {

    return (
        <div className="max-w-[924px] mx-auto">
            <h1 className="text-[70px] font-extralight text-center pb-[35px]">FEATURES & <span className="text-[#84D1FF] font-black">BENEFITS</span></h1>
            <div className="flex justify-between items-center gap-[102px]">
                <div className="flex-1">
                    <img className="w-full" src="benefits-pic-1.png" />
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