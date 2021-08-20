import Item from "./Item";

const TableBody = ({currentItem, handleDeleteClick}) => {
    return (
        <tbody>
        {currentItem.map((item, i) => (
            <Item
                item={item}
                key={i}
                handleDeleteClick={handleDeleteClick}
            />
        ))}
        </tbody>
    );
};

export default TableBody;