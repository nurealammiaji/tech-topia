import { useEffect, useState } from 'react';
import './BestSelling.css';
import BestSellingCard from '../BestSellingCard/BestSellingCard';

const BestSelling = () => {

    const [bestSelling, setBestSelling] = useState();

    useEffect(() => {
        fetch('best-selling.json')
            .then(res => res.json())
            .then(data => setBestSelling(data))
    }, [])

    return (
        <div>
            <div className='selling-container'>
                {
                    (bestSelling) &&
                    bestSelling.map(item => <BestSellingCard key={item.product_id} item={item}></BestSellingCard>)
                }
            </div>
        </div>
    );
};

export default BestSelling;