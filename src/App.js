import logo from './logo.svg';
import './App.css';
import Header from './components/Header/index'
import AlbumExample from './components/Album_Example';
import Album from './components/Album';
import Footer from './components/Footer';
import React, { useState,useEffect} from 'react';
import Myname from './components/Myname';
import Products from './components/Products';
import Students from './components/Students';
import Sum from './components/Sum';
const students=[
  {id:"ph123",name:"viet"},
  {id:"ph124",name:"tran"},
  {id:"ph125",name:"hoang"},
  {id:"ph126",name:"bui"},
];
const products=[
  {id:1,name:"dell",image:"http://placekitten.com/200/300"},
  {id:2,name:"asus",image:"http://placekitten.com/200/300"},
  {id:3,name:"lenovo",image:"http://placekitten.com/200/300"},
];
function App() {
  const [albums,setAlbums]=useState([
    {id:1,name:"dell 1",image:"http://placekitten.com/200/300"},
    {id:2,name:"asus 2",image:"http://placekitten.com/200/300"},
    {id:3,name:"lenovo 3",image:"http://placekitten.com/200/300"},
  ]);
  const [myName,setMyName]=useState("viet");
  const changeMyName=()=>{
    setMyName("hoang viet");
    if(myName=="hoang viet"){
      setMyName("viet");
    }
  }
  const [myColor,setMyColor]=useState("green");
  const changeMyColor=()=>{
    setMyColor("red");
  }
  /**
   * State: trạng thái của 1 ưd
   * State hook: const [state,setState]=useState()
   */
  return (
    <div className="App">
      <Header />
      <main>
        <AlbumExample />
        {students.map(({name},index)=>{
          return <div key={index}>Xin chào <Myname name={name}/></div>
        })}
        <Products data={products}/>
        <Album data={albums}/>
        {myName}
        <button onClick={()=>changeMyName()}>CLick me</button>
        <div style={{width: 500, height:200,background:myColor}} />
        <button onClick={changeMyColor}>CLick to change color</button>
        <Sum data={{a:"5",b:"4"}}/>
      </main>
      <Footer />
    </div>
  );
}
export default App;
