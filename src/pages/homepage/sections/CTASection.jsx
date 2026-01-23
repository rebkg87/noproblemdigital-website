import { TextSection } from "../../../componets/ui/TextSection"
import { Button } from "../../../componets/ui/Button"
import bgCTA from '../../../assets/images/bg-cta.png'
import { useSectionContent } from "../../../hooks/useSectionContent"

export const CTASection = () => {
    const content = useSectionContent('cta');
    return (
        <section className="relative h-168.5 overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center rotate-180"
                style={{ backgroundImage: `url(${bgCTA})` }}
            />
            <div className="relative flex flex-col items-center justify-center gap-8.75 pt-54">
                <TextSection variant="dark" titleKey={content.title} subtitleKey={content.subtitle} contentClassName="gap-5"/>
                <Button>{content.buttonText}</Button>
            </div>
        </section>
    )
}