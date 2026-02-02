import { TextSection } from "../../../componets/ui/TextSection"
import { Button } from "../../../componets/ui/Button"
import bgCTA from '../../../assets/images/bg-cta.png'
import { useSectionContent } from "../../../hooks/useSectionContent"
import { useNavigate } from "react-router-dom"

export const CTASection = () => {
    const content = useSectionContent('cta');
    const navigate = useNavigate()
    return (
        <section className="relative h-auto md:h-168.5 overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center rotate-180"
                style={{ backgroundImage: `url(${bgCTA})` }}
            />
            <div className="relative px-2.5 md:px-0 flex flex-col items-center justify-center gap-8.75 pt-15 md:pt-54 pb-25 md:pb-0">
                <TextSection variant="dark" titleKey={content.title} subtitleKey={content.subtitle} contentClassName="gap-5"/>
                <Button onClick={() => navigate('/contacto')}>{content.buttonText}</Button>
            </div>
        </section>
    )
}