import { auth,provider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import '../styles/login.css'

export const Login = () => {
    const navigate = useNavigate()
    
    const signInWithGoogle = async () => {
        await signInWithPopup(auth,provider)
        navigate('/profile')
    }

    return (
        <div className="logInForm">
            <h1>Log In</h1>
            <button onClick={signInWithGoogle}>Sign In With Google</button>
        </div>
    )
}