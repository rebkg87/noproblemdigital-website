import { useTranslation } from "react-i18next";
import { TextSection } from "../../../componets/ui/TextSection"
import { Card } from "../../../componets/ui/Card";
import TickIcon from '../../../assets/icons/tick.svg'
import { useSectionContent } from "../../../hooks/useSectionContent";

export const BenefitsSection = () => {
    const content = useSectionContent('benefits');
    return (
        <section className="w-full h-237.5 bg-white flex flex-row items-center justify-center gap-15 ">
            <TextSection titleKey={content.title} subtitleKey={content.subtitle} variant="lightBlue" contentClassName=" gap-10" subtitleClassName="max-w-165" alignment="left"/>
            <div className="gap-8.75 flex flex-col">
            {content.cards.map ((card, index) => (
                <Card key={index} title={card.title} description={card.description} icon={TickIcon} iconPosition="top" variant="redOutline" size="horizontal"/>
            ))
            }
            </div>

        </section>
    )
}