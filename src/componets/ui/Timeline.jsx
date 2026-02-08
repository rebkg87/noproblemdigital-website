import { TimelineItem } from "./TimelineItem";

export const Timeline = ({ steps = [] }) => {
    return (
        <div className="flex flex-col items-center w-full px-2.5 md:px-30 pb-20">
            {steps.map((step, index) => {
                const isLeft = step.alignment === 'left';
                const isLast = index === steps.length - 1;

                return (
                    <div key={step.number} className="grid grid-cols-[auto_1fr] md:grid-cols-[1fr_auto_1fr] w-full max-w-200 gap-5">
                        {/* Columna izquierda - solo visible en desktop */}
                        <div className="hidden md:flex justify-end">
                            {isLeft && (
                                <TimelineItem
                                    title={step.title}
                                    description={step.description}
                                    alignment="right"
                                    showTimeline={false}
                                />
                            )}
                        </div>

                        {/* Columna central - números y línea */}
                        <div className="flex flex-col items-center">
                            <div className="w-10 h-10 rounded-full bg-brand-secondary text-white flex items-center justify-center font-primary font-h5 text-size-h5 shrink-0">
                                {step.number}
                            </div>
                            <div className={"w-0.5 bg-content-secondary h-full min-h-20"} />
                        </div>

                        {/* Columna derecha - en mobile siempre muestra contenido */}
                        <div className="flex justify-start">
                            {/* Mobile: siempre muestra */}
                            <div className="md:hidden">
                                <TimelineItem
                                    title={step.title}
                                    description={step.description}
                                    alignment="left"
                                    showTimeline={false}
                                />
                            </div>
                            {/* Desktop: solo si alignment es right */}
                            {!isLeft && (
                                <div className="hidden md:block">
                                    <TimelineItem
                                        title={step.title}
                                        description={step.description}
                                        alignment="left"
                                        showTimeline={false}
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
