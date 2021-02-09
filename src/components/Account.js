import { useState } from 'react';
import addUser from '../redux/actions/addUser';
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function Account() {

    const [editable, setEditable] = useState(false);

    const {name, email, password}  = useSelector(state => state.user);

    const [editedName, setEditedName] = useState(name);
    const [editedEmail, setEditedEmail] = useState(email);
    const [editedPassword, setEditedPassword] = useState(password);

    const dispatch = useDispatch();
    const history = useHistory()

    const handleEdit = () => setEditable(true);
    const handleLogout= () => history.push('/');


    const handleSave = (e) => {
        e.preventDefault();
        console.log(editedEmail);
        dispatch(addUser({
            name: editedName,
            email: editedEmail,
            password: editedPassword
        }));
        setEditable(false);
    }

    return (
        <div>
            <h2>Ditt konto</h2>
            {editable ? 
                <form className='main' onSubmit={handleSave}>
                    <label>NAME
                        <input type="name" defaultValue={name} onChange={ (e) => setEditedName(e.target.value) } />
                    </label>
                    <label>EMAIL
                        <input type="email" defaultValue={email} onChange={ (e) => setEditedEmail(e.target.value) } />
                    </label>
                    <label>PASSWORD
                        <input type="text" defaultValue={password} onChange={ (e) => setEditedPassword(e.target.value) } />
                    </label>
                    <button type="submit">Spara</button>
                </form>
            :
            <div className='main'>
                <label>NAME
                    <input type="name" value={name} style={{border: 'none', backgroundColor: 'transparent', cursor: 'text'}}  disabled />
                </label>
                <label>EMAIL
                    <input type="email" value={email} style={{border: 'none', backgroundColor: 'transparent', cursor: 'text'}}  disabled />
                </label>
                <label>PASSWORD
                    <input type="password" value={password} style={{border: 'none', backgroundColor: 'transparent', cursor: 'text'}} disabled />
                </label>
                <button onClick={handleEdit}>Ändra</button>
                <button onClick={handleLogout}>Logga ut</button>
            </div>
            }
        </div>
    )
}

export default Account;
