import { TextSection } from "../../../componets/ui/TextSection"
import { Card } from "../../../componets/ui/Card";
import TickIcon from '../../../assets/icons/tick.svg'
import { useSectionContent } from "../../../hooks/useSectionContent";

export const BenefitsSection = () => {
    const content = useSectionContent('benefits');
    return (
        <section className="w-full h-auto md:h-200 bg-white flex flex-col items-center justify-center p-15 md:p-0 pb-15">
            <div className="flex flex-col items-start gap-8 md:gap-15">
                <TextSection titleKey={content.title} variant="lightBlue" subtitleClassName="max-w-165" alignment="left"/>
                <div className="gap-5 md:gap-8.75 flex flex-col md:flex-row">
                    {content.cards.map((card, index) => (
                        <Card key={index} title={card.title} description={card.description} icon={TickIcon} iconPosition="top" variant="redOutline" size="horizontal" className="shadow-soft hover:scale-105 transition-transform"/>
                    ))}
                </div>
            </div>
        </section>
    )
}