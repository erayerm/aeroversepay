
export default function Footer() {

    return (
        <div className="w-screen bg-[#0D0F14]">
            <div className="max-w-[924px] flex justify-between mx-auto py-[24px]">
                <nav className="flex gap-[71px]">
                    <a>Terms & Condition</a>
                    <a>Legal</a>
                    <a>Cookies</a>
                </nav>
                <nav className="flex gap-[17px]">
                    <a>I</a>
                    <a>Y</a>
                    <a>T</a>
                    <a>F</a>
                </nav>
            </div>
            <div className="mx-auto text-center pb-[24px]">
                <p>© 2023 AeroVerse</p>
            </div>
        </div>
    )
}