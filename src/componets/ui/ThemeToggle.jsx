import { useTheme } from "../../providers/ThemeProvider"

export const ThemeToggle = () => {
    const { darkMode, toggleDarkMode } = useTheme()
    return (
        <button onClick={toggleDarkMode} aria-label="Toggle theme" className=" relative w-13.75 h-8.5 rounded-full border-7 border-brand-primary transition-colors">
            <span className={`absolute -translate-y-1/2 w-3.75 h-3.75 rounded-full transition-all ${darkMode ? 'left-1 bg-brand-primary' : 'right-1 bg-brand-secondary' }`}/>
        </button>
    )
}