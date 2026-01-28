import { TextSection } from "../../../componets/ui/TextSection";
import { ProjectsGallery } from "../../../componets/ui/ProjectsGallery";
import { Button } from "../../../componets/ui/Button";
import { useSectionContent } from "../../../hooks/useSectionContent";
import { useNavigate } from "react-router-dom";

export const ProjectsSection = () => {
    const content = useSectionContent('projects');
    const navigate = useNavigate();

    return (
        <section className="bg-brand-primary w-full h-auto px-24 py-31.25 flex flex-col items-center justify-center gap-21.5">
            <TextSection labelKey={content.label} titleKey={content.title} subtitleKey={content.subtitle} variant="dark" contentClassName="gap-5"/>
            <ProjectsGallery/>
            <Button variant="primary" size="md" onClick={() => navigate('/proyectos')}>{content.buttonText}</Button>
        </section>
    )
}