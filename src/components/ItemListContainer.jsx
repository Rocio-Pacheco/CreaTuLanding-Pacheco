import "../css/ItemListContainer.css";

const ItemListContainer = (props) => {
    return (
        <div className="item-list-container">   
            <h1>{props.saludo}</h1>
        </div>
    );
}
export default ItemListContainer;