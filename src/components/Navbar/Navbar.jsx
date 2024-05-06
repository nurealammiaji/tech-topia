import { Link } from 'react-router-dom';
import './Navbar.css';
import SearchBar from '../SearchBar/SearchBar';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='log-menu'>
                <div style={{ flexGrow: 3 }}>
                    <div>
                        <p>Location: Dhaka, Bangladesh</p>
                    </div>
                </div>
                <div style={{ flexGrow: 3 }}>
                    <div className='log-links'>
                        <button>Login</button>
                        <p> || </p>
                        <button>Register</button>
                    </div>
                </div>
                <div>
                    <p>Helpline: +880123456789 (24/7)</p>
                </div>
            </div>
            <nav className='navigation'>
                <div style={{ flexGrow: 3 }}>
                    <h3 className='brand'>
                        <Link to={"/"}>TechTopia</Link>
                    </h3>
                </div>
                <div style={{ flexGrow: 3 }}>
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
                                            <Link to={"/service1"}>Service 1.1</Link>
                                        </li>
                                        <li>
                                            <Link to={"/service2"}>Service 1.2</Link>
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
                    </ul>
                </div>
                <SearchBar />
            </nav>
        </div>
    );
};

export default Navbar;