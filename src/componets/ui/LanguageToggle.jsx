import { useState } from "react";
import { useTranslation } from "react-i18next";
import ChevronIcon from "../../assets/icons/chevronDown.svg"

export const LanguageToggle = () => {
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const handleChangeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setIsOpen(false);
    }
    return (
        <div className="relative">
            <button onClick={()=> setIsOpen(!isOpen)} className="flex items-center gap-1">
                {i18n.language.toUpperCase()}
                <img src={ChevronIcon} alt="Arrow" className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {isOpen && (
                <ul className="absolute top-full mt-2  bg-white shadow-soft rounded-lg">
                    <li className="px-4 py-2 hover:bg-blue-100 cursor-pointer rounded-lg" onClick={() => handleChangeLanguage('es')}>ES</li>
                    <li className="px-4 py-2 hover:bg-blue-100 cursor-pointer rounded-lg" onClick={() => handleChangeLanguage('en')}>EN</li>
                </ul>
            )}
        </div>
    )
}