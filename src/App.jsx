import NavBar from './Components/NavBar'
import ItemListContainer from './Components/ItemListContainer'
import ItemDetailContainer from './Components/ItemDetailContainer'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from './Components/Error';
import { CartProvider } from './context/CartContext';
import CartContainer from './Components/CartContainer';
import Checkout from './Components/Checkout';

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