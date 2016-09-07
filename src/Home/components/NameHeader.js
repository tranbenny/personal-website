import React from 'react';
import { Link } from 'react-router';

class NameHeader extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="main-section" id="particles-js">
				<div className="container-fluid">
					<h1>Benny Tran</h1>
					<p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris laoreet tortor et luctus congue. Curabitur.</p>
					<ul>
						<li className="offset-md-3 col-md-3"><button><Link to='/projects'>Projects</Link></button></li>
						<li className="col-md-3"><button><Link to='/resume'>Resume</Link></button></li>
					</ul>
				</div>
			</div>
		);
	}

	componentDidMount() {
		// REMOVE LOG STATEMENT IN FINAL APP
		particlesJS.load('particles-js', './assets/particles.json', function() {
  			console.log('callback - particles.js config loaded');
		});
	}

}

export default NameHeader;