import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layout/Layout";
import { Homepage } from "../pages/homepage/Homepage";

export const router = createBrowserRouter([{
    path: "/",
    element: <Layout/>,
    children: [
        {path:"/", element: <Homepage/>}
    ]
}])