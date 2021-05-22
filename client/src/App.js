import React from 'react';
import {connect} from 'react-redux'

import { addTodo } from '../src/actions/actions'
import AllComponents from '../src/components/allcomponents'
import {BrowserRouter,withRouter} from 'react-router-dom';

function App(props){

	return(
		<BrowserRouter>
			<div>
				<AllComponents />
			</div>
		</BrowserRouter>
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