import './TodaysDealsCard.css';

const TodaysDealsCard = ({ item }) => {

    const { product_id, product_name, image_url, discount_percentage, deal_price, category_name, original_price } = item;

    return (
        <div className='deals-card p'>
            <div className='deals-card-image'>
                <img src={item.image_url} alt="" />
            </div>
            <div className='deals-card-detail'>
                <h5>{item.product_name}</h5>
                <p>Up to {discount_percentage}% Off</p>
                <p>{category_name}</p>
            </div>
        </div>
    );
};

export default TodaysDealsCard;