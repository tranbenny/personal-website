import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

// components
import Layout from './Home/Layout.js';

ReactDOM.render(
	(
		<Router history={hashHistory}>
			<Route path="/" component={Layout} />
		</Router>
	),
	document.getElementById("main-container")
);