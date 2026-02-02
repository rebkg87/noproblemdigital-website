import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Card } from "./Card"

export const ProjectCard = ({ title, description, tags, cover, gallery = [], alt }) => {
    const [isOpen, setIsOpen] = useState(false);

    const slides = gallery.map(src => ({ src }));

    return (
        <>
            <div className="bg-white flex flex-col shadow-soft p-[40px] justify-center rounded-[20px]">
                <div className="flex flex-col md:flex-row items-stretch justify-center gap-10">
                    <img
                        src={cover}
                        alt={alt || title}
                        className="object-cover rounded-[10px] h-auto w-125 cursor-pointer hover:opacity-90 transition-opacity"
                        onClick={() => setIsOpen(true)}
                    />
                    <Card
                        title={title}
                        description={description}
                        tags={tags}
                        variant="redOutline"
                        titleTextSize="md"
                        size="horizontalXl"
                        className="gap-5"
                    />
                </div>
            </div>

            <Lightbox
                open={isOpen}
                close={() => setIsOpen(false)}
                slides={slides}
            />
        </>
    )
}
