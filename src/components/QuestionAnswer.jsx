import { useState } from "react"


export default function QuestionAnswer({ content }) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div onClick={toggleOpen} className="bg-[#1A1E27] px-[15px] w-[632px] mx-auto">
            <div className="flex py-[8px] items-center gap-5 ">
                <p className="font-normal text-[40px]">{isOpen ? "-" : "+"}</p>
                <p className="font-bold text-[15px]">{content.question}</p>
            </div>

            {isOpen &&
                <div className="flex py-[8px] gap-2">
                    <p className="font-normal text-[15px]">{content.answer}</p>
                </div>}
        </div>
    )
}