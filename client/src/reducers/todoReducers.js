import {ADD_TASK,START_LOADER,END_LOADER,ERROR_MSG,INIT} from "../types/types"


const intialState = {
	loaderflag : false,
	projects : [],
	error : null
}


export const projectReducer = (state = intialState,action) =>{
	switch(action.type){
		case START_LOADER :
			return {...state,loaderflag:true}
		case ADD_TASK:
			return {...state,projects: [...state.projects,action.projectObj]}
		case END_LOADER:
			return {...state,loaderflag:false,success:''}
		case ERROR_MSG:
			return {...state, error : 'Something went wrong'}
		case INIT:
			return {...state,projects:action.projectObj}
		default :
			return state
	}
}