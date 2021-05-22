import React from 'react';
import {connect} from 'react-redux';
import Icons from '../utils/icons';
import ProjectModal from './modal';

function Projects(props){
	const [isModalOpen,setModal]  = React.useState(false);
	
	return(
		<main>
			<button className='btn' onClick={()=>setModal(true)} style={{borderRadius:'50%',fontSize:'20px',textAlign:'center',backgroundColor:'#644CF3', boxShadow: '0px 0px 0px 6px #DEDEED',position:'fixed',bottom:'100px',right:'60px'}}><Icons name='PLUS' width='20' height='20' stroke='#fff'></Icons></button>
			{isModalOpen ? <ProjectModal onClose={setModal} isModalOpen={isModalOpen}/> : null}
		</main>
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

export default connect(mapStateToProps,mapDispatchToProps)(Projects)