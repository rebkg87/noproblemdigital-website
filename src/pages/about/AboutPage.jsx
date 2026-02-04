import { Card } from "../../componets/ui/Card";
import { TextSection } from "../../componets/ui/TextSection";
import { useSectionContent } from "../../hooks/useSectionContent";


export const AboutPage = () => {
    const content = useSectionContent('about-us');

    return (
        <section>
            <div className="px-2.5 md:px-31.25 pb-24 pt-35 md:pt-58.5 flex flex-col items-center justify-center gap-15 bg-brand-secondary ">
                <TextSection
                    titleKey={content.intro.title}
                    subtitleKey={content.intro.subtitle}
                    variant='accent'
                    direction="col"
                    alignment="left"
                    subtitleClassName="max-w-150"
                    contentClassName="flex-col md:flex-row gap-8.75 md:!items-center"
                />
            </div>
            <div className="bg-white px-2.5 md:px-31.25 py-12 flex flex-col gap-10z items-center justify-center pb-20">
                <TextSection
                    titleKey={content.how.title}
                    subtitleKey={content.how.subtitle}
                    variant='lightRed'
                    direction="col"
                    alignment="left"
                    subtitleClassName="max-w-149"
                    contentClassName="flex-col md:flex-row gap-8.75 md:!items-center"
                />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8.75">
                    {content.how.steps.map((step, index) => (
                        <Card key={index} title={step.title} description={step.description} icon={step.icon} iconPosition="top" variant="redOutline" size="horizontal" className=" shadow-soft justify-start "/>
                    ))}
                </div>
            </div>
            <div className="bg-brand-primary px-2.5 md:px-31.25 py-12 flex flex-col gap-2.5 ">
                    <TextSection titleKey={content.team.section1.title} subtitleKey={content.team.section1.subtitle} variant="dark" direction="col" alignment="left" subtitleClassName="max-w-170" contentClassName="gap-8.75"/>
                    <TextSection titleKey={content.team.section2.title} subtitleKey={content.team.section2.subtitle} variant="darkInverse" direction="col" alignment="right" subtitleClassName="max-w-200" contentClassName="gap-8.75"/>
                </div>
        </section>
    )
}