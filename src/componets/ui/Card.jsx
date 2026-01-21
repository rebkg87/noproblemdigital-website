const variants = {
    redOutline: 'bg-transparent border border-brand-secondary shadow-soft hover:scale-105 transition-transform rounded-[10px]',
    whiteOutline: 'bg-transparent border border-white hover:bg-state-hover-accent transition-colors',
}

const sizes = {
    horizontal: 'p-7.5 gap-3 w-81.75 h-auto',
    vertical: 'p-10 gap-7.5 w-88 h-93.75',
}

const titleTextSizes = {
    sm: 'text-size-h5 font-h5 leading-line-h5 font-secondary',
    md: 'text-size-h4 font-h4 leading-line-h4 font-secondary',
}

const descriptionTextSizes = {
    sm: 'text-size-b2 font-b2 leading-line-b2 font-secondary',
    md: 'text-size-b3 font-b3 leading-line-b3 font-secondary',
}

export const Card = ({
    title,
    description,
    icon = null,
    iconPosition = 'top',
    variant = 'redOutline',
    size = 'horizontal',
    titleTextSize = 'sm',
    descriptionTextSize = 'md',
    className = '',
    ...props }) => {

        const titleClasses = titleTextSizes[titleTextSize];
        const descriptionClasses = descriptionTextSizes[descriptionTextSize];

        return (
            <div className={`${variants[variant]} ${sizes[size]} flex flex-col justify-between items-start text-left rounded-lg ${className}`} {...props}>
                {icon && iconPosition === 'top' && (
                    <img src= {icon}/>
                )}
                <h3 className={`${titleClasses}`}>{title}</h3>
                <p className={`${descriptionClasses} whitespace-pre-line`}>{description}</p>
                {icon && iconPosition === 'bottom' && (
                    <div className="self-end">{icon}</div>
                )}
            </div>
        )
    }