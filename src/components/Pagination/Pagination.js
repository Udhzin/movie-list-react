import React from 'react';
import './Paginagion.css'

class Pagination extends React.Component {
    render() {
        const {page, total_pages, onChangePage} = this.props;
        const handleClick = value => () => {
            console.log('value', value)
            onChangePage(value)
        };
        const getClassName = value => {
            return `page-item ${
                    page === value ? "active" : ""
            }`
        }

        return (
                <nav aria-label="Page navigation">
                    <ul className="pagination justify-content-end">
                        <li className={`page-item ${page === 1 ? 'disabled' : ''}`}>
                            <span className="page-link" onClick={handleClick(page >= 1 ? page - 1 : page)}>Previous</span>
                        </li>
                        <li className={getClassName(1)}>
                            <span className="page-link" onClick={handleClick(1)}>1</span>
                        </li>
                        <li className={getClassName(2)}>
                            <span className="page-link" onClick={handleClick(2)}>2</span>
                        </li>
                        <li className={getClassName(3)}>
                            <span className="page-link" onClick={handleClick(3)}>3</span>
                        </li>
                        <li className={`page-item ${page === total_pages ? 'disabled' : ''}`}>
                            <span className="page-link" onClick={handleClick(page + 1)}>Next</span>
                        </li>
                    </ul>
                </nav>
        )
    }
}

export default Pagination;
