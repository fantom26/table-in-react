function Item(props) {
    return (
        <div className="App">
            <tr>
                <td>{props.firstName}</td>
                <td>{props.lastName}</td>
                <td>{props.dateOfBitdh}</td>
                <td>{props.email}</td>
                <td>{props.job}</td>
                <td>{props.city}</td>
                <td>{props.country}</td>
            </tr>
        </div>
    );
}

export default Item;
