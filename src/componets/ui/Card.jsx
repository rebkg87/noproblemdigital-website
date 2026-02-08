const variants = {
    redOutline: 'bg-transparent border border-brand-secondary rounded-[10px]',
    whiteOutline: 'bg-transparent border border-white hover:bg-state-hover-accent transition-colors rounded-tr-[40px]',
    white: 'bg-white rounded-[50px] shadow-soft',
}

const sizes = {
    horizontal: 'p-7.5 gap-3 w-81.75 h-auto',
    vertical: 'p-10 gap-7.5 w-88 h-93.75',
    horizontalXl: 'w-auto md:w-[550px] p-10 md:p-[60px]'
}

const titleTextSizes = {
    sm: 'text-size-h5 font-h5 leading-line-h5 font-secondary',
    md: 'text-size-h4 font-h4 leading-line-h4 font-secondary',
    xl: 'text-size-h4 md:text-size-h2 font-h2 leading-line-h2 font-primary'
}

const descriptionTextSizes = {
    sm: 'text-size-b2 font-b2 leading-line-b2 font-secondary',
    md: 'text-size-b3 font-b3 leading-line-b3 font-secondary',
}

const alignmentClasses = {
    left: 'items-start text-left justify-start',
    right: 'items-end text-right justify-end',
    center: 'items-center text-center justify-start'
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
    alignment = 'left',
    onButtonClick = null,
    disabled = false,
    includesLabel = null,
    includes = [],
    footerTagline = null,
    titleClassName = '',
    className = '',
    ...props }) => {

        const titleClasses = titleTextSizes[titleTextSize];
        const descriptionClasses = descriptionTextSizes[descriptionTextSize];

        return (
            <div className={`${variants[variant]} ${sizes[size]} flex flex-col justify-center ${alignmentClasses[alignment]} ${className}`} {...props}>
                {icon && iconPosition === 'top' && (
                    <img src= {icon}/>
                )}
                <h3 className={`${titleClasses} ${titleClassName} whitespace-pre-line`}>{title}</h3>
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
                <div className="flex flex-col gap-5 w-full">
                {includes.length > 0 && (
                    <div className="border border-brand-secondary rounded-[20px] p-5 w-full md:min-h-48">
                        <p className="text-brand-secondary font-secondary font-h5 text-size-h5 mb-2">{includesLabel}</p>
                        <ul className="list-disc list-inside text-content-primary font-secondary text-size-b3">
                            {includes.map((item, index) => (
                                <li key={index}> {item}</li>
                            ))}
                        </ul>
                    </div>
                )}
                {footerTagline && (
                    <div className="border border-brand-primary rounded-full px-5 py-3 w-full text-center">
                        <p className="text-brand-primary font-secondary text-size-l3 whitespace-pre-line">{footerTagline}</p>
                    </div>
                )}
                </div>
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