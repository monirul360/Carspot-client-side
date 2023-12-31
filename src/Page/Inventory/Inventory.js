import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import './Inventory.css';
const Inventory = () => {
    const { id } = useParams();
    const [items, setItems] = useState({});
    useEffect(() => {
        const url = `https://car-hb01.onrender.com/items/${id}`;
        fetch(url)
            .then(Response => Response.json())
            .then(data => setItems(data));

    }, []);
    const handleUpdateDelivered = () => {
        const quantity = items.quantity - 1;
        const updated = { quantity };
        const url = `https://car-hb01.onrender.com/items/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updated)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                toast('Delivered successfully!');
            })
    }
    const handleUpdatequantity = event => {
        event.preventDefault();
        const quantity = event.target.quantity.value;
        const updated = { quantity };
        // send data to the server
        const url = `https://car-hb01.onrender.com/items/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updated)
        })
            .then(res => res.json())
            .then(data => {
                toast('Quantity add successfully!');
                event.target.reset();
            })
    }
    return (
        <div>
            <div className="inventory-container">
                <div className="inventory-flex">
                    <div className="inventory-info">
                        <img src={items.img} alt="" />
                        <div className="inventory-Description">
                            <h2>Description</h2>
                            <p>{items.description}</p>
                        </div>
                    </div>
                    <div className="inventory-other-info">
                        <div className='other-info'>
                            <div className="singleprice-tag">
                                <span>{items.price}</span>
                            </div>
                        </div>
                        <h4 style={{ marginBottom: '20px' }}>ID : {id}</h4>
                        <h3>Name: {items.name}</h3>
                        <h3>Supplier: {items.supplier}</h3>
                        <h3>Quantity : {items.quantity}</h3>
                        <div className="delivered">
                            <button onClick={() => handleUpdateDelivered()}>Delivered</button>
                        </div>
                        <div className="quantity">
                            <form onSubmit={handleUpdatequantity} >
                                <input type="number" name="quantity" placeholder='Quantity add' id="" required />
                                <input type="submit" value="ADD" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inventory;