import { useState } from "react"
import NPDLogo from "../icons/custom/NPDlogo"
import { NavigationMenu } from "../ui/NavigationMenu"
import { LanguageSwitchToggle } from "../ui/ThemeToggle"

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <div className="bg-content-inverse w-full md:w-300 flex flex-col md:flex-row py-6.25 px-5.5 md:px-12.5 items-center justify-between rounded-[50px] shadow-soft">
            {/* Logo y hamburguesa en mobile */}
            <div className="flex w-full md:w-auto items-center justify-between">
                <NPDLogo className="w-5 h-auto"/>
                {/* Botón hamburguesa - solo visible en mobile */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden flex flex-col gap-1 w-6 h-6 justify-center items-center"
                    aria-label="Toggle menu"
                >
                    <span className={`w-6 h-0.5 bg-brand-primary transition-transform ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                    <span className={`w-6 h-0.5 bg-brand-primary transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`w-6 h-0.5 bg-brand-primary transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                </button>
            </div>

            {/* Contenido del menú - oculto en mobile cuando está cerrado */}
            <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row items-center gap-6.25 w-full md:w-auto mt-6.25 md:mt-0`}>
                <NavigationMenu/>
                <LanguageSwitchToggle/>
            </div>
        </div>
    )
}