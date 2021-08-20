import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

const Table = ({currentItem, handleDeleteClick, sortData}) => {
    return (
        <table className='table table-bordered table-hover' id="info-table">
            <TableHeader
                sortData={sortData}
            />
            <TableBody
                handleDeleteClick={handleDeleteClick}
                currentItem={currentItem}
            />
        </table>
    );
};

export default Table;