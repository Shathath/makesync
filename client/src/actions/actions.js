import axios from 'axios';

export const addProject = (projectObj) =>({
	type: 'ADD_PROJECT',
	projectObj
})

export const initLoad = (type,loaderflag)=>({
	type ,
	loaderflag
})

export const onError = (error)=>({
	type:'ERROR_MSG',
	error
})
export const initialize = (projectObj)=>({
	type : 'INIT',
	projectObj
})

export const loadProjects = ()=>{
	return (dispatch) =>{
		
		dispatch(initLoad('START_LOADER',true))
		console.log('After loadin')
		axios.get(`http://localhost:3001/getprojects`,{
			params:{
				userid : 1
			}
		}).then(response =>{
			if(response.data.message === 'success'){
				dispatch(initialize(response.data))
				dispatch(initLoad('END_LOADER',false))
			}
		}).catch(error =>{
			dispatch(onError(error.message))
	})
}
}

export const addNewProject = (projectname,callback)=>{
	return (dispatch) =>{
		dispatch(initLoad('START_LOADER',true))

		axios.post(`http://localhost:3001/addProject`,{projectname : projectname}).then(response =>{
			if(response.data.message === 'success')
				dispatch(addProject(response.data.project))
				dispatch(initLoad('END_LOADER',false))
				callback()
		
			}).catch(error =>{
			dispatch(onError(error.message))
		})

	}
}