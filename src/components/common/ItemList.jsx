import React from 'react';
import Item from './Item';

const ItemList = ({products}) => {
    return (
        <div className="content-card">
            {
                products.map((el, index) => {
                    return (
                        <Item key={index} index={index} title={el.title} price={el.price} img={el.img} stock={el.stock} />
                    )
                })
            }
        </div>
    );
};

export default ItemList;