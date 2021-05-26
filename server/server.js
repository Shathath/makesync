const express = require('express')
const app = express();
const cors = require('cors')

const {db} = require('./config');

app.use(express.json())
app.use(express.urlencoded({
	extended: true
}))
app.use(cors())

app.get('/',()=>{
	db.query('select * from Users',(error,results)=>{
		if(error)
			return console.log("Error",error)
		console.log("Results",results)
	})
})

app.get('/getusers',(req,res)=>{
	const {username} = req.query;
	if(!username)
		return 
	db.query(`select name,id from users where name like '%${username}%' order by name asc`,(err,result)=>{
		if(err)
			return res.status(400).send({message:'failure',error:'Something went wrong'})
		return res.status(200).send({message:'success',users:result.rows})
	})
})

app.get('/getprojects',(req,res)=>{
	const userid = req.query.userid;
	db.query(`select * from projects where createdby=${userid}`,(error,result)=>{
		if(error)
			return res.status(400).send({message:'Something went wrong'})
		res.status(201).send({
			message:'success',
			projects: result.rows
		})
	})
})

app.post('/addproject',(req,res)=>{
	const {projectname,description ='Hello'} = req.body;

	db.query('Insert into projects (name,description,createdby) values ($1,$2,$3) RETURNING *',[projectname,description,1],(error,result)=>{
		if(error)
			res.status(400).send({message:'Something went wrong'})
		res.status(201).send({
			message:'success',
			project: result.rows[0]
		})

		
	})
})

app.listen(3001,()=>{
	console.log("Server Started Successfully 3001")
})