
export const NavigationMenu = () => {
    const navItems = [
        {key: 'SERVICIOS', href: '/servicios'},
        {key: 'PORTAFOLIO', href: '/portafolio'},
        {key: 'NOSOTROS', href: '/nosotros'},
        {key: 'CONTACTOS', href: '/contactos'},

    ]
    return (
        <nav aria-label="Main Navigation">
            <ul className="list-none flex flex-col gap-5 md:flex-row md:items-center">
            {navItems.map (({key, href}) => (
                <li key={key}>
                    <a href={href} className="flex-1 whitespace-nowrap cursor-pointer text-brand-primary hover:text-state-hover-accent active:text-state-active active:font-bold text-size-l3 font-family-l3">
                        {(key)}
                    </a>
                </li>
            ))}
            </ul>
        </nav>
    )
}