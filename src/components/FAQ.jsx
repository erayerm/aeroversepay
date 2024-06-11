import QuestionAnswer from "./QuestionAnswer"

const questions = [
    {
        question: "How does Aeroverse Pay simplify accepting cryptocurrency for my business?",
        answer: "Aeroverse Pay streamlines the process of accepting cryptocurrency by providing an intuitive platform that easily integrates with your business systems, ensuring a smooth transaction experience for both you and your customers."
    },

    {
        question: "What security measures does the Trust Screen and Protect Certificate offer?",
        answer: "The Trust Screen and Protect Certificate offer a comprehensive security framework, including transaction authentication and continuous monitoring, to protect against fraud and maintain the integrity of your business operations."
    },

    {
        question: "How can I integrate Aeroverse Pay into my existing payment systems?",
        answer: "Aeroverse Pay is designed for easy integration with your existing payment systems, enabling you to accept cryptocurrencies with minimal setup and without disrupting your current operations."
    },

    {
        question: "What happens once a customer pays with cryptocurrency?",
        answer: "Upon receiving a cryptocurrency payment, Aeroverse Pay verifies the transaction, converts the amount into your preferred fiat currency if necessary, and ensures that the funds are deposited into your account securely and efficiently."
    },

    {
        question: "Are there any hidden fees when using Aeroverse Pay?",
        answer: "Aeroverse Pay believes in transparency, so there are no hidden fees. All costs associated with transactions are communicated upfront, providing you with a clear understanding of the service charges."
    },

    {
        question: "How does Aeroverse Pay help with compliance and legal issues?",
        answer: "Aeroverse Pay provides guidance and support to ensure that your business adheres to the latest cryptocurrency regulations and compliance standards, safeguarding you from potential legal challenges."
    },
    {
        question: "Can I track my crypto transactions in real-time with Aeroverse Pay?",
        answer: "Yes, Aeroverse Pay's platform offers real-time tracking for all your cryptocurrency transactions, allowing you to monitor and manage your digital currency activity effectively."
    },
]

export default function FAQ() {

    return (
        <div className="max-w-[924px] mx-auto">
            <h1 className="text-[70px] text-[#84D1FF] font-black text-center">FAQ</h1>
            <ul className="flex flex-col gap-2.5">
                {
                    questions.map((item, index) => {
                        return <QuestionAnswer key={index} content={item} />
                    })
                }
            </ul>
        </div>
    )
}