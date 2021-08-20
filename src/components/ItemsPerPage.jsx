const ItemsPerPage = ({handleItemsPerPage, items}) => {
    return (
        <form action="#" className="mb-3">
            Select items per page:
            <select className="ms-2" onChange={handleItemsPerPage} defaultValue="5">
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="30">30</option>
                <option value={items.length}>All</option>
            </select>
        </form>
    );
};

export default ItemsPerPage;