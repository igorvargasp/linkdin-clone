import React, {useState} from 'react'
import './Login.css'
import {auth} from '../firebase'
import { useDispatch } from 'react-redux';

function Login() {

    const [name,setName] = useState('');
    const [password,setPassword] = useState('');
    const [email,setEmail] = useState('');
    const [profilePicture,setProfilePicture] = useState('');
    const dispatch = useDispatch()

    const register = () =>{
        if(!name){
            return alert('Please enter a full name')
        }
        auth.createUserWithEmailAndPassword(email,password).then((userAuth) => {
            userAuth.user.updateProfile({
                diplayName: name,
                photoUrl: profilePicture,
            }).then(() => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    photoUrl: profilePicture
                }))
            })
        }).catch(error => alert(error))
    };

    const login = (e) =>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password).then(userAuth => {
            dispatch(login({
                email: userAuth.email,
                uid: userAuth.uid,
                displayName: userAuth.displayName,
                photoUrl: userAuth.photo
             }))
        }).catch(error => alert(error))

    };

    return (
        <div>
            <div className="login">
                <img />

                <form>
                    <input placeholder="Fullname" type="text" className="" value={name} onChange={e => setName(e.target.value)}/>
                    <input placeholder="Profile pic URL" type="text" className="" value={profilePicture} onChange={e => setProfilePicture(e.target.value)} />
                    <input placeholder="Email" type="email" className="" value={email} onChange={e => setEmail(e.target.value)}/>
                    <input placeholder="Password" type="password" className="" value={password} onChange={e => setPassword(e.target.value)}/>
                    <button type="submit" className="" onClick={login}>Sign in</button>
                </form>
                <p>Not a member?</p>
                <span className="login__register" onClick={register}>Register Now</span>
            </div>
        </div>
    )
}

export default Login
