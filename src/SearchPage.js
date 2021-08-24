import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import Book from './Book';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { debounce } from 'lodash';


class SearchPage extends Component {
    state = {
        query:'',
        searchResult: [],
    };

    static propTypes = {
        books: PropTypes.array.isRequired,
        handleBooks: PropTypes.func.isRequired,
    };


    // To update query that handles the search bar
    queryUpdate = debounce((query) => {
        this.setState(() => ({
            query
        }))
        this.handleSearch(query);
    }, 500 );


    handleSearch = debounce((query) => {
        query !== '' ? (
            BooksAPI.search(query).then((searchResult) => {
                searchResult.error ? (
                    this.setState(() =>({
                        searchResult: []
                    }))
                ) : ( 
                    this.setState(() =>({
                        searchResult: searchResult
                    }))
                )
            })
        ) : (
            this.setState(() =>({
                searchResult: []
            }))
        ) 
    }, 200 );



    onHandleBooks = (book,shelf) => {
        this.props.handleBooks(book,shelf);
      };
    

    render() {
        const { query, searchResult} = this.state
        const { books } = this.props;

        // You can notice the debouncing effect in the console
        console.log("debouncing effect:", query);
        const noSearch = "Books are the plane, and the road. They are the destination, and the journey. They are home. Discover yours NOW!!";


        /* If there's not an input in the search bar, this noSearch Message will be shown in the UI
            using this logic 
        */

        const Message = query === ''
        ? noSearch
        : searchResult

        return (
            <div className="search-books">
                <div className="search-books-bar">
                <Link 
                    to='/'
                    className="close-search" >
                    Close
                </Link>
                
                <form>    
                    <div className="search-books-input-wrapper">
                        <input 
                            type="text" 
                            placeholder="Search by title or author" 
                            onChange={(event) => this.queryUpdate(event.target.value)}
                        />
                    </div>
                </form>
                </div>

                {Message === noSearch ? (
                        <div className="search-books-results">
                            <div className='empty-search'>
                                    <span>{noSearch}</span>
                            </div>
                        </div>
                    ) : (
                        <div className="search-books-results">
                            <ol className="books-grid">
                                {/*
                                 the logic for handle the select options in the serached books to place them
                                 in the chosen shelf.
                                */}
                                {searchResult.map((book) => {
                                            let shelf = 'none';
                                            books.map(b => (
                                                    b.id === book.id 
                                                    ? shelf = b.shelf 
                                                    : shelf
                                                )
                                            )
                                            return (
                                                <li key={book.id}>
                                                    <Book 
                                                        onHandleBooks={this.onHandleBooks} 
                                                        book={book} 
                                                        currentState={shelf}
                                                    />
                                                </li>
                                            )
                                        }
                                    )
                                }
                            </ol>
                        </div>
                    )

                }
            </div>
        )
    }
}

export default SearchPage;
