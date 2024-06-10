import SmallCard from "./SmallCard"


const cardContents = [
    {
        icon: "icon-1.png",
        title: "Sign-Up",
        text: "Get started in minutes"
    },
    {
        icon: "icon-2.png",
        title: "Integration",
        text: "Easy crypto payments"
    },
    {
        icon: "icon-3.png",
        title: "Verification",
        text: "KYC, KYT, & AML checks, on us"
    },
    {
        icon: "icon-4.png",
        title: "Receive Payments",
        text: "Accept crypto payments worldwide"
    },
    {
        icon: "icon-5.png",
        title: "Settlement",
        text: "Instant crypto to fiat settlements"
    }
]

export default function SmallCards() {

    return (
        <div className="flex justify-around gap-5 gap-y-10 flex-wrap">
            {cardContents.map((item, index) => <SmallCard key={index} content={item} />)}
        </div>
    )
}