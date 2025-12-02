import "../css/ItemListContainer.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductos } from "../mock/AsyncService";
import ItemList from "./ItemList";

const ItemListContainer = (props) => {

  const [data, setData] = useState([]);
  const {type} = useParams();

  useEffect(() => {
    getProductos()
      .then((res) =>{
        if (type) { // Filtrar por categoria
          setData(res.filter((prod) => prod.categoria === type));
        } else {
          setData(res);
        }
      })
      .catch((error) => console.log(error));
  }, [type]);

//Mostrar productos
  return (
    <div className="item-list-container">
      <h1 className="text-success">{props.saludo} {type && <span>{type}</span>}</h1>
     
      <ItemList data={data}/>
    </div>
  );
};

export default ItemListContainer;
