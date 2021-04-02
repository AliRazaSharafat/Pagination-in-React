import React from 'react'

const Pagination = ({ postPerPage, posts, paginate }) => {
    const numberOfPages = []
    for (let i = 1; i <= Math.ceil(posts / postPerPage); i++) {
        numberOfPages.push(i)
    }
    return (
        <nav className='mt-2'>
            <ul className='pagination'>
                {numberOfPages.map(number => (
                    <li className='page-item' key={number}>
                        <a href='!#' onClick={() => paginate(number)} className='page-link'>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination
