export const Checkbox = ({
    id, name, label, checked, onChange, disabled = false, required = false, showRequiredMark = true, className = '', labelClassName = ''
}) => {
    const checkboxId = id || name;

    return (
        <div>
            <label htmlFor={checkboxId} className={`flex items-center gap-4 select-none ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}>
                <input id={checkboxId} name={name} type="checkbox" checked={checked} onChange={onChange} disabled={disabled} required={required} className="h-5 w-5 rounded-[5px] border-2 border-content-secondary bg-gray-100 checked:bg-brand-secondary checked:accent-brand-primary focus:outline-none active:outline-none" />
                <span className={`text-size-l3 text-content-primary ${labelClassName}`}> {label}{required && <span className="text-brand-secondary ml-1">*</span>}
                </span>
            </label>
        </div>
    )
}