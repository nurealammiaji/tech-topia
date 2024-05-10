import './Home.css';
import Hero from '../../components/Hero/Hero';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import TodaysDeals from '../../components/TodaysDeals/TodaysDeals';
import BestSelling from '../../components/BestSelling/BestSelling';
import LatestLaunches from '../../components/LatestLaunches/LatestLaunches';

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
            <SectionHeading heading={"Latest Launches"} />
            <LatestLaunches />
        </div>
    );
};

export default Home;