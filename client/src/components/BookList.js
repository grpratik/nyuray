import React, {Component} from 'react';
import {graphql} from 'react-apollo';
import {getBooksQuery} from '../queries/queries'
import BookDetails from './BookDetails';

//import { from } from 'zen-observable';
//import logo from './logo.svg';

class BookList extends Component{
    constructor(props){
      super(props);
      this.state = {
        selected: null
      }
    }
    displayBooks(){
        var data = this.props.data;
        if (data.loading){
          return (<div>Loading Books ...</div>)
        }else{
          return data.books.map(book => {
            return(
            <li key={book.id} onClick={(e) => {this.setState({selected: book.id})}}>{book.name}</li>
            );
          });
        }
      }
    render(){
        console.log(this.props);
        return(
            <div>
                <ul id="book-list">
                    {this.displayBooks()}
                </ul>
                <BookDetails bookId = {this.state.selected}/>
            </div>
        );
    }
}
// function App() {
//   return (
//     <div id="main" className="App">
//       <h1>Ninja's Reading List</h1>
//     </div>
//   );
// }

export default graphql(getBooksQuery) (BookList);
