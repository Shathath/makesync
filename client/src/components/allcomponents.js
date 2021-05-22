import React from 'react';
import Icons from '../utils/icons';



export default function AllComponents(){
	return (
		<section>
			<main>
				<div className="container-fluid">
						<div className="row" style={{height:'95vh'}}>
							<div className="col-lg-2 col-sm-1 mb-3" style={{backgroundColor:'#24244C',color:'#fff',alignItems:'center',justifyContent:'center'}}>
								    <div className="user-info mt-3" style={{display:'flex'}}>
										<img src="https://picsum.photos/200/300" style={{borderRadius:'50%',width:'30px',height:'30px'}} />
										<span className="ml-3 d-none d-lg-block d-sm-none">Shathath</span>
									</div>
									<li className="mt-3" style={{listStyle:'none',display:'flex',}}><Icons name="LIST"     width="25" height="25" stroke="#fff"/><span className="ml-3  d-lg-block d-sm-none">My Projects</span></li>
									<li className="mt-2" style={{listStyle:'none',display:'flex',}}><Icons name="KANBAN"   width="25" height="25" stroke="#fff"/><span className="ml-3  d-md-none d-lg-block d-sm-none">Kanban board</span></li>
									<li className="mt-2" style={{listStyle:'none',display:'flex',}}><Icons name="CALENDAR" width="25" height="25" stroke="#fff"/><span className="ml-3  d-md-none d-lg-block d-sm-none">Events</span></li>
							</div>
							<div className="col-lg-8 col-sm-9 mb-3" style={{}}>

							</div>
							
						</div>
				</div>
			</main>
		</section>

	)
}