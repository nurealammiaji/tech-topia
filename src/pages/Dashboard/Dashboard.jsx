import { Link, Outlet } from 'react-router-dom';
import './Dashboard.css';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const Dashboard = () => {

    const { user } = useContext(AuthContext);

    return (
        <div className='dashboard'>
            <div className='dash-header'>
                <div className='dash-brand'>
                    {
                        (user?.role === 'admin') &&
                        <Link to={"/dashboard/admin"}>TechTopia</Link>
                    }
                    {
                        (user?.role === 'user') &&
                        <Link to={"/dashboard/user"}>TechTopia</Link>
                    }
                </div>
                <div className='dash-title'>
                    <h2>{user?.role === "admin" && 'Admin Dashboard' || user?.role === "user" && 'User Dashboard'}</h2>
                </div>
            </div>
            <div className='dash-body'>
                <div className='dash-sidebar'>
                    {
                        (user?.role === 'admin') &&
                        <ul>
                            <li>
                                <Link to={"/dashboard/admin"}>Admin Home</Link>
                            </li>
                            <li>
                                <Link to={"/services"}>Manage Services</Link>
                            </li>
                            <li>
                                <Link to={"/"}>Manage Users</Link>
                            </li>
                        </ul>
                    }
                    {
                        (user?.role === 'user') &&
                        <ul>
                            <li>
                                <Link to={"/dashboard/user"}>User Home</Link>
                            </li>
                            <li>
                                <Link to={"/services"}>Purchased Services</Link>
                            </li>
                            <li>
                                <Link to={"/"}>Add Reviews</Link>
                            </li>
                        </ul>
                    }
                    <div>
                        <p>---------------</p>
                    </div>
                    <ul>
                        <li>
                            <Link to={"/"}>Home</Link>
                        </li>
                        <li>
                            <Link to={"/"}>About</Link>
                        </li>
                        <li>
                            <Link to={"/"}>Services</Link>
                        </li>
                        <li>
                            <Link to={"/"}>Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className='dash-area'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;