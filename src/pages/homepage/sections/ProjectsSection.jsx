import { useTranslation } from "react-i18next"
import { TextSection } from "../../../componets/ui/TextSection";
import { ProjectsGallery } from "../../../componets/ui/ProjectsGallery";
import { Button } from "../../../componets/ui/Button";

export const ProjectsSection = () => {
    const { t } = useTranslation()
    const labelKey = "projects.label";
    const titleKey = "projects.title";
    const subtitleKey = "projects.subtitle";
    const buttonText = t("projects.button-text");

    return (
        <section className="bg-brand-primary w-full h-auto px-24 py-31.25 flex flex-col items-center justify-center gap-21.5">
            <TextSection labelKey={labelKey} titleKey={titleKey} subtitleKey={subtitleKey} variant="dark" contentClassName="gap-5"/>
            <ProjectsGallery/>
            <Button variant="primary" size="md">{buttonText}</Button>

        </section>
    )
}