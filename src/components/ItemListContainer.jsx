import "../css/ItemListContainer.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductos } from "../mock/AsyncService";
import ItemList from "./ItemList";
import LoaderComponent from "./LoaderComponent";

const ItemListContainer = (props) => {

  const [data, setData] = useState([]);
  const [loader,setLoader] = useState(false);
  const {type} = useParams();

  useEffect(() => {
    setLoader(true);
    getProductos()  
      .then((res) =>{
        if (type) { // Filtrar por categoria
          setData(res.filter((prod) => prod.categoria === type));
        } else {
        setData(res);
      }
    })
    .catch((error) => console.log(error))
    .finally(() => setLoader(false)); // ahora sí encadenado
}, [type]);


//Mostrar productos
  return (
    <>
      {loader 
        ? <LoaderComponent/>
          : <div className="item-list-container">
              <h1 className="text-success">{props.saludo} {type && <span>{type}</span>}</h1>
              <ItemList data={data}/>
            </div>
        }
    </>
  );
};

export default ItemListContainer;
