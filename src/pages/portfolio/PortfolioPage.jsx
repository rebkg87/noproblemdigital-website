import { useState } from "react";
import { Dropdown } from "../../componets/ui/Dropdown";
import { ProjectCard } from "../../componets/ui/ProjectCard";
import { TextSection } from "../../componets/ui/TextSection";
import { useSectionContent } from "../../hooks/useSectionContent"

export const PortfolioPage = () => {
    const content = useSectionContent('portfolio');
    const [activeFilter, setActiveFilter] = useState("");

    const filteredProjects = content.projects.filter(project =>
        !activeFilter || activeFilter === "Todos" ? true : project.tags.includes(activeFilter)
    );

    return (
        <section>
            <div className="px-31.25 pb-24 pt-58.5 flex flex-col items-center justify-center gap-15 bg-brand-primary ">
                <TextSection titleKey={content.title} subtitleKey={content.subtitle} variant='dark' direction="row" alignment="left" subtitleClassName="max-w-150" contentClassName="gap-8.75 !items-center" />
            </div>
            <div className="bg-white px-[130px] py-[48px] flex flex-col gap-8 items-center justify-center">
                <Dropdown
                    trigger={content.dropdown.label}
                    items={content.dropdown.options}
                    value={activeFilter}
                    onChange={setActiveFilter}
                    className="w-[220px]"
                />
                {filteredProjects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        tags={project.tags}
                        cover={project.cover}
                        gallery={project.gallery}
                        alt={project.alt}
                    />
                ))}
            </div>
        </section>
    )
}
