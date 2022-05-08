import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './Items.css';
const Items = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('https://arcane-mountain-88654.herokuapp.com/items')
            .then(Response => Response.json())
            .then(data => setItems(data));
    }, [])
    return (
        <>
            <div className="items-container">
                <h1>My <span id='items-title-span'>Items</span></h1>
                <div className="items-grid-content">
                    {
                        items.map(item => <Item key={item._id}
                            item={item}
                        >
                        </Item>)
                    }
                </div>
            </div>
        </>
    );
};

export default Items;