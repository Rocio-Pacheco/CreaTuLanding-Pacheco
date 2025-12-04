
import { FaShoppingCart } from "react-icons/fa"; 
import { Badge } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";


// Componente que muestra el icono del carrito y la cantidad
const CartWidget = () => {
   const {cartQuantity, cart}= useContext(CartContext)
        console.log(cart)
    return(
        <Link to="/cart" className="cart-widget">
            <FaShoppingCart fontSize={'1.8 rem'}/>
            {cart.length > 0 && <Badge pill bg="danger">{cartQuantity()}</Badge>}
        </Link>
    )
}

export default CartWidget;
