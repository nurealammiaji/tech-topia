import { useEffect, useState } from 'react';
import './LatestLaunches.css';
import LatestLaunchesCard from '../LatestLaunchesCard/LatestLaunchesCard';

const LatestLaunches = () => {

    const [latestLaunches, setLatestLaunches] = useState();

    useEffect(() => {
        fetch('latest-launches.json')
            .then(res => res.json())
            .then(data => setLatestLaunches(data))
    }, [])

    return (
        <div>
            <div className='launches-container'>
                {
                    (latestLaunches) &&
                    latestLaunches.map(item => <LatestLaunchesCard key={item.product_id} item={item}></LatestLaunchesCard>)
                }
            </div>
        </div>
    );
};

export default LatestLaunches;