import React, {useEffect,useState} from 'react';
import {useLocation} from 'react-router';
import {connect} from 'react-redux';
import Spinner from './spinner'
import TaskModal from './taskmodal'


const ProjectDetails = (props)=>{
	const {pathname} = useLocation();
	const [openModal,setOpenModal] = useState(false)
	const id = pathname.split('/')[2];
	const [project,setProjectObj] = React.useState([])

	useEffect(()=>{
		const projects = [...props.projectDetails.projects.projects]
		const projectObj = projects.filter(pobj => pobj.id == id)
		setProjectObj(projectObj[0])
	},[])
	return(
			<div className="row">
				<div className="col-lg-9" style={{backgroundColor:'#FFF',borderRight:'12px solid #ededed',height:'100vh'}}>
					{props.isloading ? <Spinner /> : null}
					<h4 className="bold">{project.name}</h4>
					<button className="btn btn-danger float-left" onClick={()=>setOpenModal(true)}>Add Todos</button>
					{openModal ? <TaskModal closeModal={setOpenModal} /> : null}
				</div>
				<div className="col-lg-3" style={{backgroundColor:'#ededed',borderRight:'12px solid #ededed',height:'100vh'}}>
						<div className="card">
							<div className="card-body">
								<h1>Activies</h1>
							</div>
						</div>

						<div className="card">
							<div className="card-body">
								<h1>Activies</h1>
							</div>
						</div>
					
				</div>
			</div>
	)
}

const mapStateToProps = (state)=>{
	return{
		projectDetails : state.allprojects,
		isloading : state.allprojects.loaderflag
	}
}
export default connect(mapStateToProps,null)(ProjectDetails)