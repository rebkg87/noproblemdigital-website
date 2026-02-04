import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layout/Layout";
import { Homepage } from "../pages/homepage/Homepage";
import { ContactPage } from "../pages/contact/ContactPage";
import { PortfolioPage } from "../pages/portfolio/PortfolioPage";
import { AboutPage } from "../pages/about/AboutPage";

export const router = createBrowserRouter([{
    path: "/",
    element: <Layout/>,
    children: [
        {path:"/", element: <Homepage/>},
        {path:"/contacto", element: <ContactPage/>},
        {path:"/proyectos", element: <PortfolioPage/>},
        {path:"/nosotros", element: <AboutPage/>}

    ]
}])