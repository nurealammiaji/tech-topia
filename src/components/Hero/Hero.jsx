import { Link } from 'react-router-dom';
import './Hero.css';
import PrimaryButton from '../PrimaryButton/PrimaryButton';

const Hero = () => {
    return (
        <div className='hero'>
            <div className='hero-info'>
                <h1>TechTopia</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Praesent nec dui euismod, efficitur leo eget, egestas
                    lectus.
                </p>
                <br /><br />
                <Link to={"/about"}>
                    <PrimaryButton name={"Learn More"} />
                </Link>
            </div>
            <div className='hero-img'>
                <img src="https://partnerize.com/wp-content/uploads/2023/06/homepage-2023-at-your-service.png" alt="" />
            </div>
        </div>
    );
};

export default Hero;