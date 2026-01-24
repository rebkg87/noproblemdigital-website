import { motion } from 'motion/react';
import { useState } from "react"
import ChevronIcon from "../../assets/icons/chevronDown.svg"

const variants = {
    default: {
        container: 'bg-white border border-brand-secondary text-brand-primary',
        item: 'text-brand-primary hover:bg-blue-100 border-t border-t-content-secondary',
    },
    ghost: {
        container: 'bg-transparent border border-transparent hover:border-brand-secondary',
        item: 'text-brand-primary hover:bg-state-hover-primary border-t border-t-content-secondary',
    },
}

export const Dropdown = ({
    trigger = "Dropdown Button",
    items = [],
    onButtonClick,
    variant = "default",
    className = "",
    closeOnClick = true,
    value,
    onChange,
    error,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const colors = variants[variant];

    const handleButtonClick = (item) => {
        onChange?.(item);
        onButtonClick?.(item);
        if (closeOnClick) {
            setIsOpen(false);
        }
    }

    return (
        <div className={`flex flex-col gap-1 ${className}`}>
            <div className="relative">
                {isOpen && (
                    <div
                        onClick={() => setIsOpen(false)}
                        className='fixed inset-0 z-40'
                    />
                )}
                <div className={`rounded-[10px] overflow-hidden z-50 ${colors.container}`}>
                    <motion.button
                        type="button"
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex w-full items-center justify-between gap-2 px-4 pr-6 py-3.25 font-secondary text-size-l3 focus:outline-none whitespace-nowrap "
                        whileTap={{ scale: 0.98 }}
                    >
                        <span className="text-brand-primary">
                            {value || trigger}
                        </span>
                        <img src={ChevronIcon} alt="Arrow" className={`block w-4 h-4 shrink-0transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                    </motion.button>

                    {isOpen && (
                        <div className="min-w-0 absolute top-full left-0 w-full z-50 bg-white rounded-b-[10px] border border-t-0 border-brand-secondary">
                            {items.map((item, index) => (
                                <motion.button
                                    type="button"
                                    key={item.id || index}
                                    onClick={() => handleButtonClick(item.label || item)}
                                    className={`w-full px-4 py-2 text-left font-secondary text-size-l3 transition-colors overflow-hidden whitespace-nowrap ${colors.item}`}
                                    whileHover={{ x: 4 }}
                                    transition={{ duration: 0.15 }}
                                >
                                    {item.label || item}
                                </motion.button>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            {error && (
                <span className="text-red-500 text-sm font-secondary">{error}</span>
            )}
        </div>
    )
}
