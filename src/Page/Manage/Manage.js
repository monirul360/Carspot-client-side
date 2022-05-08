import React from 'react';
import { Link } from 'react-router-dom';
import Useinventory from '../Hooks/Useinventory';
import './Manage.css';
const Manage = () => {
    const [items, setItems] = Useinventory();
    const ManageDel = id => {
        const confirm = window.confirm();
        if (confirm) {
            const delurl = `https://arcane-mountain-88654.herokuapp.com/myitems/${id}`;
            fetch(delurl, {
                method: 'DELETE',
            })
                .then(Response => Response.json())
                .then(data => {
                    const remaing = items.filter(m => m._id !== id);
                    setItems(remaing);
                })
        }
    }
    return (
        <>
            <div className="items-container">
                <h1>Manage <span id='items-title-span'>Inventories</span></h1>
                <Link id='additem_Link' to='/additem'>Add new item</Link>
                <div className="items-grid-content">
                    {
                        items.map(item =>
                            <>
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
                                            <p>{item.description.slice(0, 110)}</p>
                                            <ul>
                                                <li>Supplier: {item.supplier}</li>
                                                <li>Quantity: {item.quantity}</li>
                                            </ul>
                                            <button style={{ backgroundColor: '#0B3A6C', color: 'white' }} onClick={() => ManageDel(item._id)} id='item-update'>DELETE</button>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    }
                </div>
            </div>
        </>
    );
};

export default Manage;