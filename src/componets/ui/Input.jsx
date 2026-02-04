import { forwardRef } from 'react';

export const Input = forwardRef(({ label, type, id, name, placeholder, error, ...rest }, ref) => {
    return (
        <div className="flex flex-col gap-2.5">
            <label htmlFor={id || name} className="font-secondary text-size-l3 font-l3 text-start text-brand-primary">
                {label}
            </label>
            <input
                ref={ref}
                type={type}
                id={id || name}
                name={name}
                className="bg-white rounded-full border border-brand-secondary focus:border-2 focus:border-brand-secondary w-auto h-10 px-5 placeholder:text-size-b3 focus:outline-none placeholder:text-content-secondary placeholder:font-b3 placeholder:active:text-content-primary placeholder:font-secondary"
                placeholder={placeholder}
                {...rest}
            />
            {error && (
                <span className="text-red-500 text-sm font-secondary">{error}</span>
            )}
        </div>
    );
});

Input.displayName = 'Input';
