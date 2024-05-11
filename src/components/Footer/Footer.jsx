import './Footer.css';
import { Link } from 'react-router-dom';
import NewsLetter from '../NewsLetter/NewsLetter';
import 'primeicons/primeicons.css';

const Footer = () => {

    return (
        <div>
            <br /><br />
            <div className='footer'>
                <nav className='footer-area'>
                    <div >
                        <h3 className='footer-brand'>
                            <Link to={"/"}>TechTopia™</Link>
                        </h3>
                        <p>Providing Joy of Shopping</p>
                    </div>
                    <div className='newsletter'>
                        <p>Get All The Exciting Offers</p>
                        <NewsLetter />
                    </div>
                    <div className='follow-us'>
                        <div>
                            <p>Follow Us</p>
                        </div>
                        <div className='follow-btn'>
                            <a href='#'><i className="pi pi-facebook" style={{ color: 'blue', fontSize: '2rem' }}></i></a>
                            <a href='#'><i className="pi pi-linkedin" style={{ color: 'royalblue', fontSize: '2rem' }}></i></a>
                            <a href='#'><i className="pi pi-twitter" style={{ color: 'black', fontSize: '2rem' }}></i></a>
                        </div>
                    </div>
                </nav>
                <div className='copyright'>
                    <div>
                        <p>Copyright (c) 2024, All rights reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;