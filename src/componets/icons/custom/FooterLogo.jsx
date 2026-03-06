import { Link } from "react-router-dom"
import logoNPDFooter from '../../../assets/images/Logo_secondary.svg'
import { useTranslation } from "react-i18next"

export default function FooterLogo () {
    const { t } = useTranslation();
    return (
        <Link
            to="/"
            className="relative block"
        >
            <img
                src={logoNPDFooter}
                alt={t('images.logo')}
                className="w-full h-full object-contain"
            />
        </Link>
    )
}