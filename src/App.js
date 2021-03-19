import logo from './logo.svg';
import './App.css';
import Header from './components/Header/index'
import AlbumExample from './components/Album_Example';
import Album from './components/Album';
import Footer from './components/Footer';
import React from 'react'
function formatDate(date){
  return date.toLocaleDateString();
}
function Avatar(props){
  return (
    <img
      className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}

function UserInfo(props){
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  )
}
const comment={
  date:new Date(),
  text:"I hope you enjoy learning React!",
  author:{
    name:'Hello Kitty',
    avatarUrl:
    'https://placekitten.com/g/64/64',
  }
}
// state
class Form extends React.Component {
  constructor (props) {
     super(props)
     this.state = {
       input: ''
     }
  }
handleChange = (text) => {
    this.setState({ input: text })
  }
  render () {
    const { input } = this.state
    return (
    <div>
        <label>
          Name:
           <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </div>
      )
    }
 }
function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <AlbumExample />
        <UserInfo user={comment.author}/>
        <Form />
        <Album />
      </main>
      <Footer />
    </div>
  );
}

export default App;
