import { faFacebook, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {

    return (
        <div className="w-screen bg-[#0D0F14] px-5">
            <div className="max-w-[924px] flex justify-between mx-auto py-[24px]">
                <nav className="flex gap-6 md:gap-[71px]">
                    <a>Terms & Condition</a>
                    <a>Legal</a>
                    <a>Cookies</a>
                </nav>
                <nav className="flex gap-[17px] !text-[#5589A8]">
                    <a><FontAwesomeIcon icon={faInstagram} style={{ color: "#5589A8" }} /></a>
                    <a><FontAwesomeIcon icon={faYoutube} /></a>
                    <a><FontAwesomeIcon icon={faTwitter} /></a>
                    <a><FontAwesomeIcon icon={faFacebook} /></a>
                </nav>
            </div>
            <div className="mx-auto text-center pb-[24px]">
                <p className="text-[#858181]">© 2023 AeroVerse</p>
            </div>
        </div>
    )
}