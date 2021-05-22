import {ADD_TASK} from "../types/types"


const intialState = [{
	id:1,
	name : 'Hello',
	body: 'test',
	assignedTo : [],
	duedate: new Date(),
	comments : []
}]

export const todoReducer = (state = intialState,action) =>{
	switch(action.type){
		case ADD_TASK:
			return [...state,action.todos]		
		default :
			return state
	}
}