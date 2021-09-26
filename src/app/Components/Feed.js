import React, { useState, useEffect} from 'react'
import './css/Feed.css'
import CreateIcon from '@material-ui/icons/Create'
import ImageIcon from '@material-ui/icons/Image'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import EventNoteIcon from '@material-ui/icons/EventNote'
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay'
import InputOption from './InputOption.js'
import Post from './Post'
import { db, auth, collection, onSnapshot , query, addDoc, orderBy} from '../firebase'
import firebase from 'firebase/firestore'
import _map from 'lodash/map'

function Feed() {
    const user = useSelector(selectUser);
    const [input, setInput] = useState('');

    const [posts, setPosts] = useState([]);
    var cont = 0;
    
    
    useEffect(() =>{   

         const docRef = onSnapshot(collection(db,"posts"), (doc)=>{
            doc.forEach((doc) => {
                setPosts({
                    id: doc.id,
                    data:doc.data()
                })
            })          
            })

            const q = query(docRef, orderBy("timestamp","desc"));
            
            setInput('')
           
        },[]);
        

    const sendPost = (e) => {
        e.preventDefault();
        addDoc(collection(db,"posts"),{
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: user.photoUrl,
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
            <FlipMove>
            {
               
            Object.entries(posts).map(function (key, value) {
                return <Post 
                    key={posts.id}
                    name={posts.data.name}
                    description={posts.data.description}
                    photoUrl={posts.data.photoUrl}
                    message={posts.data.message}
                />
            })
             
           
            }
            </FlipMove>
        </div>
    )
}

export default Feed
