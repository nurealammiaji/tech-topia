import './PrimaryButton.css';

const PrimaryButton = ({ name }) => {
    return (
        <button className='main-btn'>
            {name}
        </button>
    );
};

export default PrimaryButton;