import NPDLogo from "../../assets/icons/custom/NPDlogo"
import { LanguageToggle } from "../ui/LanguageToggle"
import { NavigationMenu } from "../ui/NavigationMenu"
import { ThemeToggle } from "../ui/ThemeToggle"

export const Header = () => {
    return (
        <div className="bg-content-inverse w-300 h-21 flex py-6.25 px-12.5 items-center justify-between rounded-[50px] shadow-soft ">
            <NPDLogo/>
            <NavigationMenu/>
            <div className="flex flex-row w-33.5 gap-6.25 items-center shrink-0">
                <LanguageToggle/>
                <ThemeToggle/>
            </div>
        </div>
    )
}