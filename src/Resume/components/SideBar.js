import React from 'react';

class SideBar extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="col-md-3 col-sm-0" id="particle-side-bar">

			</div>
		);
	}

	// REMOVE LOG STATEMENT FROM FINAL PROJECT
	componentDidMount() {
		particlesJS.load('particle-side-bar', './assets/particles.json', function() {
  			console.log('callback - particles.js config loaded');
		});
	}

}

export default SideBar;