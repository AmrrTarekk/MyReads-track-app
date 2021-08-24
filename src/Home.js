import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Catgories from './Catgories';



class Home extends Component {

  static propTypes = {
    books: PropTypes.array.isRequired,
    handleBooks: PropTypes.func.isRequired,
  };

  onHandleBooks = (book,shelf) => {
    this.props.handleBooks(book,shelf);
  };


  /*
  Inside Home component: 
  1. There's Catgories component which handles the shelves
  2. A button to get to the Search Page
  */

    render() {
      const { books } = this.props;
      // console.log('sss', this.onHandleBooks);
      // console.log('books', books);
        return (
          <div>
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
                <div>
                  <Catgories
                    books={books}
                    onHandleBooks={this.onHandleBooks}
                  />
                </div>
              <div className="open-search">
                <Link 
                  to='/search'
                >
                  <button>Add a book</button>
                </Link>
              </div>
            </div>
          </div>
        )
    }
}
export default Home;