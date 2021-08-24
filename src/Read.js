import React from 'react';
import Book from './Book';
import PropTypes from 'prop-types';



/*
Read component has only one component:
Book component which handles the book UI in each shelv
*/



const Read = (props) => {
    const { book, onHandleBooks } = props;
    // console.log('read',book)
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

Read.propTypes = {
    book: PropTypes.object.isRequired,
    onHandleBooks: PropTypes.func.isRequired
};

export default Read;