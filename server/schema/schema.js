const graphql = require('graphql');
const _ = require('lodash');
const Book = require("../models/book");
const Author = require("../models/author");
const {GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLInt, GraphQLList, GraphQLNonNull} = graphql;

// const books = [
//     {name: 'Name of the Wind', genre: 'Fantasy', id: '1', authorid: '1'},
//     {name: 'The Final Empire', genre: 'Fantasy', id: '2', authorid: '2'},
//     {name: 'The Long Earth', genre: 'Sci-Fi', id: '3', authorid: '3'},
//     {name: 'The Hero of Ages', genre: 'Fantasy', id: '4', authorid: '2'},
//     {name: 'The Colour of Magic', genre: 'Fantasy', id: '5', authorid: '3'},
//     {name: 'The Light Fantastic', genre: 'Fantasy', id: '6', authorid: '3'}
//   ]
  const registrations =  [
    {userName: 'Pratik Krishna', emailId: "ab@gmail.com", password:'ab', mobile: "123456"},
    {userName: 'Basha Shaik', emailId: "cd@gmail.com", password:'cd', mobile: "1234569"},
    {userName: 'Rahul Lekkala', emailId: "ef@gmail.com", password:'ef', mobile: "123450"},
  ]

const RegistrationType = new GraphQLObjectType({
    name: 'Registration',
    fields: () => ({
        userName: {type: GraphQLString},
        emailId: {type: GraphQLString},
        mobile: {type: GraphQLString},
        password: {type: GraphQLString}
    })
});

const LoginType = new GraphQLObjectType({
    name: 'Login',
    fields: () => ({
        userName: {type: GraphQLString},
        password: {type: GraphQLString}
    })
});

const BookType = new GraphQLObjectType({
    name:'Book',
    fields:() =>({
        id: {type:GraphQLID},
        name: {type:GraphQLString},
        genre: {type:GraphQLString},
        author: {
            type: AuthorType,
            resolve(parent, args){
                console.log("The parent is : "+parent);
//                return _.find(authors, {id: parent.authorid});
                return Author.findById(parent.authorid);
        } 
    }

    })
});

const AuthorType = new GraphQLObjectType({
    name:'Author',
    fields: () => ({
        name: {type:GraphQLString},
        age: {type:GraphQLInt},
        id: {type: GraphQLID},
        books: {
            type: new GraphQLList(BookType),
            resolve(parent, args){
//                return _.filter(books, {authorid : parent.id})
                return Book.find({authorid: parent.id})
            }

        }        
    })
})
const RootQuery = new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
        book: {
            type: BookType,
            args: {id:{type: GraphQLID}},
            resolve(parent, args){
//                return _.find(books, {id: args.id});
                return Book.findById(args.id);
            }
        },
        author: {
            type: AuthorType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args){
//                return _.find(authors, {id: args.id});
                return Author.findById(args.id);
            }
        },
        books: {
            type: new GraphQLList(BookType),
            resolve(parent, args){
//                return books;
                return Book.find({});
            }
        },
        authors: {
            type: new GraphQLList(AuthorType),
            resolve(parent, args){
//                return authors;
                return Author.find({});
            }
        },
        Registration: {
            type: RegistrationType,
            args: {userName: {type: GraphQLString}},
            resolve(parent, args){
                return _.find(registrations, {userName: args.userName});
            }
        }
    }
});

const Mutation = new GraphQLObjectType({
    name:'Mutation',
    fields:{
        addAuthor : {
            type: AuthorType,
            args: {
                name: {type: new GraphQLNonNull(GraphQLString)},
                age: {type: new GraphQLNonNull(GraphQLInt)}
            },
            resolve(parent, args){
                let author = new Author({
                    name: args.name,
                    age: args.age
                });
                return author.save();  
            }
            
        },
        addBook: {
            type: BookType,
            args: {
                name: {type: new GraphQLNonNull(GraphQLString)},
                genre: {type: new GraphQLNonNull(GraphQLString)},
                authorid: {type: new GraphQLNonNull(GraphQLString)}
            },
            resolve(parent, args){
                let book = new Book({
                    name: args.name,
                    genre: args.genre,
                    authorid: args.authorid
                });
                return book.save();
            }
        },
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
})
