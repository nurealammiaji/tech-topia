import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);

    const location = useLocation();

    if (loading) {
        console.log("Loading...");
        return <div style={{ textAlign: "center" }} >
            <h1>Loading...</h1>
        </div>;
    }

    if (user) {
        return children;
    }

    return <Navigate to={"/login"} state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;