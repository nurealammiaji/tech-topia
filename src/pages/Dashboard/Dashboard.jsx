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
                        <Link to={"/dashboard/admin"}>TechTopia™</Link>
                    }
                    {
                        (user?.role === 'user') &&
                        <Link to={"/dashboard/user"}>TechTopia™</Link>
                    }
                </div>
                <div className='dash-title'>
                    <h2>{user?.role === "admin" && 'Admin Dashboard' || user?.role === "user" && 'User Dashboard'}</h2>
                </div>
            </div>
            <div className='dash-body'>
                <div className='dash-sidebar'>
                    <div className='dash-divider'>
                        <p>Welcome, {user?.name} !</p>
                    </div>
                    {
                        (user?.role === 'admin') &&
                        <ul className='dash-links'>
                            <li>
                                <Link to={"/dashboard/admin"}>Admin Home</Link>
                            </li>
                            <li>
                                <Link to={"/dashboard/manage-services"}>Manage Services</Link>
                            </li>
                            <li>
                                <Link to={"/dashboard/manage-users"}>Manage Users</Link>
                            </li>
                        </ul>
                    }
                    {
                        (user?.role === 'user') &&
                        <ul className='dash-links'>
                            <li>
                                <Link to={"/dashboard/user"}>User Home</Link>
                            </li>
                            <li>
                                <Link to={"/dashboard/my-services"}>My Services</Link>
                            </li>
                            <li>
                                <Link to={"/dashboard/my-reviews"}>My Reviews</Link>
                            </li>
                        </ul>
                    }
                    <div className='dash-divider'>
                        <p>-------------------------</p>
                    </div>
                    <ul className='dash-links'>
                        <li>
                            <Link to={"/"}>Home</Link>
                        </li>
                        <li>
                            <Link to={"/about"}>About</Link>
                        </li>
                        <li>
                            <Link to={"/services"}>Services</Link>
                        </li>
                        <li>
                            <Link to={"/contact"}>Contact</Link>
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