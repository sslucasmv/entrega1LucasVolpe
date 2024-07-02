import React from "react";
import productsMock from "./productsMock";


const ItemListContainer = ({products}) => {
productsMock()
    
    return (
        <>
           {
            
            products.length ===0 ?
            
            <p>Cargando productos...</p>
            
            :
         
            products.map(elemento => {
                return (

                
                    <div className="card" key={elemento.id}>
                        <h2>{elemento.title}</h2>
                        <img src={elemento.img} ></img>
                        <p>{elemento.description}</p>
                        <h3>${elemento.price.toLocaleString('es-AR')}</h3>
                        <button className="btn-addCart">Añadir al producto</button>
                    </div>

                    
                )
               
             
            })
            }

           </>
    
    )   
}

export default ItemListContainer;