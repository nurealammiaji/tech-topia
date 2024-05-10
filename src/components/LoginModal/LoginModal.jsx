import { Link, useLocation, useNavigate } from 'react-router-dom';
import './LoginModal.css';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const LoginModal = () => {

    const { setUser, users } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";
    console.log(location);

    const login = (username, password) => {
        const matchedUser = users.find(user => user.username === username && user.password === password);
        if (matchedUser) {
            localStorage.setItem('techtopia-user', JSON.stringify(matchedUser));
            setUser(matchedUser);
            navigate(from, {replace: true});
            return true;
        } else {
            return false;
        }
    }

    const loginHandler = (event) => {
        event.preventDefault();
        const form = event.target;
        const username = form.username.value;
        const password = parseInt(form.password.value);
        if (username && password) {
            login(username, password);
        }
        else {
            return;
        }
    }

    return (
        <div>
            <form onSubmit={loginHandler} className='login-form'>
                <div>
                    <input type='text' name='username' placeholder='Enter your username' />
                </div>
                <div>
                    <input type='password' name='password' placeholder='Enter your password' />
                </div>
                <input type='submit' value='Login' />
                <p>Don't have an account? <Link to='/forgot'>Create an account</Link></p>
            </form>
        </div>
    );
};

export default LoginModal;