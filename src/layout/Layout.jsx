import { useEffect } from "react";
import { useTheme } from "../providers/ThemeProvider"
import { Outlet, useLocation } from "react-router-dom";
import { Header } from "../componets/common/Header";
import { Footer } from "../componets/common/Footer";

export const Layout = () => {
    const location = useLocation();

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

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <div>
            <header className="fixed top-0 w-full z-50 flex justify-center pt-5 md:pt-16.75 px-2.5 md:px-0">
                <Header/>
            </header>
            <main>
                <Outlet/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}