import * as React from 'react';


const Pagination = (itemsPerPage) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(itemsPerPage.totalItems / itemsPerPage.itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div>
            <ul className="pagination justify-content-center">
                {
                    pageNumbers.map(number => (
                        <li className='page-item me-2' key={number}>
                            <a href="/#" className='page-link' onClick={() => itemsPerPage.paginate(number)}>
                                {number}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
export default Pagination