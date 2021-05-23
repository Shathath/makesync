import {combineReducers} from 'redux'
import {projectReducer} from './todoReducers'

export const rootReducer = combineReducers({
	  allprojects: projectReducer,
	})
  

export default rootReducer