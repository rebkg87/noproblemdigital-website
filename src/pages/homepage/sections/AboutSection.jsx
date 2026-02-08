import { TextSection } from "../../../componets/ui/TextSection";
import AboutImage1 from '../../../assets/images/team_andres.png'
import AboutImage2 from '../../../assets/images/team_rebeca.png'
import { useSectionContent } from "../../../hooks/useSectionContent";

export const AboutSection = () => {
    const content =  useSectionContent('about');
    return (
        <section className="w-full h-auto bg-white flex flex-col md:flex-row items-center justify-center gap-12.5 py-15 px-15 md:px-0 md:py-24 ">
            <div className="relative w-[320px] h-125 md:w-118.25 md:h-135.75 mb-[-40px] md:mb-0">
                <img
                    src={AboutImage1}
                    alt="Team member 1"
                    className="absolute top-0 left-0 w-60 h-75 md:w-65 md:h-95 object-cover rounded-tr-[40px] md:rounded-tr-[80px] z-10"
                />
                <img
                    src={AboutImage2}
                    alt="Team member 2"
                    className="absolute bottom-0 right-0 w-60 h-75 md:w-65 md:h-95 object-cover rounded-tl-[40px] md:rounded-tl-[80px] z-20 border-4 md:border-6 border-white"
                />
            </div>
            <TextSection titleKey={content.title} subtitleKey={content.subtitle} variant="lightRed" contentClassName="gap-10" subtitleClassName="max-w-165" className="max-w-158" alignment="left" />
        </section>
    )
}