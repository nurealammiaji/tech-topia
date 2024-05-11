import { Link } from 'react-router-dom';
import './Navbar.css';
import SearchBar from '../SearchBar/SearchBar';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const Navbar = () => {

    const { user, logout } = useContext(AuthContext);

    const logoutHandler = () => {
        logout();
    }

    return (
        <div>
            <div className='navbar'>
                <div className='log-menu'>
                    <div style={{ flexGrow: 3 }}>
                        <div>
                            <p>Location: Dhaka, Bangladesh</p>
                        </div>
                    </div>
                    <div style={{ flexGrow: 3 }}>
                        <div className='log-links'>
                            {
                                (user) ?
                                    <>
                                        <h5>{user?.name}</h5>
                                        <p> || </p>
                                        <button onClick={logoutHandler}>Logout</button>
                                    </> :
                                    <>
                                        <Link to={"/login"}><button>Login</button></Link>
                                        <p> || </p>
                                        <button>Register</button>
                                    </>
                            }
                        </div>
                    </div>
                    <div>
                        <p>Helpline: +880123456789 (24/7)</p>
                    </div>
                </div>
                <nav className='navigation'>
                    <div >
                        <h3 className='brand'>
                            <Link to={"/"}>TechTopia™</Link>
                        </h3>
                    </div>
                    <div>
                        <ul className='menu'>
                            <li>
                                <Link to={"/"}>Home</Link>
                            </li>
                            <li>
                                <Link to={"/about"}>About</Link>
                            </li>
                            <li id='services'>
                                <Link to={"/services"}>Services</Link>
                                <ul className='services-menu'>
                                    <li id='services1'>
                                        <Link to={"/service1"}>Service 1</Link>
                                        <ul className='services-sub-menu'>
                                            <li>
                                                <Link to={"/service11"}>Service 1.1</Link>
                                            </li>
                                            <li>
                                                <Link to={"/service12"}>Service 1.2</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link to={"/service2"}>Service 2</Link>
                                    </li>
                                    <li>
                                        <Link to={"/service3"}>Service 3</Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link to={"/contact"}>Contact</Link>
                            </li>
                            {
                                (user?.role === "admin") &&
                                <li>
                                    <Link to={"/dashboard/admin"}>Dashboard</Link>
                                </li>
                            }
                            {
                                (user?.role === "user") &&
                                <li>
                                    <Link to={"/dashboard/user"}>Dashboard</Link>
                                </li>
                            }

                        </ul>
                    </div>
                    <SearchBar />
                </nav>
            </div>
            <br /><br />
        </div>
    );
};

export default Navbar;