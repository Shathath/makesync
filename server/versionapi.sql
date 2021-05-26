CREATE TABLE USERS(id serial primary key, name varchar(30),email varchar(30))

create table todos(
	id serial primary key, 
	name varchar(100), 
	notes varchar(1000), 
	createdby int references Users(id),
	assignedto varchar(200),
	notifyingto varchar(200)
)



