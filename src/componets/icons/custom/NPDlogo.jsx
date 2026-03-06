import { Link } from "react-router-dom";
import logoNPD from '../../../assets/images/Logo_primary.png'
import { useTranslation } from "react-i18next"

export default function NPDLogo () {
    const { t } = useTranslation();
    return (
        <Link
            to="/"
            className="relative block w-57.5 h-7.5"
        >
            <img
                src={logoNPD}
                alt={t('images.logo')}
                className="w-full h-full object-contain"
            />
        </Link>
    )
}