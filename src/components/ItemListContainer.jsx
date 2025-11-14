import "../css/ItemListContainer.css";
import { useEffect } from "react";
import { getProductos } from "../mock/AsyncService";

const ItemListContainer = (props) => {
    const[data,setData]= useState ([])
  useEffect(() => {
    // Llama al servicio mock y maneja la respuesta / error
    getProductos()
      .then((res) => console.log(res, "respuesta"))
      .catch((error) => console.log(error));
  }, []);

console.log(data,'estadpo de productos')

  return (
    <div className="item-list-container">
      <h1 classname="text-success">{props.saludo}</h1>
      {data.map((prod) => 
        <p>{prod.id}</p>)}
    </div>
  );
};

export default ItemListContainer;