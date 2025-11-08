import "../css/ItemListContainer.css";
import { useEffect } from "react";
import { getProductos } from "../mock/AsyncService";

const ItemListContainer = (props) => {

    useEffect(() => {
        console.log(getProductos())
        getProductos()
        .then((res) =>  console.log(res, 'respuesta' ))
        .catch((error) =>  console.log(error));
    }, []);

    return (
        <div className="item-list-container">   
            <h1>{props.saludo}</h1>
        </div>
    );
}
export default ItemListContainer;