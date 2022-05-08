import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase';
import './Additem.css';
const Additem = () => {
    const [user] = useAuthState(auth);
    const itemhandel = e => {
        e.preventDefault();
        const iteminfo = {
            email: user.email,
            supplier: e.target.supplier.value,
            name: e.target.item.value,
            description: e.target.description.value,
            price: e.target.price.value,
            quantity: e.target.quantity.value,
            img: e.target.img.value
        }
        e.target.reset();
        fetch('https://arcane-mountain-88654.herokuapp.com/items', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(iteminfo),
        })
            .then(response => response.json())
            .then(data => {
                toast('Successful add item');
            })
    }
    return (
        <div>
            <div className="additems-container">
                <h2 style={{ textAlign: 'center' }}>Add new item</h2>
                <div className="additems-content">
                    <div className='additems-form'>
                        <form onSubmit={itemhandel}>
                            <label htmlFor="email"><p>Email</p></label>
                            <input type="email" disabled value={user?.email} name="email" placeholder='Enter your email' id="email" required />

                            <label htmlFor="supplier"><p>Name</p></label>
                            <input type="text" name="supplier" placeholder='Supplier name' id="supplier" required />

                            <label htmlFor="item"><p>Item</p></label>
                            <input type="text" name="item" placeholder='Item name ' id="item" required />

                            <label htmlFor="Description"><p>Description</p></label>
                            <input type="text" name="description" placeholder='Description' id="Description" required />

                            <label htmlFor="price"><p>Price</p></label>
                            <input type="number" name="price" id="price" placeholder='Price' required />
                            <label htmlFor="Quantity"><p>Quantity</p></label>
                            <input type="number" name="quantity" placeholder='Quantity' id="Quantity" required />

                            <label htmlFor="img"><p>Image</p></label>
                            <input type="text" name="img" placeholder='Image url' id="img" required />
                            <input type="submit" value="Add item" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Additem;