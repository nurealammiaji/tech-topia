import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";

const UserRoute = ({ children }) => {

    const { user } = useContext(AuthContext);

    if (user?.role === "user") {
        return children;
    } else {
        alert("Sorry! you aren't an user");
    }

    return <Navigate to={"/"} replace></Navigate>

};

export default UserRoute;