import { useEffect, useState } from "react";

const Useinventory = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('https://car-hb01.onrender.com/items')
            .then(Response => Response.json())
            .then(data => setItems(data));
    }, [])
    return [items, setItems];
};

export default Useinventory;