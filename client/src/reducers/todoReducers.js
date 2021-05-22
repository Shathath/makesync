import {ADD_TASK} from "../types/types"


const intialState = [{
	id:1,
	name : 'Server Configuration',
	createdBy :'shathatha',
	date : new Date(),
	description : 'system wide server configuration for the',
	todos : [],
	
}]

export const projectReducer = (state = intialState,action) =>{
	switch(action.type){
		case ADD_TASK:
			return [...state,action.todos]		
		default :
			return state
	}
}