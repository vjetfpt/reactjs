import logo from './logo.svg';
import './App.css';
import Header from './components/Header/index'
import AlbumExample from './components/Album_Example';
import Album from './components/Album';
import Footer from './components/Footer';
import React from 'react'
import Myname from './components/Myname';
import Products from './components/Products';
// function formatDate(date){
//   return date.toLocaleDateString();
// }
// function Avatar(props){
//   return (
//     <img
//       className="Avatar"
//       src={props.user.avatarUrl}
//       alt={props.user.name}
//     />
//   );
// }

// function UserInfo(props){
//   return (
//     <div className="UserInfo">
//       <Avatar user={props.user} />
//       <div className="UserInfo-name">
//         {props.user.name}
//       </div>
//     </div>
//   )
// }
// const comment={
//   date:new Date(),
//   text:"I hope you enjoy learning React!",
//   author:{
//     name:'Hello Kitty',
//     avatarUrl:
//     'https://placekitten.com/g/64/64',
//   }
// }
// // state
// class Form extends React.Component {
//   constructor (props) {
//      super(props)
//      this.state = {
//        input: ''
//      }
//   }
// handleChange = (text) => {
//     this.setState({ input: text })
//   }
//   render () {
//     const { input } = this.state
//     return (
//     <div>
//         <label>
//           Name:
//            <input type="text" value={this.state.value} onChange={this.handleChange} />
//         </label>
//         <input type="submit" value="Submit" />
//       </div>
//       )
//     }
//  }
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
]
function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <AlbumExample />
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student,index)=>{
              return (
                <tr key={index}>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                </tr>
              )              
            })}
          </tbody>
        </table>
        {students.map(({name},index)=>{
          return <div key={index}>Xin chào <Myname name={name}/></div>
        })}
        <Products data={products}/>
        <Album />
      </main>
      <Footer />
    </div>
  );
}

export default App;
