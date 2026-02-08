import { Card } from "../../componets/ui/Card";
import { TextSection } from "../../componets/ui/TextSection";
import { Timeline } from "../../componets/ui/Timeline";
import { useSectionContent } from "../../hooks/useSectionContent"
import bgCTA from '../../assets/images/bg-cta.png'
import { useNavigate } from "react-router-dom"
import { Button } from "../../componets/ui/Button";


export const ServicesPage = () => {
    const content = useSectionContent('services-page');
    const navigate = useNavigate()
    return (
        <section>
            <div className="px-2.5 md:px-30 pb-24 pt-35 md:pt-58.5 flex flex-col items-center justify-center gap-15  bg-brand-secondary">
                <TextSection titleKey={content.hero.title} subtitleKey={content.hero.subtitle} variant="accent" direction="col" alignment="left" subtitleClassName="max-w-108.75" contentClassName="flex-col md:flex-row gap-8.75 md:!items-center" />
            </div>
            <div className="px-3.5 md:px-30 pb-24 pt-5 md:pt-25 flex flex-col items-center justify-center  md:gap-12.5 bg-white">
                <TextSection titleKey={content.whatWeDo.title} alignment="center" variant="lightRed" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center text-center">
                    {content.whatWeDo.items.map((item) => (
                        <Card key={item.key} title={item.title} description={item.description} includesLabel={item.includesLabel} includes={item.includes} footerTagline={item.footerTagline} variant="white" size="horizontalXl" titleTextSize="xl" className="gap-5" alignment="center" titleClassName="text-brand-primary " />
                    ))}
                </div>
            </div>
            <div className="px-5.5 md:px-31.25 pb-24 pt-15 md:pt-58.5 flex flex-col items-center justify-center gap-7 md:gap-15 bg-brand-primary ">
                <TextSection titleKey={content.monthly.title} subtitleKey={content.monthly.intro} variant='dark' direction="col" alignment="left" subtitleClassName="max-w-150" contentClassName="flex-col md:flex-row gap-8.75 md:!items-center" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 justify-center text-center">
                    {content.monthly.plans.map((item) => (
                        <Card key={item.key} title={item.title} tags={item.tags} description={item.description} includesLabel={item.includesLabel} includes={item.includes} footerTagline={item.footerTagline} variant="white" size="horizontalXl" titleTextSize="xl" className="gap-5" alignment="center" titleClassName="text-brand-primary " />
                    ))}
                </div>
            </div>
            <section className="px-5.5 md:px-15 md:py-25 py-5
            flex flex-col items-center justify-center md:gap-10 bg-white">
                <TextSection titleKey={content.ourProcess.title} subtitleKey={content.ourProcess.subtitle} alignment="center" variant="lightRed" contentClassName="gap-2.5" />
                <Timeline steps={content.ourProcess.steps} />
            </section>
            <section className="relative h-auto md:h-115 overflow-hidden">
                        <div
                            className="absolute inset-0 bg-cover bg-center rotate-180"
                            style={{ backgroundImage: `url(${bgCTA})` }}
                        />
                        <div className="relative px-2.5 md:px-0 flex flex-col items-center justify-center gap-8.75 pt-15 md:pt-30 pb-15 md:pb-0">
                            <TextSection variant="dark" titleKey={content.cta.title} subtitleKey={content.cta.subtitle} contentClassName="gap-5" subtitleClassName="max-w-150"/>
                            <Button onClick={() => navigate('/contacto')}>{content.cta.buttonText}</Button>
                        </div>
                    </section>
        </section>
    )
}