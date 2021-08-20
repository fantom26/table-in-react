import {useState} from 'react';
import db from './db.json';
import {nanoid} from "nanoid";
import Pagination from './components/Pagination.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from "./components/Table";
import Search from "./components/Search";
import FormAddNewItem from "./components/FormAddNewItem";
import ItemsPerPage from "./components/ItemsPerPage";

let data = [...db];

function App() {

    const [items, setItems] = useState(data);
    const [addFormData, setAddFormData] = useState({
        firstName: '',
        lastName: '',
        dateOfBirdh: '',
        email: '',
        job: '',
        city: '',
        country: ''
    });

    const handleAddFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newFormData = {...addFormData};
        newFormData[fieldName] = fieldValue;

        setAddFormData(newFormData);
    };

    const handleAddFormSubmit = (event) => {
        event.preventDefault();

        const newItem = {
            id: nanoid(),
            firstName: addFormData.firstName,
            lastName: addFormData.lastName,
            dateOfBirdh: addFormData.dateOfBirdh,
            email: addFormData.email,
            job: addFormData.job,
            city: addFormData.city,
            country: addFormData.country
        };

        const newItems = [...items, newItem];
        setItems(newItems);

        event.target.reset();

    };

    const handleDeleteClick = (itemId) => {
        const newItems = [...items];

        const index = items.findIndex((item) => item.id === itemId);

        newItems.splice(index, 1);

        setItems(newItems);
    };

    //sort

    const sortData = (field) => {
        const copyData = items.concat();
        const sortData = copyData.sort((a, b) => {
            return a[field] > b[field] ? 1 : -1;
        })
        setItems(sortData);
    }

    //search

    const tableSearch = () => {
        let phrase = document.getElementById('search-text');
        let table = document.getElementById('info-table');
        let regPhrase = new RegExp(phrase.value, 'i');
        let flag = false;
        for (let i = 1; i < table.rows.length; i++) {
            flag = false;
            for (let j = table.rows[i].cells.length - 1; j >= 0; j--) {
                flag = regPhrase.test(table.rows[i].cells[j].innerHTML);
                if (flag) break;
            }
            if (flag) {
                table.rows[i].style.display = "";
            } else {
                table.rows[i].style.display = "none";
            }
        }
    }

    //pagination

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);

    const lastItemIndex = currentPage * itemsPerPage;
    const firstItemIndex = lastItemIndex - itemsPerPage;
    const currentItem = items.slice(firstItemIndex, lastItemIndex);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    };

    // select per page

    const handleItemsPerPage = (event) => {
        event.preventDefault();
        const fieldValue = event.target.value;
        setItemsPerPage(fieldValue);
    };

    return (
        <div className="text-center">
            <FormAddNewItem
                handleAddFormChange={handleAddFormChange}
                handleAddFormSubmit={handleAddFormSubmit}
            />
            <Search
                tableSearch={tableSearch}
            />
            <h1 className="mt-3">Table</h1>

            <ItemsPerPage
                items={items}
                handleItemsPerPage={handleItemsPerPage}
            />

            <p className="text-secondary">Sorts by column's heading</p>
            <p className="text-secondary">Sorts all items</p>

            <Table
                currentItem={currentItem}
                sortData={sortData}
                handleDeleteClick={handleDeleteClick}
            />

            <Pagination
                itemsPerPage={itemsPerPage}
                totalItems={items.length}
                paginate={paginate}
            />
        </div>
    );
}

export default App;
