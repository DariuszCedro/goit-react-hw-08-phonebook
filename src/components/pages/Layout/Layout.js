import {Link, Outlet} from "react-router-dom";
import { useAuth } from "../../../redux/useAuth";
import { useDispatch } from "react-redux";
import {logout} from "../../../redux/operations";
import css from "./Layout.module.css";

const AuthenticatedNav = () => {
    const {user} = useAuth();
             
const dispatch = useDispatch();
const handleClick =()=> {
    dispatch(logout())
}

    return (<>
    <Link to='contacts'>Contacts</Link>
    
    <button className={css.logoutButton} onClick={handleClick}>Logout</button>
    <p>{user ? user.email : ""}</p>
    </>)
};
const UnauthenticatedNav = () => (
    <><Link to='register'>Register</Link>
    <Link to='login'>Login</Link></>
);

export default function Layout() {
    const {isLoggedIn} = useAuth();
    return <div>
        <nav className={css.navigation}>
            <Link to='/'>Home</Link>
            {isLoggedIn ? <AuthenticatedNav /> : <UnauthenticatedNav/>}
        </nav>
        <Outlet />



    </div>
}