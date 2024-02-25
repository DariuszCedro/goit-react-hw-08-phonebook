import {useDispatch} from "react-redux";
import {register} from "../../../redux/operations";
import {useState} from "react";
import css from './Register.module.css';

export default function Register() {
const [username, setUsername] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const dispatch = useDispatch();    
const handleSubmit = e => {
    e.preventDefault();
    dispatch(register({
        name: username,
        email,
        password,
    }))
}

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h3>User name</h3>
                <input className={css.registerInput} type="text" name="name" value={username}
                onChange={e => setUsername(e.target.value)}></input>
                <h3>Email</h3>
                <input className={css.registerInput}  type="text" name="email" value={email}
                onChange={e => setEmail(e.target.value)}></input>
                <h3>Password</h3>
                <input className={css.registerInput}  type="password" name="password" value={password}
                onChange={e => setPassword(e.target.value)}></input>
                <button className={css.registerButton} type="submit" onClick={handleSubmit}>Zarejestruj</button>
            </form>
        </div>
    )
}