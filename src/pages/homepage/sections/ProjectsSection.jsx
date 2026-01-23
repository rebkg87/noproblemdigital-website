import { useTranslation } from "react-i18next"
import { TextSection } from "../../../componets/ui/TextSection";
import { ProjectsGallery } from "../../../componets/ui/ProjectsGallery";
import { Button } from "../../../componets/ui/Button";
import { useSectionContent } from "../../../hooks/useSectionContent";

export const ProjectsSection = () => {
    const content = useSectionContent('projects');

    return (
        <section className="bg-brand-primary w-full h-auto px-24 py-31.25 flex flex-col items-center justify-center gap-21.5">
            <TextSection labelKey={content.label} titleKey={content.title} subtitleKey={content.subtitle} variant="dark" contentClassName="gap-5"/>
            <ProjectsGallery/>
            <Button variant="primary" size="md">{content.buttonText}</Button>

        </section>
    )
}