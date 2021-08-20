const TableHeader = ({sortData}) => {
    return (
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
    );
};

export default TableHeader;