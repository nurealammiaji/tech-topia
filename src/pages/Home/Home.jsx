import Hero from '../../components/Hero/Hero';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import TodaysDeals from '../../components/TodaysDeals/TodaysDeals';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Hero />
            <br /><br />
            <SectionHeading heading={"Deals of the Day"} />
            <TodaysDeals />
        </div>
    );
};

export default Home;