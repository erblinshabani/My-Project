import '../../styles/form.css';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { addDoc, collection } from 'firebase/firestore';
import { auth, db } from '../../config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

export const CreateForm = () => {
    const schema = yup.object().shape({
        title: yup.string().required("You Must Add A Tittle"),
        description: yup.string().required("You Must Add A Description")
    })

    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(schema)
    })

    const navigate = useNavigate('')
    const [user] = useAuthState(auth)

    const postRef = collection(db, 'posts')

    const submitForm = async (data) => {
        await addDoc(postRef, {
            ...data,
            username: user?.displayName,
            userId: user?.uid
        })
        navigate('/')
    }

    return (
        <div className="form">
            <form action="#" onSubmit={handleSubmit(submitForm)}>
                <input placeholder='Title...' {...register('title')}/>
                <p className='error'>{errors.title?.message}</p>
                <textarea cols="39" rows="3" placeholder='Description...' {...register('description')}/>
                <p className='error'>{errors.description?.message}</p>
                <input type="submit"/>
            </form>
        </div>
    )
}