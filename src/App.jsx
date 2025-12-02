import NavBar from './Components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from './components/Error';

function App() {
  

  return (
    <BrowserRouter>
    <NavBar></NavBar>
    <Routes>
      <Route path='/' element={<ItemListContainer saludo={"Bienvenidos a la tienda"}/>}/>
      <Route path='/categoria/:type' element={<ItemListContainer saludo={"Bienvenidos a"}/>}/>
      <Route path='/item/:id' element={<ItemDetailContainer/>}/>
      <Route path='*' element={<Error/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App