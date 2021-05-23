import React from 'react';
import Modal from 'react-modal';
import {connect} from 'react-redux';

import {addNewProject} from '../actions/actions';

Modal.setAppElement('#root');

const ProjectModal = (props)=>{
	
	const { isModalOpen, onClose,isloading} = props;

	const [projectName,setProjectName] = React.useState('');

	const customStyles={
		content : {
			top                   : '30%',
			left                  : '50%',
			right                 : 'auto',
			bottom                : 'auto',
			marginRight           : '-50%',
			transform             : 'translate(-50%, -50%)'
		  }
	}

	function onSave(){
		 props.addNewProject(projectName,()=>{
			 if(props.error)
			 	console.log(props.error)
			onClose(false)
		 })
	}
	return(
		<Modal isOpen={isModalOpen} style={customStyles} contentLabel="Example Modal">
			<input type="text" className="form-control" placeholder="Name a Project" autoFocus value={projectName} onChange={(e)=>setProjectName(e.target.value)}></input>
			<button className='float-right btn mt-3 btn' style={{borderColor:'#2da562',backgroundColor:'#fff',color:'#2da562',borderRadius:'16px',fontSize:'14px'}} onClick={()=>onClose(false)}>Cancel</button>
		 	<button className='float-right btn mt-3 mr-3' disabled={isloading} style={{backgroundColor:'#2da562',borderColor:'#2da562',color:'#fff',borderRadius:'16px',fontSize:'14px',paddingRight:'20px',paddingLeft:'20px'}} onClick={onSave}>
			 {isloading ? <span className="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span>: null } 
			 	Save
			</button>
	  </Modal>
	)
}

const mapStateToProps = (state) => {
	return {
		isloading  : state.projects.loaderflag
	}
}
const mapDisPatchToProps = (dispatch)=>{
	return{
		addNewProject : (projectname,callback)=>dispatch(addNewProject(projectname,callback))
	}
}
export default connect(mapStateToProps,mapDisPatchToProps)(ProjectModal)