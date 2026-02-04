import { Link } from "react-router-dom"

/**
 * NavLink component with disabled state support
 * @param {Object} props
 * @param {string} props.to - Route path
 * @param {boolean} props.disabled - Whether the link is disabled
 * @param {React.ReactNode} props.children - Link content
 * @param {string} props.className - Additional classes
 */
export const NavLink = ({ to, disabled = false, children, className = "" }) => {
    const baseStyles = "flex-1 whitespace-nowrap text-size-l3 font-family-l3 transition-colors duration-200"

    const enabledStyles = "cursor-pointer text-brand-primary hover:text-state-hover-accent active:text-state-active active:font-bold"

    const disabledStyles = "cursor-not-allowed text-state-disabled-content opacity-50 pointer-events-none"

    if (disabled) {
        return (
            <span
                className={`${baseStyles} ${disabledStyles} ${className}`}
                aria-disabled="true"
                role="link"
            >
                {children}
            </span>
        )
    }

    return (
        <Link
            to={to}
            className={`${baseStyles} ${enabledStyles} ${className}`}
        >
            {children}
        </Link>
    )
}
