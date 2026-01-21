import { useTranslation } from "react-i18next"
import { ScrollVelocityMarquee } from "../../componets/ui/ScrollVelocityMarquee"
import { HomepageHeroSection } from "./sections/HomepageHeroSection"
import { BenefitsSection } from "./sections/BenefitsSection"

export const Homepage = () => {
    const {t} = useTranslation()
    const words = t ("services.rotating", { returnObjects: true });
    return (
        <div>
            <HomepageHeroSection/>
            <div className="w-full h-line-h1 bg-brand-primary justify-center flex items-center overflow-hidden leading-l">
                <ScrollVelocityMarquee texts={[words.join('\u00A0\u00A0\u00A0|\u00A0\u00A0\u00A0')]} velocity={100} className="custom-scroll-text text-content-inverse"
                />
            </div>
            <BenefitsSection/>
        </div>
    )
}