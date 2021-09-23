import React from 'react';
import './App.css';
import Feed from './app/Components/Feed';
import Header from './app/Components/Header';
import Sidebar from './app/Components/Sidebar';

function App() {
  return (
    <div className="app">
      <Header/>
      <div className="app__body">
      <Sidebar/>
      <Feed/>

      </div>
    </div>
  );
}

export default App;
