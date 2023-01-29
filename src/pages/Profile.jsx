import { auth } from "../config/firebase";
import { useAuthState } from 'react-firebase-hooks/auth';
import '../styles/Profile.css'

export const Profile = () => {
    const [user] = useAuthState(auth)

    console.log(user)
    
    return (
        <div>
            <h1>Profile</h1>
            <div className="userProfile">
                <img src={user?.photoURL} alt={user?.displayName} />
                <div className="userProfileData">
                    <h2>{user?.displayName}</h2>
                    <p>{user?.metadata.lastSignInTime}</p>
                </div>
            </div>
        </div>
    )
}