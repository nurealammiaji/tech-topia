import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div>
                <h3 className='brand'>
                    <Link to={"/"}>TechTopia</Link>
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
        </nav>
    );
};

export default Navbar;