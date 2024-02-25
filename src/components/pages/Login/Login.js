import {useDispatch} from "react-redux";
import {login} from "../../../redux/operations";
import {useState} from "react";
import css from "./Login.module.css";

export default function Login() {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const dispatch = useDispatch();    
const handleSubmit = e => {
    e.preventDefault();
    dispatch(login({
       
        email,
        password,
    }))
}

    return (
        <div>
            <form onSubmit={handleSubmit}>
                
                <h3>Email</h3>
                <input className={css.loginInput} type="text" name="email" value={email}
                onChange={e => setEmail(e.target.value)}></input>
                <h3>Password</h3>
                <input className={css.loginInput} type="password" name="password" value={password}
                onChange={e => setPassword(e.target.value)}></input>
                <button className={css.loginButton} type="submit" onClick={handleSubmit}>Zaloguj</button>
            </form>
        </div>
    )
}