import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Header() {

    return (
        <div className="w-screen bg-[#1A1E27] h-[80px]">
            <div className="max-w-[1440px] h-full px-[88px] flex justify-between items-center mx-auto">
                <div>
                    <img src="logo.png" />
                </div>
                <nav className="flex gap-[32px] text-[16px] font-semibold">
                    <a>Solution <FontAwesomeIcon icon={faAngleDown} /></a>
                    <a>Information <FontAwesomeIcon icon={faAngleDown} /></a>
                    <a>Contact</a>
                </nav>
            </div>
        </div>
    )
}

