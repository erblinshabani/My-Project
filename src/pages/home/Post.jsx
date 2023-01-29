import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { useState } from "react";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth"
import { auth, db } from "../../config/firebase"

export const Post = (props) => {
    const post = props.post

    const [user] = useAuthState(auth);

    const [likesAmount, setLikesAmount] = useState(0)

    const likesRef = collection(db, "likes");

    const likesDoc = query(likesRef, where("postId", "==", post.id));

    const getLikes = async () => {
        const data = await getDocs(likesDoc);
        setLikesAmount(data.docs.length)
    }

    useEffect(() => {
        getLikes()
    }, [])

    const addLikes = async () => {
        await addDoc(likesRef, { userId: user?.uid, postId: post.id });
        
        const data = await getDocs(likesDoc);
        setLikesAmount(data.docs.length)
    }

    return (
        <div className="newPost">
            <div className="title">
                <h1>{post.title}</h1>
            </div>
            <div className="body">
                <h3>{post.description}</h3>
            </div>

            <div className="footer">
                <h3>@{post.username}</h3>
                <button onClick={addLikes}>&#128151;</button>
                <h4>Likes: {likesAmount}</h4>
            </div>
        </div>
    )
}