import { useTranslation } from "react-i18next"
import { TextSection } from "../../../componets/ui/TextSection"
import { Button } from "../../../componets/ui/Button"
import bgCTA from '../../../assets/images/bg-cta.png'

export const CTASection = () => {
    const { t } = useTranslation()
    const titleKey = "cta.title"
    const subtitleKey = "cta.subtitle"
    const buttonText = t("cta.button-text")
    return (
        <section className="relative h-168.5 overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center rotate-180"
                style={{ backgroundImage: `url(${bgCTA})` }}
            />
            <div className="relative flex flex-col items-center justify-center gap-8.75 pt-54">
                <TextSection variant="dark" titleKey={titleKey} subtitleKey={subtitleKey}/>
                <Button>{buttonText}</Button>
            </div>
        </section>
    )
}