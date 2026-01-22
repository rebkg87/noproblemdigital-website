import { useTranslation } from "react-i18next"

export const NavigationMenu = () => {
    const { t } = useTranslation()

    const navItems = [
        {key: 'header.nav-items.menu-item-1', href: '/servicios'},
        {key: 'header.nav-items.menu-item-2', href: '/proyectos'},
        {key: 'header.nav-items.menu-item-3', href: '/nosotros'},
        {key: 'header.nav-items.menu-item-4', href: '/contactos'},

    ]
    return (
        <nav aria-label="Main Navigation">
            <ul className="list-none flex flex-col gap-5 md:flex-row md:items-center">
            {navItems.map (({key, href}) => (
                <li key={key}>
                    <a href={href} className="flex-1 whitespace-nowrap cursor-pointer text-brand-primary hover:text-state-hover-accent active:text-state-active active:font-bold text-size-l3 font-family-l3">
                        {t(key)}
                    </a>
                </li>
            ))}
            </ul>
        </nav>
    )
}