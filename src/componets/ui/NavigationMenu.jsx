import { useTranslation } from "react-i18next"
import { NavLink } from "./NavLink"

export const NavigationMenu = () => {
    const { t } = useTranslation()
    const navItems = t('navigation.nav-items', { returnObjects: true })

    return (
        <nav aria-label="Main Navigation">
            <ul className="list-none flex flex-col gap-5 md:flex-row md:items-center">
            {navItems.map((item, index) => (
                <li key={index}>
                    <NavLink
                        to={item.href}
                        disabled={!item.enabled}
                    >
                        {item.label}
                    </NavLink>
                </li>
            ))}
            </ul>
        </nav>
    )
}
