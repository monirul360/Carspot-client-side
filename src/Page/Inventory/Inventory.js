import { useParams } from 'react-router-dom';

const Inventory = () => {
    const { id } = useParams();
    return (
        <div>
            <div className="inventory-container">
                <h1>This is inventory page {id}</h1>
            </div>
        </div>
    );
};

export default Inventory;