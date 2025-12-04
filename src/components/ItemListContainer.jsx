import "../css/ItemListContainer.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductos } from "../mock/AsyncService";
import ItemList from "./ItemList";
import LoaderComponent from "./LoaderComponent";
import { collection, getDocs, query, where, addDoc } from "firebase/firestore";
import {db} from "../service/firebase";

const ItemListContainer = (props) => {

  const [data, setData] = useState([]);
  const [loader,setLoader] = useState(false);
  const {type} = useParams();


  //FIREBASE
  useEffect(() => {
    setLoader(true)
    //conectwar a firebase
    const productCollection= type 
    //traer los productos que coinciden con la categoria
    ? query(collection(db, "productos"), where("categoria", "==", type))
    //agarra los productos de la coleccion
    :collection(db, "productos");
    //pide los documentos
    getDocs(productCollection)
    .then((res)=>{
      //obtener id y data
      const list = res.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data()
        }
      })

      setData(list)
    })
    .catch((error) => console.log(error))
    .finally(() => setLoader(false));
  }, []);






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
