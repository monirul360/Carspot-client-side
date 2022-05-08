import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Inventory.css';
const Inventory = () => {
    const { id } = useParams();
    const [items, setItems] = useState({});
    useEffect(() => {
        const url = `https://arcane-mountain-88654.herokuapp.com/items/${id}`;
        fetch(url)
            .then(Response => Response.json())
            .then(data => setItems(data));

    }, [])
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
                            <button>Delivered</button>
                        </div>
                        <div className="quantity">
                            <form >
                                <input type="text" name="quantity" placeholder='Quantity add' id="" required />
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