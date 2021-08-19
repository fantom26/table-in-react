import {useState} from 'react';
import './App.css';
import db from './db.json';
import {nanoid} from "nanoid";
import Item from "./components/Item";
import Pagination from './components/Pagination'
import 'bootstrap/dist/css/bootstrap.min.css';

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

    function tableSearch() {
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
        <div className="App">
            <h2 className="mt-2">Add an Item</h2>
            <form action="#" onSubmit={handleAddFormSubmit}
                  className="d-flex align-items-center justify-content-center">
                <input
                    type="text"
                    name="firstName"
                    required="required"
                    placeholder="Enter a firstName..."
                    onChange={handleAddFormChange}
                    className="me-2 border ps-2"
                />
                <input
                    type="text"
                    name="lastName"
                    required="required"
                    placeholder="Enter a lastName..."
                    onChange={handleAddFormChange}
                    className="me-2 border ps-2"
                />
                <input
                    type="date"
                    name="dateOfBirdh"
                    required="required"
                    placeholder="Enter a dateOfBirdh"
                    onChange={handleAddFormChange}
                    className="me-2 border"
                />
                <input
                    type="email"
                    name="email"
                    required="required"
                    placeholder="Enter an email"
                    onChange={handleAddFormChange}
                    className="me-2 border ps-2"
                />
                <input
                    type="text"
                    name="job"
                    required="required"
                    placeholder="Enter a job"
                    onChange={handleAddFormChange}
                    className="me-2 border ps-2"
                />
                <input
                    type="text"
                    name="city"
                    required="required"
                    placeholder="Enter a city"
                    onChange={handleAddFormChange}
                    className="me-2 border ps-2"
                />
                <input
                    type="text"
                    name="country"
                    required="required"
                    placeholder="Enter a country"
                    onChange={handleAddFormChange}
                    className="me-2 border ps-2"
                />
                <button type="submit" className="btn btn-info">Add</button>
            </form>
            <h2>Search</h2>
            <input className='ps-3 pe-3 border rounded' type="text" placeholder="Search by items per page" id="search-text"
                   onKeyUp={tableSearch}/>
            <h1 className="mt-3">Table</h1>
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
            <p className="text-secondary">Sorts by  column's heading</p>
            <p className="text-secondary">Sorts all items</p>
            <table className='table table-bordered table-hover' id="info-table">
                <thead className="bg-dark text-white">
                <tr>
                    <th onClick={() => sortData('firstName')}>firstName</th>
                    <th onClick={() => sortData('lastName')}>lastName</th>
                    <th onClick={() => sortData('dateOfBirdh')}>dateOfBirdh</th>
                    <th onClick={() => sortData('email')}>email</th>
                    <th onClick={() => sortData('job')}>job</th>
                    <th onClick={() => sortData('city')}>city</th>
                    <th onClick={() => sortData('country')}>country</th>
                    <th>action</th>
                </tr>
                </thead>
                <tbody>
                {currentItem.map((item, i) => (
                    <Item
                        item={item}
                        key={i}
                        handleDeleteClick={handleDeleteClick}
                    />
                ))}
                </tbody>
            </table>
            <div className='mt-4'>
                <Pagination
                    itemsPerPage={itemsPerPage}
                    totalItems={items.length}
                    paginate={paginate}
                />
            </div>
        </div>
    );
}

export default App;
