import { TextSection } from "../../../componets/ui/TextSection";
import { Card } from "../../../componets/ui/Card";
import ArrowUpIcon from '../../../assets/icons/arrow_up.svg'
import { useNavigate } from "react-router-dom";
import { useSectionContent } from "../../../hooks/useSectionContent";

export const ServicesSection = () =>  {
    const content = useSectionContent('services');
    const navigate = useNavigate();
    return (
        <section className="bg-brand-secondary w-full h-auto md:h-360 px-10 md:px-24 py-10 md:py-28.75 flex flex-col items-center justify-center gap-5 md:gap-21.5">
            <TextSection labelKey={content.label} titleKey={content.title} subtitleKey={content.subtitle} variant="accent" contentClassName='gap-5 px-5 md:px-0'/>
            <div className="gap-5 md:gap-8.75 grid grid-cols-1 md:grid-cols-3">
            {content.cards.map ((card, index) => (
                <Card key={index} title={card.title} description={card.description} variant="whiteOutline" size="vertical" className="text-white shadow-soft" icon={ArrowUpIcon} iconPosition="bottom" titleTextSize="md" descriptionTextSize="sm"  disabled={!card.enabled} onButtonClick={() => navigate(card.href)} />
            ))}
            </div>
        </section>
    )
}