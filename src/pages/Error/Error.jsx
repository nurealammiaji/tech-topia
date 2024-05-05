import { Link, useRouteError } from 'react-router-dom';
import './Error.css';
import MainButton from '../../components/MainButton/MainButton';

const Error = () => {

    const error = useRouteError();
    console.log(error);

    return (
        <div className='error'>
            <br /><br />
            <div className='error-status'>
                <h3>{error.status}</h3>
                <h3 id='error-divider'>||</h3>
                <h3>{error.statusText}</h3>
            </div>
            <h4 className='error-data'>{error.data}</h4>
            <br /><br />
            <Link to={"/"}>
                <MainButton name={"Back to Home"} />
            </Link>
        </div>
    );
};

export default Error;