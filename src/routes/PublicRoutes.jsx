import {
    createBrowserRouter,
} from "react-router-dom";
import App from "../App";


const PublicRoutes = createBrowserRouter([
    {
        path: "/",
        element: <App></App>
    }
])

export default PublicRoutes;