import React from 'react';
import * as BooksAPI from './BooksAPI'
import './App.css';
import SearchPage from './SearchPage';
import Home from './Home';
import { Route } from 'react-router-dom';

class BooksApp extends React.Component {
  state = {
    books: [],
  };

  // To fetch the data from remote API
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState(() =>({
        books
      }))
    })
  };

  // To handle any change in the books shelves
  handleBooks = (book, shelf) => {
    this.setState(() => ({
      books: this.state.books.map((b) => {
        if (b.id === book.id) {
          b.shelf = shelf
        } 
        // console.log("b",b)
        return b
      })
    }))

    BooksAPI.update(book, shelf);
    
    // Another way to re-render the app after updating but it causes some part of delay.

    // BooksAPI.getAll().then((books) => {
    //   this.setState(() =>({
    //     books
    //   }))
    // })
  };



  /*
  Two Main components handle the entire app 
  1. Home which has shelves and books inside
  2. SearchPage which has the search bar to discover new books
  */

  render() {
    const { books } = this.state;
    // console.log(this.state.books);
    return (
      <div className="app">
        <Route
          exact path='/'
          render={() =>(
            <Home 
              handleBooks={this.handleBooks} 
              books={books}
            />
          )}        
        />

        <Route
          path='/search'
          render={() => (
            <SearchPage
              handleBooks={this.handleBooks}
              books={books}
            />
          )}
        />
      </div>
    )
  }
}

export default BooksApp;