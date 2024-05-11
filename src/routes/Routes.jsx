import {
    createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import Error from "../pages/Error/Error";
import Home from '../pages/Home/Home';
import About from "../pages/About/About";
import Services from '../pages/Services/Services';
import Contact from '../pages/Contact/Contact';
import Dashboard from '../pages/Dashboard/Dashboard';
import UserDashboard from "../pages/Dashboard/UserDashboard/UserDashboard";
import AdminDashboard from "../pages/Dashboard/AdminDashboard/AdminDashboard";
import PrivateRoute from "./PrivateRoute";
import LoginModal from "../components/LoginModal/LoginModal";
import AdminRoute from "./AdminRoute";
import UserRoute from "./UserRoute";


const Routes = createBrowserRouter([
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
            },
            {
                path: "services",
                element: <Services></Services>
            },
            {
                path: "contact",
                element: <Contact></Contact>
            },
            {
                path: "login",
                element: <LoginModal></LoginModal>
            }
        ]
    },
    {
        path: "/dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: "admin",
                element: <AdminRoute><AdminDashboard></AdminDashboard></AdminRoute>
            },
            {
                path: "user",
                element: <UserRoute><UserDashboard></UserDashboard></UserRoute>
            }
        ]
    }
])

export default Routes;