import React from 'react';

import AllComponents from '../src/components/allcomponents'
import {BrowserRouter} from 'react-router-dom';

function App(){

	return(
		<BrowserRouter>
			<div>
				<AllComponents />
			</div>
		</BrowserRouter>
	)
}

export default App