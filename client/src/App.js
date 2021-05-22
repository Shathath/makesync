import React from 'react';
import {connect} from 'react-redux'

import { addTodo } from '../src/actions/actions'
import AllComponents from '../src/components/allcomponents'

function App(props){
	console.log("Props",props)
	return(
		<div>
			<AllComponents />
		</div>
	)
}
const mapStateToProps = (state,props)=>{
	return {
		todos : state.todos
	}
}
const mapDispatchToProps = (dispatch)=>{
	return {

	}
}
export default connect(mapStateToProps,mapDispatchToProps)(App)