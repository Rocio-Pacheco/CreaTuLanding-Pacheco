import NavBar from './Components/NavBar'
import ItemListContainer from './Components/ItemListContainer'
import './App.css'

function App() {
  

  return (
    <>
    <NavBar></NavBar>
    <h1>Hola Mundo</h1>
    <ItemListContainer saludo="Bienvenidos a la tienda"></ItemListContainer>
    </>
  )
}

export default App
