import React from 'react';
import Modal from 'react-modal'

Modal.setAppElement('#root');

const ProjectModal = (props)=>{
	console.log("Modal Opened",props)
	const { isModalOpen, onClose} = props;

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
	

	return(
		<Modal
		isOpen={isModalOpen}
		style={customStyles}
		contentLabel="Example Modal"
	  >
		
			<input type="text" className="form-control" placeholder="Name a Project" autoFocus></input>
			<button className='float-right btn mt-3 btn' style={{borderColor:'#2da562',backgroundColor:'#fff',color:'#2da562',borderRadius:'16px',fontSize:'14px'}} onClick={()=>onClose(false)}>Cancel</button>
		 	<button className='float-right btn mt-3 mr-3' style={{backgroundColor:'#2da562',borderColor:'#2da562',color:'#fff',borderRadius:'16px',fontSize:'14px',paddingRight:'20px',paddingLeft:'20px'}}>Save</button>
		
	  </Modal>
	)
}

export default ProjectModal