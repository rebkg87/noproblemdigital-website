const variants = {
    primary: 'bg-brand-secondary text-content-inverse hover:bg-state-hover-accent',
    secondary: 'bg-brand-primary text-content-inverse hover:bg-state-hover-primary focus:border-brand-primary',
    outline: 'bg-transparent border-2 border-brand-secondary text-brand-secondary hover:border-brand-primary hover:text-brand-primary',
    ghost: 'bg-transparent text-brand-secondary hover:bg-state-focus hover:text-brand-primary',
}

const sizes = {
    sm: 'px-4 py-2 text-size-s1',
    md: 'px-9.25 py-3.5 w-47.5 font-secondary text-size-l1 w-auto',
    lg: 'px-12 py-4 text-size-l2',
}

export const Button = ({ children, variant = 'primary', size = 'md', className = '', ...props }) => {
    return (
        <button
            className={`${variants[variant]} ${sizes[size]} font-secondary focus:border-state-focus rounded-[50px] focus:border-2 justify-center items-center flex transition-colors ${className}`}
            {...props}
        >
            {children}
        </button>
    )
}