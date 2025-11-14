import "../css/ItemListContainer.css";
import { useEffect, useState } from "react";
import { getProductos } from "../mock/AsyncService";
import ItemList from "./ItemList";

const ItemListContainer = (props) => {

  const [data, setData] = useState([]);

  useEffect(() => {
    console.log("Ejecutando");
    getProductos()
      .then((res) => setData(res))
      .catch((error) => console.log(error));
  }, []);

  console.log(data, "Mostrar Arrays de productos");
//Mostrar productos
  return (
    <div className="item-list-container">
      <h1 className="text-success">{props.saludo}</h1>
     
      <ItemList data={data}/>
    </div>
  );
};

export default ItemListContainer;
