import { ScrollVelocityMarquee } from "../../componets/ui/ScrollVelocityMarquee"
import { HomepageHeroSection } from "./sections/HomepageHeroSection"
import { BenefitsSection } from "./sections/BenefitsSection"
import { ServicesSection } from "./sections/ServicesSection"
import { AboutSection } from "./sections/AboutSection"
import { ProjectsSection } from "./sections/ProjectsSection"
import { CTASection } from "./sections/CTASection"
import { useSectionContent } from "../../hooks/useSectionContent"

export const Homepage = () => {
    const content =  useSectionContent('services');
    return (
        <div>
            <HomepageHeroSection/>
            <div className="w-full h-line-h1 bg-brand-primary justify-center flex items-center overflow-hidden leading-l">
                <ScrollVelocityMarquee texts={[content.words.join('\u00A0\u00A0\u00A0|\u00A0\u00A0\u00A0')]} velocity={100} className="custom-scroll-text text-content-inverse"
                />
            </div>
            <BenefitsSection/>
            <ServicesSection/>
            <AboutSection/>
            <ProjectsSection/>
            <CTASection/>
        </div>
    )
}