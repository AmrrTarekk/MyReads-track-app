import React from 'react'
import Book from './Book';
import PropTypes from 'prop-types';



/*
WantToRead component has only one component:
Book component which handles the book UI in each shelv
*/


 const WantToRead = (props) => {
    const { book, onHandleBooks } = props;
    // console.log('want',book)

    return (
        <div>
            <li key={book.id}>
                <Book 
                    onHandleBooks={onHandleBooks} 
                    book={book} 
                    currentState={book.shelf}/>
            </li>
        </div>
    )
};


WantToRead.propTypes = {
    book: PropTypes.object.isRequired,
    onHandleBooks: PropTypes.func.isRequired
};

export default WantToRead;