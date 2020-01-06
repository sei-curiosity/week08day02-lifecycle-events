import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Lifecycle from './components/lifecycle';
import Header from './components/Header';
import Memegen from './components/Memegen';
import Meme from './components/Meme';
import  memList from './components/data/memList'



function App() {
  return (
    <div className="App">
      <Lifecycle/>
      <Header />
      <Memegen> {memList.map ((mem)=> {
         return(
          <Meme  title={mem.title} />
         );
       } ) } </Memegen>
      
       
      
     

    </div>
  );
}

export default App;
