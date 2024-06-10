

export default function Header() {

    return (
        <div className="w-screen bg-[#1A1E27] h-[80px]">
            <div className="max-w-[1440px] h-full px-[88px] flex justify-between items-center mx-auto">
                <div>Logo</div>
                <nav className="flex gap-[32px]">
                    <a>Solution !</a>
                    <a>Information !</a>
                    <a>Contact</a>
                </nav>
            </div>
        </div>
    )
}

