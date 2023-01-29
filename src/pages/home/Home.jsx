import '../../styles/post.css';
import { Post } from './Post';
import { auth, db } from '../../config/firebase'
import { getDocs } from 'firebase/firestore'
import { collection } from 'firebase/firestore'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const Home = () => {
    const [user, isLoading] = useAuthState(auth);
    const navigate = useNavigate('')

    const [postList, setPostList] = useState([])

    const postRef = collection(db, "posts")

    const getPost = async () => {
        const data = await getDocs(postRef);
        setPostList(data.docs.map(doc => ({...doc.data(), id: doc.id})))
    }
    
    useEffect(() => {
        getPost()
    }, [])

    if(isLoading) {
        return <h1>Loading...</h1>
    }

    return (
        <div>
            {user ?
                <div className='menu'>
                    <h1 id="home-page">Home Page</h1>
                    <div className='main'>
                        <div className='posts'>
                            {postList.map((post, key) => {
                                return (
                                    <div className='post' key={key}>
                                        <Post post={post}/>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                :
                <div>
                    <h1>Log In To View Posts</h1>
                    <button style={{ border: '0', padding: "6px 31px", backgroundColor: "rgb(6, 66, 134)", borderRadius: "15px", fontSize: "17px", marginTop: "15px", cursor: "pointer" , color: "#fff" }} onClick={() => navigate('/login')}>Go To Log In Page</button>
                </div>
            }
        </div>
    )
}