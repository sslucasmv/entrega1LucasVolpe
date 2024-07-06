
import ItemList from "./components/common/ItemList";


const ItemListContainer = ({products}) => {

    return (
        <>

        {

            products.length === 0 ?
            <>
            <div className="content-load">
            <p>Cargando productos...</p>
            <div className="progress-container">
                <p className="progress-bar loadProgress"></p>
            </div>
            </div>
            </>
            : 
            <ItemList products={products}/>
          
}   
        </>
    
    )   
}

export default ItemListContainer;