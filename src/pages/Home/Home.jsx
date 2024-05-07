import Hero from '../../components/Hero/Hero';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import TodaysDeals from '../../components/TodaysDeals/TodaysDeals';
import './Home.css';
import BestSelling from '../../components/BestSelling/BestSelling';

const Home = () => {
    return (
        <div>
            <Hero />
            <br /><br />
            <SectionHeading heading={"Deals of the Day"} />
            <TodaysDeals />
            <br /><br />
            <SectionHeading heading={"Best Selling Products"} />
            <BestSelling />
            <br /><br />
        </div>
    );
};

export default Home;