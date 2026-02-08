import { useTranslation } from "react-i18next"

export const LanguageSwitchToggle = () => {
    const { i18n } = useTranslation()
    const isSpanish = i18n.language === 'es'

    const toggleLanguage = () => {
        i18n.changeLanguage(isSpanish ? 'en' : 'es')
    }

    return (
        <button onClick={toggleLanguage} aria-label="Toggle language" className="flex items-center gap-2">
            <span className={`font-secondary text-size-b2 ${!isSpanish ? 'text-brand-secondary font-bold' : 'text-content-primary'}`}>EN</span>
            <div className="relative w-13.75 h-8.5 rounded-full border-7 border-brand-primary transition-colors">
                <span className={`absolute top-1/2 -translate-y-1/2 w-3.75 h-3.75 rounded-full transition-all bg-brand-secondary ${isSpanish ? 'right-1' : 'left-1'}`}/>
            </div>
            <span className={`font-secondary text-size-b2 ${isSpanish ? 'text-brand-secondary font-bold' : 'text-content-primary'}`}>ES</span>
        </button>
    )
}