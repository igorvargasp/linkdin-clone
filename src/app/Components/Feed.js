import React, { useState, useEffect} from 'react'
import './css/Feed.css'
import CreateIcon from '@material-ui/icons/Create'
import ImageIcon from '@material-ui/icons/Image'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import EventNoteIcon from '@material-ui/icons/EventNote'
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay'
import InputOption from './InputOption.js'
import Post from './Post'
import { db, auth, collection, onSnapshot , doc, addDoc} from '../firebase'
import firebase from 'firebase/firestore'


function Feed() {

    const [input, setInput] = useState('');

    const [posts, setPosts] = useState([]);
    
    useEffect(() =>{   

         const docRef = onSnapshot(collection(db,"posts"), (doc)=>{
            doc.forEach((doc) => {
                setPosts({
                    id: doc.id,
                    data:doc.data()
                })
            })          
            })
            console.log(docRef)
        },[]);
        

    const sendPost = (e) => {
        e.preventDefault();
        addDoc(collection(db,"posts"),{
            name: 'igor',
            description: 'this is a test',
            message: input,
            photoUrl: '',
            timeStamp: new Date().toISOString()
        })
     

    }


    return (
        <div className="feed">
            <div className="feed_inputContainer">
                <div className="feed__input">
                    <CreateIcon/>
                    <form>
                        <input type="text" value={input} onChange={e => setInput(e.target.value)}/>
                        <button type="submit" onClick={sendPost}>Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption Icon={ImageIcon}  title="Photo" color="#70B5F9"/>
                    <InputOption Icon={SubscriptionsIcon}  title="Video" color="#E7A33E"/>
                    <InputOption Icon={EventNoteIcon}  title="Event" color="#C0CBCD"/>
                    <InputOption Icon={CalendarViewDayIcon}  title="Write article" color="#7FC15E"/>
                </div>
            </div>
            {
            posts.map(({id, data:{ name, description, message, photoUrl}}) => (
                <Post
                   key={id}
                   name={name}
                   description={description}
                   message={message}
                   photoUrl={photoUrl}
                />
               
            ))
           
            }
           
        </div>
    )
}

export default Feed
