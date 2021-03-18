import logo from './logo.svg';
import './App.css';
import Header from './components/Header/index'
import AlbumExample from './components/Album_Example';
import Album from './components/Album';
import Footer from './components/Footer';
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
function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <AlbumExample />
        <UserInfo user={comment.author}/>
        <Album />
      </main>
      <Footer />
    </div>
  );
}

export default App;
