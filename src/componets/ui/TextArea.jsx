import { forwardRef } from 'react';

export const TextArea = forwardRef(({ label, id, name, placeholder, className, error, ...rest }, ref) => {
    return (
        <div className="flex flex-col gap-2.5">
            <label htmlFor={id || name} className="font-secondary text-size-l3 font-l3 text-start text-brand-primary">
                {label}
            </label>
            <textarea
                ref={ref}
                id={id || name}
                name={name}
                className={`bg-white rounded-[10px] border border-brand-secondary focus:border-2 focus:border-brand-secondary px-5 py-3.75 placeholder:text-size-b3 focus:outline-none placeholder:text-content-secondary placeholder:font-b3 placeholder:leading-line-b3 placeholder:active:text-content-primary placeholder:font-secondary ${className}`}
                placeholder={placeholder}
                {...rest}
            />
            {error && (
                <span className="text-red-500 text-sm font-secondary">{error}</span>
            )}
        </div>
    );
});

TextArea.displayName = 'TextArea';
