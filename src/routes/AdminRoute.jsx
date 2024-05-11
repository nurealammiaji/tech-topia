import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {

    const { user } = useContext(AuthContext);

    if (user?.role === "admin") {
        return children;
    } else {
        alert("Sorry! you aren't an admin");
    }

    return <Navigate to={"/"} replace></Navigate>
};

export default AdminRoute;