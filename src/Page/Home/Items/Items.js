import { Link } from 'react-router-dom';
import Useinventory from '../../Hooks/Useinventory';
import Item from '../Item/Item';
import './Items.css';
const Items = () => {
    const [items, setItems] = Useinventory();
    const itemsSlice = items.slice(0, 6);
    return (
        <>
            <div className="items-container">
                <h1>My <span id='items-title-span'>Items</span></h1>
                <div className="items-grid-content">
                    {

                        itemsSlice.map(item => <Item key={item._id}
                            item={item}
                        >
                        </Item>)
                    }
                </div>
                <Link id='manage-Inventories' to='/Manage'>Manage Inventories</Link>
            </div>
        </>
    );
};

export default Items;