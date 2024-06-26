import { createContext, useEffect, useState } from "react";
import Swal from "sweetalert2";

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const [users, setUsers] = useState([]);
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('users-data.json')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    const loggedUser = localStorage.getItem('techtopia-user');

    useEffect(() => {
        setLoading(true);
        if (loggedUser) {
            setUser(JSON.parse(loggedUser));
        }
        setLoading(false);
    }, [loggedUser])

    const logout = () => {
        localStorage.removeItem('techtopia-user');
        setUser(null);
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Logged out successfully",
            showConfirmButton: false,
            timer: 1500
        });
    }

    const authInfo = {
        user,
        setUser,
        users,
        logout,
        loading,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;