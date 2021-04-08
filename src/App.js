import logo from './logo.svg';
import './App.css';
import Header from './components/Header/index'
import Album from './components/Album';
import Footer from './components/Footer';
import React, { useState, useEffect, createRef } from 'react';
import AddAlbum from './components/AddAlbum';
import UpdateItem from './components/UpdateItem';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import HomePage from './Pages/HomePage';
import ProductPage from './Pages/Products';
import ProductDetail from './Pages/ProductDetail';
import AddProduct from './Pages/AddProduct';
import UpdateProduct from './Pages/UpdateProduct';
import ManagerProducts from './components/ManagerProducts';
function App() {
  const [albums, setAlbums] = useState([]);
  const [albumItem, setAlbumItem] = useState({});
  var url_api = process.env.REACT_APP_API_URL;
  useEffect(() => {
    const getAlbums = async () => {
      try {
        const response = await fetch(`${url_api}/albums`);
        const data = await response.json();
        setAlbums(data);
      }
      catch (err) {
        console.log(err)
      }
    }
    getAlbums();
  }, [])
  /**
   * State: trạng thái của 1 ưd
   * State hook: const [state,setState]=useState()
   */
  const handleAdd = async (value) => {
    try {
      const idRandom = Math.ceil(Math.random() * 10);
      value.id = idRandom;
      console.log("item add", value);
      const response = await fetch(`${url_api}/albums`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(value)
      })
      const data = await response.json();
      setAlbums([
        ...albums,
        data
      ])
    }
    catch (error) {
      console.log(error);
    }
  }
  const deleteItem = async (id) => {
    if (id) {
      try {
        await fetch(`${url_api}/albums/${id}`, {
          method: "DELETE"
        })
        const newAlbums = albums.filter((element, index) => {
          if (element.id != id) {
            return true;
          }
        })
        setAlbums(newAlbums);
      } catch (error) {
        console.log("error: ", error);
      }
    }
  }
  const showUpdateItem = (id) => {
    const item = albums.find((element, index) => {
      if (element.id == id) {
        return true;
      }
    });
    setAlbumItem(item);
  }
  const updateItem = async (item) => {
    try {
      await fetch(`${url_api}/albums/${item.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
      });
      // const response = await fetch(`${url_api}/albums`);
      // const data = await response.json();
      // console.log("new",data);
      // setAlbums(data);
      const newAlbums = albums;
      newAlbums.forEach((element, index, arr) => {
        if (element.id == item.id) {
          arr[index] = item;
        }
      })
      console.log(newAlbums);
      setAlbums(
        [
          ...newAlbums
        ]
      );
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          {/* <div className="row">
            <div className="col-6">
              <AddAlbum onAdd={handleAdd} />
            </div>
            <div className="col-6">
              <UpdateItem item={albumItem} onUpdate={updateItem} />
            </div>
          </div> */}
          <Switch>
            <Route path="/" exact component={() => <HomePage />} />
            <Route path="/products" exact
              component={() => <ProductPage
                albums={albums}
                deleteItem={deleteItem}
                showUpdateItem={showUpdateItem} />} />
            <Route path="/update-product/:id" >
              <UpdateProduct  onUpdate={updateItem}/>
            </Route>
            <Route path="/manager/add-product">
              <AddProduct onAdd={handleAdd}/>
            </Route>
            <Route path="/products/:id" component={()=><ProductDetail />}/>
            <Route path="/manager">
              <ManagerProducts 
                albums={albums}
                deleteItem={deleteItem}/>
            </Route>
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
