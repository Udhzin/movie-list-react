import React from 'react';
import './Paginagion.css'

class Pagination extends React.Component {

    render() {
        const {page, total_pages, onChangePage} = this.props;
        const getClassName = value => {
            return `page-item ${
                    page === value ? "active" : ""
            }`
        }
        const handleClick = value => () => {
            console.log('value', value)
            onChangePage(value)
        };
        const showPageNumbers = (currentPage) => {
            console.log({currentPage});
        }

        return (
                <nav aria-label="Page navigation">
                    <ul className="pagination justify-content-end">
                        <li className={`page-item ${page === 1 ? 'disabled' : ''}`}>
                            <span className="page-link" onClick={handleClick(page >= 1 ? page - 1 : page)}>Previous</span>
                        </li>

                        {showPageNumbers(page)}
                        <li className={getClassName(page)}>
                            <span className="page-link" onClick={handleClick(page)}>{page}</span>
                        </li>

                        <li className={`page-item ${page === total_pages ? 'disabled' : ''}`}>
                            <span className="page-link" onClick={handleClick(page !== total_pages ? page + 1 : page)}>Next</span>
                        </li>
                    </ul>
                </nav>
        )
    }
}

export default Pagination;
