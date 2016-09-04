import React from 'react';
import { Link } from 'react-router';

class NavBar extends React.Component {
	constructor(props) {
		super(props);
	}

	goToPage() {

	}

	render() {
		return (
			<nav className="navbar">	
				<div className="container-fluid">
					<ul className="nav navbar-nav navbar-right" id="navigation-items">
						<li className="nav-item">
							<Link to='projects'>Projects</Link>
						</li>
						<li className="nav-item">
							<a className="nav-link">Resume</a>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}

export default NavBar;