import { useState } from "react"


export default function QuestionAnswer({ content }) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div onClick={toggleOpen} className="bg-[#1A1E27] px-[15px] w-[90%] md:w-[632px] mx-auto">
            <div className="flex py-[8px] gap-5 ">
                <div className="w-6"><p className="font-normal text-[40px] w-full">{isOpen ? "-" : "+"}</p></div>
                <div className="flex flex-col self-center">
                    <p className="font-bold text-[15px] py-[8px]">{content.question}</p>
                    {isOpen &&
                        <p className="font-normal text-[15px]">{content.answer}</p>
                    }
                </div>
            </div>
        </div>
    )
}