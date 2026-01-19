import { Link } from "react-router-dom"
import logoNPDFooter from '../../../assets/images/Logo_secondary.svg'

export default function FooterLogo () {
    return (
        <Link 
            to="/"
            className="relative block"
        >
            <img
                src={logoNPDFooter}
                alt="No Problem Digital Logo"
                className="w-full h-full object-contain"
            />
        </Link>
    )
}