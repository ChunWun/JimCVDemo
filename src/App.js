import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home';

const base = '/:locale(zh-tw|zh-cn)?';

//	localhost:3000/zh-tw/home 

const App = () => (
	<Router>
		<div >
			<Route path={`${base}/home`} component={Home} />
		</div>
	</Router>
);

export default App;