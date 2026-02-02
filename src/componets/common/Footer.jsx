import FooterLogo from "../icons/custom/FooterLogo"
import { NavigationMenu } from "../ui/NavigationMenu"
import instagramIcon from "../../assets/icons/instagram.svg"
import linkedinIcon from "../../assets/icons/linkedin.svg"

export const Footer = () => {
    return (
        <div className="w-full h-auto md:h-64.25 py-15 px-2.5 pb-10 md:pb-0 md:px-17 bg-white flex flex-col md:flex-row items-center justify-center sticky bottom-0 gap-15 md:gap-64.25">
            <FooterLogo/>
            <div className="flex flex-col items-center gap-3.75 w-95.75">
                <NavigationMenu/>
                <p className="text-brand-secondary font-l3 text-size-l3 font-family-l3">
                    © 2025 NoProblemDigital. All rights reserved.
                </p>
            </div>
            <div className="flex flex-row items-center gap-5">
                <img src={instagramIcon} alt="Instagram Icon" />
                <img src={linkedinIcon} alt="LinkedIn Icon" />
            </div>
        </div>
    )
}