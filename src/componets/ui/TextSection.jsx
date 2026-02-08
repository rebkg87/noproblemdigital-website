import { useTranslation } from "react-i18next"
import AnimatedHeroText from "../../pages/homepage/sections/components/TypewriterAnimation.jsx"

const variants = {
    hero: {
        container: '',
        label: '',
        highlight: 'bg-content-inverse text-brand-secondary rounded-[30px] pr-8.75 pl-7.75 py-2.5',
        title: 'text-content-inverse',
        subtitle: 'text-content-inverse'
    },
    lightBlue: {
        container: '',
        label: 'text-brand-secondary',
        highlight: 'text-brand-secondary',
        title: 'text-brand-primary',
        subtitle: 'text-content-primary'
    },
    lightRed: {
        container: '',
        label: 'text-brand-primary',
        highlight: 'text-brand-primary',
        title: 'text-brand-secondary',
        subtitle: 'text-content-primary'
    },
    accent: {
        container: '',
        label: 'text-content-inverse',
        highlight: 'text-brand-primary',
        title: 'text-content-inverse',
        subtitle: 'text-content-inverse'
    },
    dark: {
        container: '',
        label: 'text-brand-secondary',
        highlight: 'text-brand-secondary',
        title: 'text-content-inverse',
        subtitle: 'text-content-inverse'
    },
    darkInverse: {
        container: '',
        label: 'text-brand-secondary',
        highlight: 'text-content-inverse',
        title: 'text-brand-secondary',
        subtitle: 'text-content-inverse'
    }
}

const alignmentClasses = {
    center: "items-center text-center justify-center",
    left: "items-start text-left justify-start",
    right: "items-end text-right justify-end"
}

const directionClasses = {
    col: "flex-col",
    row: "flex-row"
}

const renderTextWithHighlight = (text, highlightClass) => {
    if (!text || !text.includes('*')) return text;

    const parts = text.split(/\*(.*?)\*/);
    return parts.map((part, index) => {
        if (index % 2 === 1) {
            return <span key={index} className={highlightClass}>{part}</span>;
        }
        return part;
    });
};

export const TextSection = ({
    labelKey = null,
    titleKey = null,
    subtitleKey = null,
    highlightKey = null,
    isAnimated = false,
    alignment = "center",
    direction = "col",
    variant = "hero",
    titleClassName = "",
    subtitleClassName = "",
    contentClassName = "",
    className = ""
}) => {
    const { t } = useTranslation();
    const label = labelKey ? t(labelKey) : null;
    const title = t(titleKey);
    const subtitle = subtitleKey ? t(subtitleKey) : null;
    const highlight = highlightKey ? t(highlightKey) : null;
    const colors = variants[variant];
    const align = alignmentClasses[alignment];
    const dir = directionClasses[direction];

    return (
        <div className={`flex flex-col ${align} md:w-auto h-auto ${label ? 'gap-10' : ''} ${className}`}>
            {label && (
                <span className={`font-primary text-size-h3 font-h3 leading-line-h3 uppercase tracking-[0.23em] ${colors.label}`}>
                    {label}
                </span>
            )}
            <div className={`flex ${dir} ${align} ${contentClassName}`}>
                <h1 className={`font-h1 text-size-h2 md:text-size-h1 leading-line-h2 md:leading-line-h1 font-primary whitespace-pre-line ${titleClassName} ${colors.title}`}>
                    {isAnimated ? (
                        <div className={`relative inline-flex h md:h-30 justify-center items-center ${colors.highlight}`}>
                            <AnimatedHeroText />
                        </div>
                    ) : highlight ? (
                        <span className={colors.highlight}>{highlight}</span>
                    ) : null}
                    <div>{renderTextWithHighlight(title, colors.highlight)}</div>
                </h1>

                {subtitle && (
                    <p className={`font-secondary font-b2 leading-line-b2 text-size-b2 md:font-b1 md:leading-line-b1 md:text-size-b1 ${subtitleClassName} whitespace-pre-line ${colors.subtitle}`}>
                        {subtitle}
                    </p>
                )}
            </div>
        </div>
    )
}
