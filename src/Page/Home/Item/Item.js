import React from 'react';
import './Item.css';
const Item = ({ item }) => {
    return (
        <div>
            <div className="item-container">
                <div className="show-item">
                    <div className="show-item-img">
                        <img src={item.img} alt="" />
                    </div>
                    <div className="show-item-text">
                        <img src="" alt="" />
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                        <p>{item.supplier}</p>
                        <p>{item.quantity}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Item;