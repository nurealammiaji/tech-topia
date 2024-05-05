import './MainButton.css';

const Button = ({ name }) => {
    return (
        <button className='main-btn'>
            {name}
        </button>
    );
};

export default Button;