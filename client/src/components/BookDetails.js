import React, {Component} from 'react';
import {graphql} from 'react-apollo';
import {getBookQuery} from '../queries/queries'

class BookDetails extends Component{
    displayBookDetails(){
        const {book} = this.props.data;
        console.log("Book clicked is :"+this.props.bookid)
        if (book)
        {
            return(
                <div>
                    <h2>{book.name}</h2>
                    <p>{book.genre}</p>
                    <p>{book.author.name}</p>
                    <p>All Books by this author</p>
                    <ul className="otherbooks">
                        {book.author.books.map(item =>{
                            return<li key={item.id}>{item.name}</li>
                        })
                    }
                    </ul>
                </div>);
        }else{
            return(<div>No Book Selected</div>);
        }
    }

    render(){
        console.log(this.props);
        return(
            <div id="book_details">
                <p>Book Details here</p>
                {this.displayBookDetails()}
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

export default graphql(getBookQuery, 
    {
        options: (props) => {
            return{
                variables: {
                    id: props.bookid
                }
            }
        }
    }
    ) (BookDetails);
