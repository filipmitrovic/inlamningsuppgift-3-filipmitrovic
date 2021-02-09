import { useState } from 'react'
import addUser from '../redux/actions/addUser';
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function Registration() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const history = useHistory();


    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addUser({
            name: name,
            email: email,
            password: password
        }));
        history.push('/account');
    }

    return (
        <div>
            <h2>Registrera dig för ett konto</h2>
            <form className='main' onSubmit={handleSubmit}>
                <label>NAME
                    <input type="name" onChange={e => setName(e.target.value)} required />
                </label>
                <label>EMAIL
                    <input type="email" onChange={e => setEmail(e.target.value)} required />
                </label>
                <label>PASSWORD
                    <input type="password" onChange={e => setPassword(e.target.value)} required />
                </label>
                <button type="submit">Sign me up!</button>
            </form>
        </div>
    )
}

export default Registration;
