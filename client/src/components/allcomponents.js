import React from 'react';

import Routes from './routes';
import {BrowserRouter as Router, Switch,withRouter,Route } from 'react-router-dom'
import MainComponent from './maincomponent';

function AllComponents(){
  	
	return (
		<section>
			<main>
				<div className="container-fluid">
					<Router>
						<div className="row" style={{height:'95vh'}}>
							<div className="col-lg-2 col-sm-1 mb-3 sidebar" style={{backgroundColor:'#24244C',color:'#fff',alignItems:'center',justifyContent:'center'}}>
								    <div className="user-info mt-3" style={{display:'flex'}}>
										<img src="https://picsum.photos/200/300" style={{borderRadius:'50%',width:'30px',height:'30px'}} />
										<span className="ml-3 d-none d-lg-block d-sm-none">Shathath</span>
									</div>
									<Routes />
							</div>
							<div className="col-lg-8 col-sm-9 mb-3" style={{}}>
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