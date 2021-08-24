import React, { Component } from 'react'
import PropTypes from 'prop-types';

class Book extends Component {

    static propTypes = {
        book: PropTypes.object.isRequired,
        onHandleBooks: PropTypes.func.isRequired,
        currentState: PropTypes.string.isRequired,
    };

    changeShelves = (book,shelf) =>{
          this.props.onHandleBooks(book,shelf)
    };

    render() {
        const { book, currentState } = this.props;
        // console.log("favvvv", book);
        // console.log('saasas', this.props.onHandleBooks);


        /* 
        There was an error for some books that don't have imageLinks property
        So an error would pop up when i search for book that doesn't have
        */
        // Solution 
        
        const showing = book.imageLinks === undefined
        ? ""
        : book.imageLinks.thumbnail;

        return (
            <div>
                <div className="book">
                    <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${showing})` }}></div>
                        <div className="book-shelf-changer">
                            <select onChange={(event) => this.changeShelves(book, event.target.value)} value={currentState}  >
                            <option value="move" disabled >Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors}</div>
                </div>
            </div>
        )
    }
}



export default Book;
