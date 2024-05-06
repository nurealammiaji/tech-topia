import './TodaysDealsCard.css';

const TodaysDealsCard = ({ item }) => {

    const { product_id, product_name, image_url, discount_percentage, deal_price, original_price } = item;

    return (
        <div className='card'>
            <div className='card-image'>
                <img src={image_url} alt="" />
            </div>
            <div className='card-detail'>
                <h5>{product_name}</h5>
                <p>Up to {discount_percentage}% Off</p>
            </div>
        </div>
    );
};

export default TodaysDealsCard;