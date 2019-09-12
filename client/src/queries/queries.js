import {gql} from 'apollo-boost'

const getAuthorsQuery = gql`
    {
        authors{
            name
            id
            age
        }
    }
`
const getBooksQuery = gql`
    {
        books{
            name
            id
        }
    }
`
const addBookMutation = gql`
    mutation($name: String!, $genre: String!, $authorid: String!){
        addBook(name: $name, genre: $genre, authorid: $authorid){
            name
            genre
            id
        }
    }
`
const getBookQuery = gql`
    query($id:ID){
        book(id: $id){
            id
            name
            genre
            author{
                id
                name
                age
                books{
                    name
                    genre
                    id
                }
            }
        }
    }
`
export {getAuthorsQuery, getBooksQuery, addBookMutation, getBookQuery}