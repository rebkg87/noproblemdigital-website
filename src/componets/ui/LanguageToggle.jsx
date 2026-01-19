import { useState } from "react";
import { useTranslation } from "react-i18next";

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
                <span className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} >
                    ▼
                </span>
            </button>

            {isOpen && (
                <ul className="absolute top-full mt-2  bg-white shadow-soft rounded-lg">
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleChangeLanguage('es')}>ES</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleChangeLanguage('en')}>EN</li>
                </ul>
            )}
        </div>
    )
}