import { motion } from "motion/react";
import { useState } from "react";
import { projects } from "../../lib/projects";


export const ProjectsGallery = () => {
    const [hovered, setHoverted] = useState(null);

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8.75 w-full">
            {projects.map((project) => (
                <motion.div
                    key={project.id}
                    className="relative aspect-4/3 overflow-hidden cursor-pointer"
                    onHoverStart={() => setHoverted(project.id)}
                    onHoverEnd={() => setHoverted(null)
                    }
                    whileHover={{
                        scale: 1.05,
                        zIndex: 10,
                        transition: { duration: 0.3, ease: "easeOut" }
                    }}
                    >
                    <motion.img
                        src={project.image}
                        alt= {project.title}
                        className="w-full h-full object-cover"
                        animate={{
                            scale: hovered === project.id ? 1.15 : 1,
                        }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        />
                    <motion.div
                        className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent"
                        initial={{opacity: 0}}
                        animate={{opacity: hovered === project.id ? 1 : 0}}
                        transition={{ duration: 0.2}}
                    />
            </motion.div>
    ))
}

        </div >
    )
}