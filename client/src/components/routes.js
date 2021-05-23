import React from 'react'
import {NavLink,useLocation} from 'react-router-dom';


import Icons from '../utils/icons';
import '../css/main.css'

export default function Routes(){
	const location = useLocation().pathname;
	let isProject,isKanban,isevents = ''
	if(location.includes('projects') === '/projects') isProject='active'
	else if(location === '/kanban') isKanban='active'
	else
		isevents = 'active'

	return(
		<React.Fragment>
			<li className={`mt-3 ${isProject}`} style={{listStyle:'none',display:'flex',}}>
				<NavLink className="hide-route-style" to='/projects'>
					<Icons name="LIST"  width="25" height="25" stroke="#fff"/><span className="ml-3  d-lg-block d-sm-none">My Projects</span>
				</NavLink>
			</li>
			<li className={`mt-2 ${isKanban}`} style={{listStyle:'none',display:'flex',}}>
				<NavLink className="hide-route-style" to='/kanban'>
	  				<Icons name="KANBAN"  width="25" height="25" stroke="#fff"/><span className="ml-3  d-md-none d-lg-block d-sm-none">Kanban board</span>
				</NavLink>
			</li>
			<li className={`mt-2 ${isevents}`} style={{listStyle:'none',display:'flex',}}>
				<NavLink className="hide-route-style" to='/events'>
	  				<Icons name="CALENDAR"  width="25" height="25" stroke="#fff"/><span className="ml-3  d-md-none d-lg-block d-sm-none">Events</span>
				</NavLink>
			</li>
			
		</React.Fragment>
	)
}