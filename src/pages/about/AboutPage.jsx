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
            <div className="bg-brand-primary px-2.5 md:px-31.25 py-5 flex flex-col gap-2.5 md:gap-30 md:py-30 ">
                    <TextSection titleKey={content.team.section1.title} subtitleKey={content.team.section1.subtitle} variant="dark" direction="col" alignment="left" subtitleClassName="max-w-170" contentClassName="gap-8.75"/>
                    <TextSection titleKey={content.team.section2.title} subtitleKey={content.team.section2.subtitle} variant="darkInverse" direction="col" alignment="right" subtitleClassName="max-w-200" contentClassName="gap-8.75"/>
                </div>
        </section>
    )
}