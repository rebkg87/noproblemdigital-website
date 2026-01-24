export const Checkbox = ({
    id, name, label, checked, onChange, disabled = false, required = false, showRequiredMark = true, className = '', labelClassName = ''
}) => {
    const checkboxId = id || name;

    return (
        <div>
            <label htmlFor={checkboxId} className={`flex items-center gap-2 select-none ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}>
                <input id={checkboxId} name={name} type="checkbox" checked={checked} onChange={onChange} disabled={disabled} required={required} className="appearance-none h-5 w-5 rounded-[5px] border-2 border-content-secondary bg-white checked:bg-brand-secondary checked:border-brand-secondary focus:outline-none cursor-pointer relative checked:after:content-['✓'] checked:after:absolute checked:after:inset-0 checked:after:flex checked:after:items-center checked:after:justify-center checked:after:text-white checked:after:text-xs checked:after:font-bold" />
                <span className={`text-size-l3 text-content-primary ${labelClassName}`}> {label}{required && <span className="text-brand-secondary max-h-125">*</span>}
                </span>
            </label>
        </div>
    )
}