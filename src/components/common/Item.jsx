
import ItemCountContainer from "./itemCount/ItemCountContainer";

const Item = ({ title, price,img, index,stock }) => {
    return (
        <div key={index} className="card">
            <h2>{title}</h2>
            <img src={img} />
            <h3>${price.toLocaleString('es-AR')}</h3>
            <ItemCountContainer stock={stock} /> 
            <button className="btn-addCart">Agregar al carrito</button>
           
        </div>
    );t
};

export default Item;