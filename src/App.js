import React, { useEffect } from 'react';
import './App.css';
import Feed from './app/Components/Feed';
import Header from './app/Components/Header';
import Sidebar from './app/Components/Sidebar';
import { logout, selectUser } from './features/userSlice';
import { useSelector } from 'react-redux'
import Login from './app/Components/Login'

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch()

  useEffect(()=>{
    auth.onAuthStateChanged(userAuth => {
      if(userAuth){
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photo
        }))
      }else{
        dispatch(logout())
      }
    })
  })

  return (
    <div className="app">
      <Header/>
      {!user ? <Login/> :(
        <div className="app__body">
      <Sidebar/>
      <Feed/>
      <Widget/>

      </div>
      )}
    </div>
  );
}

export default App;
