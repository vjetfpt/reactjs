import logo from './logo.svg';
import './App.css';
import Header from './components/Header/index'
import AlbumExample from './components/Album_Example';
import Album from './components/Album';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <AlbumExample />
        <Album />
      </main>
      <Footer />
    </div>
  );
}

export default App;
