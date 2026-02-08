export const TimelineItem = ({
    number,
    title,
    description,
    alignment = 'left',
    isLast = false,
    showTimeline = true,
    className = '',
    ...props
}) => {
    const isRight = alignment === 'right';

    const content = (
        <div className={`pt-5 pb-8 flex flex-col gap-1 font-secondary flex-1 ${isRight ? 'items-end text-right' : 'items-start text-left'}`}>
            <h4 className="text-brand-primary font-h4 text-size-h4 leading-line-h4">{title}</h4>
            <p className="text-content-primary font-b2 text-size-b2 leading-line-b2 md:max-w-65 ">{description}</p>
        </div>
    );
    if (!showTimeline) {
        return (
            <div className={`${className}`} {...props}>
                {content}
            </div>
        );
    }

    const timeline = (
        <div className="flex flex-col items-center">
            <div className="w-10 h-10 p-5 rounded-full bg-brand-secondary text-white flex items-center justify-center font-primary font-h5 text-size-h5">
                {number}
            </div>
            {!isLast && (
                <div className="w-0.5 h-full min-h-20 bg-content-secondary" />
            )}
        </div>
    );

    return (
        <div className={`flex gap-5 ${className}`} {...props}>
            {isRight ? (
                <>
                    {content}
                    {timeline}
                </>
            ) : (
                <>
                    {timeline}
                    {content}
                </>
            )}
        </div>
    );
}