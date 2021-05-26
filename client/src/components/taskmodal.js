import axios from 'axios';
import React from 'react';
import Modal from 'react-modal'

Modal.setAppElement('#root');

const TaskModal = ()=>{
	const [searchedUsers,setSearchedUsers] = React.useState([]);
	const [assignedUsers,setAssignedUsers] = React.useState([]);
	const [isdropdown,showDropDown] = React.useState(false)

	const customStyles={
		content : {
			top                   : '30%',
			left                  : '50%',
			right                 : 'auto',
			bottom                : 'auto',
			marginRight           : '-50%',
			transform             : 'translate(-50%, -50%)',
			width : '40%',
			height : '60%'
		  }
	}

	function getUsers(e){
		if(!e.target.value) setSearchedUsers([])
		axios.get(`http://localhost:3001/getusers?username=${e.target.value}`).then(response =>{
			if(response.data.message === 'success'){
				const { users } = response.data;
				if(users.length > 0){
					showDropDown(true)
					setSearchedUsers(users)
				}
			}
		}).catch(error => console.log(error))
	}

	function selectUsers(e){
		console.log(e.target)
		let obj = {
			name:e.target.dataset['name'],
			id:parseInt(e.target.id)
		}
		console.log("Obj",obj)
		setAssignedUsers([...assignedUsers,obj])
		showDropDown(false)
	}
	console.log("Assigned Users",assignedUsers)
	return(
		<Modal isOpen={true} style={customStyles} contentLabel="">
			<form>
				<div className="form-group row">
					<label for="inputEmail3" className="col-sm-2 col-form-label">Name</label>
					<div className="col-sm-10">
						<input type="email" className="form-control" id="inputEmail3" placeholder="Enter the task name" />
					</div>
				</div>
				<div className="form-group row">
					<label for="Notifyto" className="col-sm-2 col-form-label">Password</label>
					<div className="col-sm-10">
						{assignedUsers.length > 0 ? assignedUsers.map((val)=>{
							  console.log("Hey Caling")
								return <span>{val.name}</span>
						}):null}
						<input type="text" className="form-control" id="NotifiyTo" placeholder="" onChange={(e)=>getUsers(e)}/>
						<div className="userdropdown" style={{width:'50%'}} onClick={selectUsers}>
							{isdropdown && selectUsers.length > 0 ? searchedUsers.map(val =>{
									return <div className="username" key={val.id} data-name={val.name} id={val.id}>{val.name}</div>
							}):null}
						</div>
					</div>
				</div>
			</form>
	</Modal>
	)
}

export default TaskModal