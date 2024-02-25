import {Link, Outlet} from "react-router-dom";
import { useAuth } from "../../redux/useAuth";
import { useDispatch } from "react-redux";
import {logout} from "../../redux/operations";

const AuthenticatedNav = () => {
const dispatch = useDispatch();
const handleClick =()=> {
    dispatch(logout())
}

    return (<>
    <Link to='contacts'>Contacts</Link>
    <p>mango@mail.com</p>
    <button onClick={handleClick}>Logout</button>
    
    </>)
};
const UnauthenticatedNav = () => (
    <><Link to='register'>Register</Link>
    <Link to='login'>Login</Link></>
);

export default function Layout() {
    const {isLoggedIn} = useAuth();
    return <div>
        <nav>
            <Link to='/'>Home</Link>
            {isLoggedIn ? <AuthenticatedNav /> : <UnauthenticatedNav/>}
        </nav>
        <Outlet />



    </div>
}