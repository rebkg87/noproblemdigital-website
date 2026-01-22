import { TextSection } from "../../../componets/ui/TextSection";
import { useTranslation } from "react-i18next";
import AboutImage from '../../../assets/images/placeholderimage.png'

export const AboutSection = () => {
    const { t } = useTranslation();
    const titleKey = "about.title";
    const subtitleKey = "about.subtitle";
    return (
        <section className="w-full h-auto bg-white flex flex-col md:flex-row items-center justify-center gap-12.5 py-24 ">
            <img src={AboutImage} alt="Team" className="w-118.25 h-135.75 object-contain" />
            <TextSection titleKey={titleKey} subtitleKey={subtitleKey} variant="lightRed" contentClassName="gap-10" subtitleClassName="max-w-165" className="max-w-158" alignment="left" />
        </section>
    )
}