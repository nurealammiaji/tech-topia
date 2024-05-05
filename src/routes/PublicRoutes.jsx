import {
    createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import Home from '../pages/Home/Home';
import About from "../pages/About/About";
import Error from "../pages/Error/Error";


const PublicRoutes = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "about",
                element: <About></About>
            }
        ]
    }
])

export default PublicRoutes;