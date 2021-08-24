import React from 'react'
import Book from './Book';
import PropTypes from 'prop-types';



/*
CurrentlyReading component has only one component:
Book component which handles the book UI in each shelv
*/

const CurrentlyReading = (props) => {
    const { book, onHandleBooks } = props;
    // console.log('hand', handleBooks);
    // console.log('cuur',book)

    return (
        <div>
            <li key={book.id}>
                <Book 
                    onHandleBooks={onHandleBooks} 
                    book={book} 
                    currentState={book.shelf}
                />
            </li>
        </div>
    )
};


CurrentlyReading.propTypes = {
    book: PropTypes.object.isRequired,
    onHandleBooks: PropTypes.func.isRequired
};

export default CurrentlyReading;