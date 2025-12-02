import "../css/CartWidget.css";

// Componente que muestra el icono del carrito y la cantidad
const CartWidget = () => {
  return (
    <div className="cartwidget">
      <span>🛒</span>
      <span>5</span>
    </div>
  );
};

export default CartWidget;
