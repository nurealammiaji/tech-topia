import './LatestLaunchesCard.css';

const LatestLaunchesCard = ({ item }) => {

    const { product_id, product_name, image_url, category, price } = item;

    return (
        <div className='launches-card'>
            <div className='launches-card-image'>
                <img src={image_url} alt="" />
            </div>
            <div className='launches-card-detail'>
                <h5>{product_name}</h5>
                <p>$ {price}</p>
                <p>{category}</p>
            </div>
        </div>
    );
};

export default LatestLaunchesCard;