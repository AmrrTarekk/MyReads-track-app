import React from 'react'
import CurrentlyReading from './CurrentlyReading';
import Read from './Read';
import WantToRead from './WantToRead';
import PropTypes from 'prop-types';



/*
Catgories component handles the shelves it has 3 component as well
1. CurrentlyReading component which handles the books inside the currently reading shelf 
2. WantToRead component which handles the books inside the want to read shelf
3. Read component which handles the books inside the read shelf
*/

const Catgories = (props) => {
    const {books, onHandleBooks} = props;
    return (
        <div>
            <div className="list-books-content">
                <div>
                    <h2 className="bookshelf-title">Currently Reading</h2>
                    <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.filter(arrayOfBooks => arrayOfBooks.shelf === 'currentlyReading').map(book => (
                            <div key={book.id} className="bookshelf">
                            <CurrentlyReading 
                                onHandleBooks={onHandleBooks} 
                                book={book}
                            />
                            </div> 
                        ))}
                    </ol>
                    </div>

                    <h2 className="bookshelf-title">Want to Read</h2>
                    <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.filter(arrayOfBooks => arrayOfBooks.shelf === 'wantToRead').map(book => (
                            <div key={book.id} className="bookshelf">
                            <WantToRead 
                                onHandleBooks={onHandleBooks} 
                                book={book}
                            />
                            </div> 
                        ))}
                    </ol>
                    </div>

                    <h2 className="bookshelf-title">Read</h2>
                    <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.filter(arrayOfBooks => arrayOfBooks.shelf === 'read').map(book => (
                            <div key={book.id} className="bookshelf">
                            <Read 
                                onHandleBooks={onHandleBooks} 
                                book={book}
                            />
                            </div> 
                        ))}
                    </ol>
                    </div>
                    
                </div>
                </div>
        </div>
    )
    
};

Catgories.prototype = {
    books: PropTypes.array.isRequired,
    onHandleBooks: PropTypes.func.isRequired,
}


export default Catgories;
