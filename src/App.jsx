import NavBar from './Components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import './App.css'
/*import ItemCount from './components/ItemCount'*/
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from './components/Error';

function App() {
  

  return (
    <BrowserRouter>
    <NavBar></NavBar>
    <Routes>
      <Route path='/' element={<ItemListContainer saludo={"Bienvenidos a la app"}/>}/>
      <Route path='/item/:id' element={<ItemListContainer/>}/>
      <Route path='*' element={<Error/>}/>
    </Routes>
    <h1>Hola Mundo</h1>
    <ItemListContainer></ItemListContainer>
   { /*<ItemCount stock={10}></ItemCount>*/}
    </BrowserRouter>
  )
}

export default App