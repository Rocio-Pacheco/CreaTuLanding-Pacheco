import NavBar from './Components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from './components/Error';
import { CartProvider } from './context/CartContext';
import CartContainer from './components/CartContainer';

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
            <Route path='*' element={<Error/>}/>
          </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App