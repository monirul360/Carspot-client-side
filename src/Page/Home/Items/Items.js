import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './Items.css';
const Items = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('items.json')
            .then(Response => Response.json())
            .then(data => setItems(data));
    }, [])
    return (
        <>
            <div className="items-container">
                <h1>My <span id='items-title-span'>Items</span></h1>
                <div className="items-grid-content">
                    {
                        items.map(item => <Item key={item.id}
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