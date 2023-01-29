import '../styles/navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../config/firebase';
import { signOut } from 'firebase/auth';
import { useState } from 'react';

export const Navbar = () => {
    const [user] = useAuthState(auth);
    const [showLinks, setShowLinks] = useState(false)

    const navigate = useNavigate('')

    const signOutUser = async () => {
        await signOut(auth);
        navigate('/login')
    }

    return (
        <div className="navbar">
            <div className={`links ${showLinks ? "show" : "hide"}`} onClick={() => setShowLinks(false)}>
                <Link to='/'>Home</Link>
                {user ? <Link to='/createpost'>Create Post</Link> : <Link to='/login'>Login</Link>}
                <Link to='/facts'>Facts</Link>
                <Link to='/profile'>Profile</Link>
            </div>
            <div className={`hamburger ${showLinks ? "active" : "not-active"}`} onClick={() => setShowLinks(!showLinks)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="profile">
                <h2 onClick={() => navigate('/profile')}>{user?.displayName ? user?.displayName : "User"}</h2>
                <img src={user?.photoURL ? user?.photoURL : "https://t3.ftcdn.net/jpg/03/39/45/96/360_F_339459697_XAFacNQmwnvJRqe1Fe9VOptPWMUxlZP8.jpg"} alt={user?.displayName}/>
                {user && <button onClick={signOutUser} id="logOut">Log Out</button>}
            </div>
        </div>
    )
}