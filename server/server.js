const express = require('express')
const app = express();
const {db} = require('./config');

db.query('select * from Users',(error,results)=>{
	if(error)
		return console.log("Error",error)
	console.log("Results",results.rows)
})

app.get('/',()=>{
	db.query('select * from Users',(error,results)=>{
		if(error)
			return console.log("Error",error)
		console.log("Results",results)
	})
})
app.listen(3001,()=>{
	console.log("Server Started Successfully")
})