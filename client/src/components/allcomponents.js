import React from 'react';

import Routes from './routes';
import {BrowserRouter as Router, Switch,withRouter,Route } from 'react-router-dom'
import MainComponent from './maincomponent';

import Icons from '../utils/icons'

function AllComponents(){
  	
	return (
		<section>
			<main>
				<div className="container-fluid">
					<Router>
						<div className="row" style={{height:'100vh',overflowY:'hidden'}}>
							<div className="col-lg-2 col-md-2 col-sm-3 sidebar" style={{backgroundColor:'#24244C',color:'#fff',alignItems:'center',justifyContent:'center'}}>
								    <div className="user-info mt-3" style={{display:'flex',alignItems:'center',marginLeft:'30px'}}>
										<img src="https://picsum.photos/200/300" alt="test" style={{borderRadius:'50%',width:'30px',height:'30px'}} />
										<span className="ml-3 d-none d-lg-block d-sm-none" style={{width:'60%'}}>Shathath</span>
										<span className="gear"><Icons name="GEAR" width='25' height='25' stroke="#fff" float="right" /></span>
									</div>
									<Routes />
							</div>
							<div className="col-lg-10 col-md-10 col-sm-9 mb-3" style={{paddingBottom:'5rem'}}>
									<Switch>
										<Route path='/myprojects' component={()=><MainComponent name="myprojects"></MainComponent>}></Route>
										<Route path='/kanban' component={()=><MainComponent name="kanbanboard"></MainComponent>}></Route>
									</Switch>
							</div>
							
						</div>
					</Router>
				</div>
			</main>
		</section>

	)
}

export default withRouter(AllComponents)