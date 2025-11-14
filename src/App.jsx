import NavBar from './Components/NavBar'
import ItemListContainer from './Components/ItemListContainer'
import './App.css'
import ItemCount from './components/ItemCount'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  

  return (
    <>
    <NavBar></NavBar>
    <h1>Hola Mundo</h1>
    <ItemListContainer></ItemListContainer>
   { /*<ItemCount stock={10}></ItemCount>*/}
    </>
  )
}

export default App