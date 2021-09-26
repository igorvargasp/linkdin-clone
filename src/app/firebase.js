import {initializeApp} from 'firebase/app'
import {getFirestore, collection, addDoc, query, onSnapshot, orderBy } from 'firebase/firestore'
import {getAuth} from 'firebase/auth'




const firebaseConfig = {
    apiKey: "AIzaSyD8QpsW8GOsU36iSTZF6DL8n9EUXELCs58",
    authDomain: "linkdin-clone-23d8b.firebaseapp.com",
    projectId: "linkdin-clone-23d8b",
    storageBucket: "linkdin-clone-23d8b.appspot.com",
    messagingSenderId: "83417833104",
    appId: "1:83417833104:web:4b4b4b3def8869f7c38215"
  };


const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp)

const auth = getAuth();

export {db, auth, collection, query, onSnapshot, addDoc, orderBy}