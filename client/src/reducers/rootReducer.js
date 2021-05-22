import {combineReducers} from 'redux'
import {projectReducer} from './todoReducers'

export const rootReducer = combineReducers({
	  projects: projectReducer,
	})
  

export default rootReducer