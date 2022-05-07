import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css';
const Item = ({ item }) => {
    const sliceDes = item.description.slice(0, 110);
    return (
        <div>
            <div className="item-container">
                <div className="show-item">
                    <div className="show-item-img">
                        <img src={item.img} alt="" />
                        <div className='item-title'>
                            <span>Item</span>
                        </div>
                        <div className="price">
                            <span>${item.price}</span>
                        </div>
                    </div>
                    <div className="show-item-text">
                        <h3>{item.name}</h3>
                        <p>{sliceDes}</p>
                        <ul>
                            <li>Supplier: {item.supplier}</li>
                            <li>Quantity: {item.quantity}</li>
                        </ul>
                        <Link to='/' id='item-update'>update</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Item;