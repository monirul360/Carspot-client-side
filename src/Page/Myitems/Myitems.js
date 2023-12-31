import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase';
import './Myitems.css';
const Myitems = () => {
    const [user] = useAuthState(auth);
    const [myitems, setMyitems] = useState([]);
    useEffect(() => {
        const url = `https://car-hb01.onrender.com/myitems?email=${user?.email}`;
        fetch(url)
            .then(Response => Response.json())
            .then(data => setMyitems(data))
    }, [user])
    // Delete your my items
    const myitemsDelete = id => {
        const deleteAlt = window.confirm();
        if (deleteAlt) {
            const delurl = `https://car-hb01.onrender.com/myitems/${id}`;
            fetch(delurl, {
                method: 'DELETE',
            })
                .then(Response => Response.json())
                .then(data => {
                    const remaing = myitems.filter(m => m._id !== id);
                    setMyitems(remaing);
                })
        }
    }
    return (
        <div>
            <div className="myitems-container">
                <h1 style={{ marginBottom: '20px', textAlign: 'center' }}>My Items</h1>
                <div className="myitems-show">
                    {
                        myitems.map(show =>
                            <div className='show-myitem' key={show._id}>
                                <div className='show-myitem-img' >
                                    <img src={show.img} alt="" />
                                </div>
                                <div className='show-myitem-info'>
                                    <p>Name : {show.name}</p>
                                    <p>Email : {show.email}</p>
                                    <p>Supplier : {show.supplier}</p>
                                    <p>Quantity : {show.quantity}</p>
                                    <p>Price : ${show.price}</p>
                                    <button onClick={() => myitemsDelete(show._id)} id='show-myitem-del'>DELETE</button>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Myitems;