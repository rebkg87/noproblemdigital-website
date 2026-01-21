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
    light: {
        container: '',
        label: 'text-brand-secondary',
        highlight: '',
        title: 'text-brand-primary',
        subtitle: 'text-content-primary'
    },
    accent: {
        container: '',
        label: 'text-content-inverse',
        highlight: '',
        title: 'text-content-inverse',
        subtitle: 'text-content-inverse'
    },
    dark: {
        container: '',
        label: 'text-brand-secondary',
        highlight: 'text-content-inverse font-bold',
        title: 'text-content-inverse',
        subtitle: 'text-content-inverse'
    }
}

const alignmentClasses = {
    center: "items-center text-center justify-center",
    left: "items-start text-left justify-start",
    right: "items-end text-right justify-end"
}

export const TextSection = ({
    labelKey = null,
    titleKey = null,
    subtitleKey = null,
    highlightKey = null,
    isAnimated = false,
    alignment = "center",
    variant = "hero",
    subtitleClassName = "",
    className = ""
}) => {
    const { t } = useTranslation();
    const label = labelKey ? t(labelKey) : null;
    const title = t(titleKey);
    const subtitle = subtitleKey ? t(subtitleKey) : null;
    const highlight = highlightKey ? t(highlightKey) : null;
    const colors = variants[variant];
    const align = alignmentClasses[alignment];

    return (
        <div className={`flex flex-col ${align} w-auto h-auto ${className}`}>
            {label && (
                <span className={`font-secondary text-size-s1 uppercase tracking-widest ${colors.label}`}>
                    {label}
                </span>
            )}

            <h1 className={`font-h1 text-size-h1 leading-line-h1 font-primary whitespace-pre-line ${colors.title}`}>
                {isAnimated ? (
                    <div className={`relative inline-flex h-30 justify-center items-center ${colors.highlight}`}>
                        <AnimatedHeroText />
                    </div>
                ) : highlight ? (
                    <span className={colors.highlight}>{highlight}</span>
                ) : null}
                <div>{title}</div>
            </h1>

            {subtitle && (
                <p className={`font-secondary font-b1 leading-line-b1 text-size-b1 ${subtitleClassName} whitespace-pre-line ${colors.subtitle}`}>
                    {subtitle}
                </p>
            )}
        </div>
    )
}
