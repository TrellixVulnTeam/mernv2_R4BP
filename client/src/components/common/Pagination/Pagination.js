import React from 'react';
import PropTypes from 'prop-types';
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa'; 
import './Pagination.scss';

class Pagination extends React.Component {
    state = {
        presentPage: this.props.initialPage,
    }
    changePage(newPage){
        this.setState({presentPage: newPage})
        this.props.onPageChange(newPage);
    }
    render(){
        const {pages, onPageChange} = this.props;
        const {presentPage} = this.state;
        const {changePage} = this;
        return (
            <div className="pagination">
                <ul className="pagination__list">
                <FaChevronLeft className="pagination__list__icon" onClick={() => this.changePage(pages -1)}/>
                    {[...Array(pages)].map((el, page) => 
                        <li
                            key={page}
                            onClick={() => {this.changePage(page)}}
                            className={`pagination__list__item ${((page++) === presentPage) ? 'pagination__list__item--active': ''}`}>
                        {page}
                        </li>
                    )}
                    <FaChevronRight className="pagination__list__icon" onClick={() => this.changePage(pages)}/>
                </ul>
            </div>
        )
    }
}

Pagination.propTypes  = {
    pages: PropTypes.number.isRequired,
    initialPage: PropTypes.number,
    onPageChange: PropTypes.func.isRequired
}

export default Pagination;