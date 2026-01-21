import { useTranslation } from "react-i18next";
import { TextSection } from "../../../componets/ui/TextSection"
import { Card } from "../../../componets/ui/Card";
import TickIcon from '../../../assets/icons/tick.svg'

export const BenefitsSection = () => {
    const { t } = useTranslation();
    const titleKey = "benefits.title";
    const subtitleKey = "benefits.subtitle";
    const cards = t("benefits.cards", { returnObjects: true });
    return (
        <section className="w-full h-237.5 bg-white flex flex-row items-center justify-center gap-15 ">
            <TextSection titleKey={titleKey} subtitleKey={subtitleKey} variant="light" className=" gap-10" subtitleClassName="max-w-165" alignment="left"/>
            <div className="gap-8.75 flex flex-col">
            {cards.map ((card, index) => (
                <Card key={index} title={card.title} description={card.description} icon={TickIcon} iconPosition="top" variant="redOutline" size="horizontal"/>
            ))
            }
            </div>

        </section>
    )
}