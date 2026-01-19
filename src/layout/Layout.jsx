import { useEffect } from "react";
import { useTheme } from "../providers/ThemeProvider"
import { Outlet } from "react-router-dom";

export const Layout = () => {
    /* const { darkMode } = useTheme();

    useEffect(()=> { 
        if (darkMode) {
            document.body.classList.add('bg-primary')
            document.body.classList.remove('bg-white');
        } else {
            document.body.classList.add('bg-white');
            document.body.classList.remove('bg-primary')

        }
    },[darkMode]) */

    return (
        <div>
            <header className="sticky top-0 w-full z-50">
                Header
            </header>
            <main>
                <Outlet/>
            </main>
            <footer>
                Footer
            </footer>
        </div>
    )
}