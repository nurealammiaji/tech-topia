import {
    createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import Home from '../pages/Home/Home';
import About from "../pages/About/About";
import Error from "../pages/Error/Error";
import Dashboard from '../pages/Dashboard/Dashboard';
import AdminDashboard from "../pages/Dashboard/AdminDashboard/AdminDashboard";
import PrivateRoute from "./PrivateRoute";
import LoginModal from "../components/LoginModal/LoginModal";
import UserDashboard from "../pages/Dashboard/UserDashboard/UserDashboard";


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
                element: <AdminDashboard></AdminDashboard>
            },
            {
                path: "user",
                element: <UserDashboard></UserDashboard>
            }
        ]
    }
])

export default Routes;