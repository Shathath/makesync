import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import Icons from '../utils/icons';
import ProjectModal from './modal';
import {loadProjects} from '../actions/actions'
import {withRouter} from 'react-router';

function Projects(props){
	const [isModalOpen,setModal]  = React.useState(false);
	const { projects : {projects} } = props.projectObj;
	
	useEffect(()=>{
		props.loadProjects()
	},[])

	const gotoProjectPage = (id)=>{
		props.history.push(`/projects/${id}`)
	}
	//console.log("My Projects",projects,projects.length)
	return(
		<div>
		<div className="row mt-3" style={{marginLeft:'5rem'}}>
					<div className="col-lg-6 col-md-4 col-sm-12 ml-3">
						<input className='form-control' type='text' placeholder="Search projects"/>
					</div>
					<div className="col-lg-3 col-md-4 col-sm-12 ml-3 ">
						<button className="btn btn-primary">Search</button>
					</div>
		</div>
		<div style={{height:'95vh',overflowY:'scroll'}}>
			<div className ="col-lg-12 col-md-6 col-sm-4">
				<div className="row" style={{marginLeft:'4rem'}}>
					{projects && projects.length > 0 ? projects.map((val)=>{
							return (
								
									<div className='col-xl-3 col-lg-4 col-sm-6 col-md-12 ml-3 mt-3'>
										<div className="card vertical-dot" style={{width: "15rem",height:'130px',}} key={val.id} onClick={()=>gotoProjectPage(val.id,val.name)}>
											<div className="card-body">
												<div className="vertical-dot" style={{float:'right'}}>
													<Icons name='DOT' width='20' height='20' />
												</div>
												<h6 className="card-title bold" style={{width:'80%'}}>{val.name}</h6>
												<p>{val.description}</p>
											</div>
										</div>
									</div>
								
								
							)
						}) : <h1>No projects has been created yet. Please click plus button to create new Project</h1>
					}	
				</div>		
			</div>
		</div>

			
			<button className='btn' onClick={()=>setModal(true)} style={{borderRadius:'50%',fontSize:'20px',textAlign:'center',backgroundColor:'#644CF3', boxShadow: '0px 0px 0px 6px #DEDEED',position:'fixed',bottom:'100px',right:'60px'}}><Icons name='PLUS' width='20' height='20' stroke='#fff'></Icons></button>
			{isModalOpen ? <ProjectModal onClose={setModal} isModalOpen={isModalOpen}/> : null}
		   </div>
	)
}

const mapStateToProps = (state,props)=>{
	return {
		projectObj : state.projects
	}
}
const mapDispatchToProps = (dispatch)=>{
	return {
		loadProjects : ()=> dispatch(loadProjects())
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Projects))