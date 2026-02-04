const variants = {
    redOutline: 'bg-transparent border border-brand-secondary rounded-[10px]',
    whiteOutline: 'bg-transparent border border-white hover:bg-state-hover-accent transition-colors rounded-tr-[40px]',
}

const sizes = {
    horizontal: 'p-7.5 gap-3 w-81.75 h-auto',
    vertical: 'p-10 gap-7.5 w-88 h-93.75',
    horizontalXl: 'w-auto md:w-[550px] p-10 md:p-[60px]'
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
    tags = [],
    icon = null,
    iconPosition = 'top',
    variant = 'redOutline',
    size = 'horizontal',
    titleTextSize = 'sm',
    descriptionTextSize = 'md',
    onButtonClick = null,
    disabled = false,
    className = '',
    ...props }) => {

        const titleClasses = titleTextSizes[titleTextSize];
        const descriptionClasses = descriptionTextSizes[descriptionTextSize];

        return (
            <div className={`${variants[variant]} ${sizes[size]} flex flex-col justify-center items-start text-left ${className}`} {...props}>
                {icon && iconPosition === 'top' && (
                    <img src= {icon}/>
                )}
                <h3 className={`${titleClasses} whitespace-pre-line`}>{title}</h3>
                {tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                        {tags.map((tag, index) => (
                            <span
                                key={index}
                                className="text-brand-secondary text-size-l3 font-secondary font-l3 leading-line-l3 border border-brand-secondary rounded-full px-3 py-1"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
                <p className={`${descriptionClasses} whitespace-pre-line`}>{description}</p>
                {icon && iconPosition === 'bottom' && (
                    <button
                        className={`self-end transform ${disabled ? 'cursor-not-allowed opacity-70' : 'cursor-pointer hover:scale-105'}`}
                        onClick={disabled ? undefined : onButtonClick}
                        disabled={disabled}
                    >
                        <img src= {icon} className={disabled ? '' : 'hover:border-2 hover:border-state-hover-primary'}/>
                    </button>

                )}
            </div>
        )
    }