import './NewsLetter.css';

const NewsLetter = () => {
    return (
        <div>
            <div className='news-letter'>
                <input type='email' placeholder='Enter your email here' />
                <button>Subscribe</button>
            </div>
        </div>
    );
};

export default NewsLetter;