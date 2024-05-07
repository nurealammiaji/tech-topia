import PrimaryButton from '../PrimaryButton/PrimaryButton';
import './BestSellingCard.css';

const BestSellingCard = ({ item }) => {

    const { product_id, product_name, image_url, price, rating } = item;

    return (
        <div className='selling-card'>
            <div className='selling-card-image'>
                <img src={image_url} alt="" />
            </div>
            <div className='selling-card-detail'>
                <h3>{product_name}</h3>
                <p>Product Details</p>
                <div className='selling-card-action'>
                    <h3>$ {price}</h3>
                    <PrimaryButton name={"Buy Now"} />
                </div>
            </div>
        </div>
    );
};

export default BestSellingCard;