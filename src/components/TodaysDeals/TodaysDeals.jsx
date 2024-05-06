import { useEffect, useState } from 'react';
import './TodaysDeals.css';
import TodaysDealsCard from '../TodaysDealsCard/TodaysDealsCard';

const TodaysDeals = () => {

    const [todaysDeals, setTodaysDeals] = useState();

    useEffect(() => {
        fetch('todays-deals.json')
            .then(res => res.json())
            .then(data => setTodaysDeals(data))
    }, [])

    return (
        <div>
            <div className='deals-container'>
                {
                    (todaysDeals) &&
                    todaysDeals.map(item => <TodaysDealsCard key={item.product_id} item={item}></TodaysDealsCard>)
                }
            </div>
        </div>
    );
};

export default TodaysDeals;