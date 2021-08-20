const FormAddNewItem = ({handleAddFormSubmit, handleAddFormChange}) => {
    return (
        <div>
            <h2 className="mt-2">Add an Item</h2>
            <form action="#" onSubmit={handleAddFormSubmit}
                  className="d-flex align-items-center justify-content-center">
                <input
                    type="text"
                    name="firstName"
                    placeholder="Enter a firstName..."
                    onChange={handleAddFormChange}
                    className="me-2 border ps-2"
                    required/>
                <input
                    type="text"
                    name="lastName"
                    placeholder="Enter a lastName..."
                    onChange={handleAddFormChange}
                    className="me-2 border ps-2"
                    required/>
                <input
                    type="date"
                    name="dateOfBirdh"
                    placeholder="Enter a dateOfBirdh"
                    onChange={handleAddFormChange}
                    className="me-2 border"
                    required/>
                <input
                    type="email"
                    name="email"
                    placeholder="Enter an email"
                    onChange={handleAddFormChange}
                    className="me-2 border ps-2"
                    required/>
                <input
                    type="text"
                    name="job"
                    placeholder="Enter a job"
                    onChange={handleAddFormChange}
                    className="me-2 border ps-2"
                    required/>
                <input
                    type="text"
                    name="city"
                    placeholder="Enter a city"
                    onChange={handleAddFormChange}
                    className="me-2 border ps-2"
                    required/>
                <input
                    type="text"
                    name="country"
                    placeholder="Enter a country"
                    onChange={handleAddFormChange}
                    className="me-2 border ps-2"
                    required/>
                <button type="submit" className="btn btn-info">Add</button>
            </form>
        </div>
    );
};

export default FormAddNewItem;