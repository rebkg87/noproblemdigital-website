import { useTranslation } from "react-i18next";
import { TextSection } from "../../../componets/ui/TextSection";
import { Card } from "../../../componets/ui/Card";
import ArrowUpIcon from '../../../assets/icons/arrow_up.svg'
import { useNavigate } from "react-router-dom";

export const ServicesSection = () =>  {
    const { t } = useTranslation();
    const labelKey = "services.label";
    const titleKey = "services.title";
    const subtitleKey = "services.subtitle";
    const cards = t("services.cards", { returnObjects: true });
    const navigate = useNavigate();
    return (
        <section className="bg-brand-secondary w-full h-360 px-24 py-28.75 flex flex-col  items-center justify-center gap-21.5">
            <TextSection labelKey={labelKey} titleKey={titleKey} subtitleKey={subtitleKey} variant="accent" contentClassName='gap-5'/>
            <div className="gap-8.75 grid grid-cols-1 md:grid-cols-3">
            {cards.map ((card, index) => (
                <Card key={index} title={card.title} description={card.description} variant="whiteOutline" size="vertical" className="text-white" icon={ArrowUpIcon} iconPosition="bottom" titleTextSize="md" descriptionTextSize="sm"         onButtonClick={() => navigate(card.href)} />
            ))}
            </div>
        </section>
    )
}