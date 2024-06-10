import SmallCard from "./SmallCard"


const cardContents = [
    {
        icon: "icon-1.png",
        title: "Sign-Up",
        text: "Get started in minutes"
    },
    {
        icon: "icon-1.png",
        title: "Sign-Up",
        text: "Get started in minutes"
    },
    {
        icon: "icon-1.png",
        title: "Sign-Up",
        text: "Get started in minutes"
    },
    {
        icon: "icon-1.png",
        title: "Sign-Up",
        text: "Get started in minutes"
    },
    {
        icon: "icon-1.png",
        title: "Sign-Up",
        text: "Get started in minutes"
    }
]

export default function SmallCards() {

    return (
        <div className="flex justify-between">
            {cardContents.map((item, index) => <SmallCard key={index} content={item} />)}
        </div>
    )
}