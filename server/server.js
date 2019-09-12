var express = require('express')
const graphqlIHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

var app = express();

// allow cross origin access
app.use(cors());
//app.use(express.static('public'));

mongoose.connect('mongodb+srv://pratikhcu:passwd123@cluster0-h0xu2.mongodb.net/test?retryWrites=true&w=majority');
mongoose.connection.once('open', ()=> {
	console.log("Connected to database");
})

app.use('/graphql', graphqlIHTTP({
	schema,
	graphiql: true
	
}));

app.listen(3030, ()=>{
	console.log("Server is running at 3030");
});

// app.get('/user/:id', function (req, res) {
// 	res.send('user ' + req.params.id)
//   })
  
//   app.get("/", function(request, response) {
// 		  response.send("<div>test<div>");
// 	  }
//   );