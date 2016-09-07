import React from 'react';
/* TODO: 
	- set up react router for projects
	- set up navbar scrolling
	- set up scrolling animations 
	- set up navigation links

	- make responsive for different screens

	- SPLIT LAYOUT INTO COMPONENTS
*/

// components
import NavMenu from './components/NavMenu';
import Project from './components/Project';

class Layout extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="container-fluid project-container">
				<button className="next-btn"><i className="fa fa-angle-down fa-2x" aria-hidden="true"></i></button>
				<NavMenu />
				<Project />
			</div>
		);
	}
}

export default Layout;