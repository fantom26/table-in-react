import React from "react";

const Item = ({ item, handleDeleteClick }) => {
    return (
        <tr>
            <td className='align-middle'>{item.firstName}</td>
            <td className='align-middle'>{item.lastName}</td>
            <td className='align-middle'>{item.dateOfBirdh}</td>
            <td className='align-middle'>{item.email}</td>
            <td className='align-middle'>{item.job}</td>
            <td className='align-middle'>{item.city}</td>
            <td className='align-middle'>{item.country}</td>
            <td>
                <button className="btn btn-danger" type="button" onClick={() => handleDeleteClick(item.id)}>
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default Item;