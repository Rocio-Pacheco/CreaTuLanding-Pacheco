
import { FaShoppingCart } from "react-icons/fa"; 
import { Badge } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

// Componente que muestra el icono del carrito y la cantidad
const CartWidget = () => {
  const {cart} = useContext(CartContext)
  console.log(cart)

  return (
    <>
      <FaShoppingCart fontSize={'1.3rem'} />
      <Badge pill bg="danger"></Badge>
    </>
  );
};

export default CartWidget;
