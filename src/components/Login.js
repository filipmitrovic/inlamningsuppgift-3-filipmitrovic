import { useState } from 'react';
import { useHistory, Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Login() {

    const [inputEmail, setInpitEmail] = useState('');
    const [inputPassword, setInpitPassword] = useState('');

    const [userNotFound, setUserNotFound] = useState('');

    const user = useSelector(state => state.user);

    const history = useHistory();

    const handleLogin = (e) => {
        e.preventDefault();
        try {
            if ((inputEmail === user.email) && (inputPassword === user.password)) {
                history.push('/account');
            } else {
                setUserNotFound('user not found');
            }
        } catch (error) {
            setUserNotFound('user not found');
        }     
    }

    return (
        <div>
            <h2>Logga in</h2>
            <form className='main' onSubmit={handleLogin}>
                <label>EMAIL
                    <input type="email" onChange={e => setInpitEmail(e.target.value)} required />
                </label>
                <label>PASSWORD
                    <input type="password" onChange={e => setInpitPassword(e.target.value)} required />
                </label>
                <button type="submit">Login</button>
            </form>
            {(userNotFound === '') ? '' :
                <div style={{margin: '10px'}}>
                    <p style={{color: 'red', fontWeight: 'bold', textAlign: 'center', fontSize: '18px'}}>{userNotFound}</p>
                    <Link to="/registration">
                        <button className='btn'>Sign me up</button>
                    </Link>
                </div>
            }
        </div>
    )
}

export default Login;
