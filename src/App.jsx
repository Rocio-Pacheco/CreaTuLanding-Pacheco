import NavBar from "./components/NavBar.jsx";
import ItemListContainer from './components/ItemListContainer.jsx'
import ItemDetailContainer from './components/ItemDetailContainer.jsx'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from './components/Error.jsx';
import { CartProvider } from './context/CartContext';
import CartContainer from './components/CartContainer.jsx';
import Checkout from './components/Checkout';

function App() {

  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer saludo={"Bienvenidos a la tienda"}/>}/>
            <Route path='/categoria/:type' element={<ItemListContainer saludo={"Bienvenidos a"}/>} />
            <Route path='/item/:id' element={<ItemDetailContainer/>}/>
            <Route path='/cart' element={<CartContainer/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path='*' element={<Error/>}/>
          </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App