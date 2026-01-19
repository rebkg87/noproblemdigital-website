import { Link } from "react-router-dom";
import logoNPD from '../../../assets/images/Logo_primary.png'

export default function NPDLogo () {
    return (
        <Link 
            to="/"
            className="relative block w-57.5 h-7.5"
        >
            <img
                src={logoNPD}
                alt="No Problem Digital Logo"
                className="w-full h-full object-contain"
            />
        </Link>
    )
}