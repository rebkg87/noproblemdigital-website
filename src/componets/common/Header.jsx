import NPDLogo from "../../assets/icons/custom/NPDlogo"
import { NavigationMenu } from "../ui/NavigationMenu"

export const Header = () => {
    return (
        <div className="bg-content-inverse w-300 h-21 flex py-6.25 px-12.5 items-center justify-between rounded-[50px] shadow-soft ">
            <NPDLogo/>
            <NavigationMenu/>
        </div>
    )
}