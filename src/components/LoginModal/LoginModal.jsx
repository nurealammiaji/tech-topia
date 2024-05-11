import { Link, useLocation, useNavigate } from 'react-router-dom';
import './LoginModal.css';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';

const LoginModal = () => {

    const { setUser, users } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    const login = (username, password) => {
        const matchedUser = users.find(user => user.username === username && user.password === password);
        if (matchedUser) {
            localStorage.setItem('techtopia-user', JSON.stringify(matchedUser));
            setUser(matchedUser);
            navigate(from, { replace: true });
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Logged in successfully",
                showConfirmButton: false,
                timer: 1500
            });
        }
        else {
            navigate("/login", { replace: true })
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Username and password didn't match",
                showConfirmButton: false,
                timer: 1500
            });
        }
    }

    const loginHandler = (event) => {
        event.preventDefault();
        const form = event.target;
        const username = form.username.value;
        const password = parseInt(form.password.value);
        if (username && password) {
            console.log(username, password);
            login(username, password);
        }
        else {
            Swal.fire({
                position: "center",
                icon: "warning",
                title: "Please enter username and password",
                showConfirmButton: false,
                timer: 1500
            });
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
                <div>
                    <button type='submit'>Login</button>
                </div>
                <p>Forgot Password? <Link to='/forgot'>Reset Now</Link></p>
            </form>
        </div>
    );
};

export default LoginModal;